import { create } from 'zustand'
import { products } from '../data/products'
import type { CartItem } from '../data/types'

type CartState = {
  items: CartItem[]
  lastAddedProductId: string | null
  isCartOpen: boolean
  setCartOpen: (open: boolean) => void
  addItem: (productId: string) => void
  removeItem: (productId: string) => void
  setQuantity: (productId: string, quantity: number) => void
  clear: () => void
  itemCount: () => number
  subtotalIDR: () => number
}

function priceByProductId(productId: string) {
  const product = products.find((p) => p.id === productId)
  return product?.price ?? 0
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  lastAddedProductId: null,
  isCartOpen: false,
  setCartOpen: (open) => set({ isCartOpen: open }),
  addItem: (productId) =>
    set((state) => {
      const existing = state.items.find((i) => i.productId === productId)
      if (existing) {
        return {
          lastAddedProductId: productId,
          isCartOpen: true,
          items: state.items.map((i) =>
            i.productId === productId ? { ...i, quantity: i.quantity + 1 } : i,
          ),
        }
      }
      return {
        lastAddedProductId: productId,
        isCartOpen: true,
        items: [...state.items, { productId, quantity: 1 }],
      }
    }),
  removeItem: (productId) =>
    set((state) => ({
      items: state.items.filter((i) => i.productId !== productId),
    })),
  setQuantity: (productId, quantity) =>
    set((state) => {
      const nextQuantity = Math.max(0, Math.floor(quantity))
      if (nextQuantity === 0) {
        return { items: state.items.filter((i) => i.productId !== productId) }
      }
      const exists = state.items.some((i) => i.productId === productId)
      if (!exists) {
        return { items: [...state.items, { productId, quantity: nextQuantity }] }
      }
      return {
        items: state.items.map((i) =>
          i.productId === productId ? { ...i, quantity: nextQuantity } : i,
        ),
      }
    }),
  clear: () => set({ items: [] }),
  itemCount: () => get().items.reduce((acc, i) => acc + i.quantity, 0),
  subtotalIDR: () =>
    get().items.reduce(
      (acc, i) => acc + priceByProductId(i.productId) * i.quantity,
      0,
    ),
}))
