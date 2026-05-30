import { create } from 'zustand'
import { mockProducts, mockProductVariants } from '../data/mockProducts'
import type { BagItem } from '../types/commerce'

type CartState = {
  items: BagItem[]
  addVariantItem: (params: {
    productId: string
    variantId: string
    size: number
    color: string
    quantity?: number
  }) => void
  addItem: (productId: string) => void
  removeItem: (productId: string) => void
  setQuantity: (productId: string, quantity: number) => void
  setItemQuantity: (itemId: string, quantity: number) => void
  clear: () => void
  itemCount: () => number
  subtotalIDR: () => number
}

function createItemId() {
  return `bag-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`
}

function priceByProductId(productId: string) {
  const product = mockProducts.find((p) => p.productId === productId)
  return product?.price ?? 0
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  addVariantItem: ({ productId, variantId, size, color, quantity = 1 }) =>
    set((state) => {
      const existing = state.items.find((item) => item.variantId === variantId)
      if (existing) {
        return {
          items: state.items.map((item) =>
            item.variantId === variantId
              ? { ...item, quantity: item.quantity + quantity }
              : item,
          ),
        }
      }

      return {
        items: [
          ...state.items,
          {
            itemId: createItemId(),
            productId,
            variantId,
            size,
            color,
            quantity,
          },
        ],
      }
    }),
  addItem: (productId) =>
    set((state) => {
      const existing = state.items.find((item) => item.productId === productId)
      if (existing) {
        return {
          items: state.items.map((item) =>
            item.itemId === existing.itemId
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        }
      }

      const fallbackVariant = mockProductVariants.find(
        (variant) => variant.productId === productId,
      )
      if (!fallbackVariant) return state

      return {
        items: [
          ...state.items,
          {
            itemId: createItemId(),
            productId,
            variantId: fallbackVariant.variantId,
            size: fallbackVariant.size,
            color: fallbackVariant.color,
            quantity: 1,
          },
        ],
      }
    }),
  removeItem: (productId) =>
    set((state) => ({
      items: state.items.filter((item) => item.productId !== productId),
    })),
  setQuantity: (productId, quantity) =>
    set((state) => {
      const nextQuantity = Math.max(0, Math.floor(quantity))
      if (nextQuantity === 0) {
        return { items: state.items.filter((item) => item.productId !== productId) }
      }
      const existing = state.items.find((item) => item.productId === productId)
      if (!existing) return state

      return {
        items: state.items.map((item) =>
          item.itemId === existing.itemId ? { ...item, quantity: nextQuantity } : item,
        ),
      }
    }),
  setItemQuantity: (itemId, quantity) =>
    set((state) => {
      const nextQuantity = Math.max(0, Math.floor(quantity))
      if (nextQuantity === 0) {
        return { items: state.items.filter((item) => item.itemId !== itemId) }
      }
      const exists = state.items.some((item) => item.itemId === itemId)
      if (!exists) {
        return state
      }
      return {
        items: state.items.map((item) =>
          item.itemId === itemId ? { ...item, quantity: nextQuantity } : item,
        ),
      }
    }),
  clear: () => set({ items: [] }),
  itemCount: () => get().items.reduce((acc, item) => acc + item.quantity, 0),
  subtotalIDR: () =>
    get().items.reduce(
      (acc, item) => acc + priceByProductId(item.productId) * item.quantity,
      0,
    ),
}))
