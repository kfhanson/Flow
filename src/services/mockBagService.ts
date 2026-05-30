import { getProductDetails, getVariant } from './mockCatalogService'
import { mockProducts } from '../data/mockProducts'
import type { AssistantResponse } from '../types/assistant'
import type { BagItem } from '../types/commerce'

const bagItemsByUser = new Map<string, BagItem[]>()

function createItemId() {
  return `bag-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`
}

function setBagItems(userId: string, items: BagItem[]) {
  bagItemsByUser.set(userId, items)
}

export function getBagItems(userId: string) {
  return bagItemsByUser.get(userId) ?? []
}

export function clearBag(userId: string) {
  setBagItems(userId, [])
}

export function getBagSubtotal(items: BagItem[]) {
  return items.reduce((total, item) => {
    const product = mockProducts.find((entry) => entry.productId === item.productId)
    return total + (product?.price ?? 0) * item.quantity
  }, 0)
}

export function addToBag(params: {
  userId: string
  productNameOrSlug: string
  size?: number
  color?: string
  quantity?: number
}): AssistantResponse {
  const product = getProductDetails(params.productNameOrSlug)
  if (!product) {
    return {
      type: 'text',
      title: 'Product not found',
      body: 'I could not match that product in the Flow demo catalog yet.',
    }
  }

  if (!params.size || !params.color) {
    return {
      type: 'clarification',
      question: `Which ${product.name} size and color should I add?`,
      options: [
        `Sizes: ${product.sizes.join(', ')}`,
        `Colors: ${product.colorways.join(', ')}`,
      ],
      suggestedActions: [
        {
          label: 'Use demo example',
          prompt: `Add ${product.name}, size 42, ${product.colorways[0]} to my bag`,
        },
      ],
    }
  }

  const variant = getVariant(product.productId, params.size, params.color)
  if (!variant) {
    return {
      type: 'clarification',
      question: `${product.name} is not available in that size and color combination.`,
      options: [
        `Sizes: ${product.sizes.join(', ')}`,
        `Colors: ${product.colorways.join(', ')}`,
      ],
    }
  }

  const nextQuantity = params.quantity ?? 1
  const currentItems = getBagItems(params.userId)
  const existing = currentItems.find((item) => item.variantId === variant.variantId)
  const nextItems = existing
    ? currentItems.map((item) =>
        item.variantId === variant.variantId
          ? { ...item, quantity: item.quantity + nextQuantity }
          : item,
      )
    : [
        ...currentItems,
        {
          itemId: createItemId(),
          productId: product.productId,
          variantId: variant.variantId,
          size: variant.size,
          color: variant.color,
          quantity: nextQuantity,
        },
      ]

  setBagItems(params.userId, nextItems)

  return {
    type: 'bag',
    title: 'Added to your bag',
    body: `${product.name}, color ${variant.color}, size ${variant.size}, quantity ${nextQuantity}.`,
    items: nextItems,
    subtotal: getBagSubtotal(nextItems),
    suggestedActions: [
      { label: 'Show my bag', prompt: 'Show my bag' },
      {
        label: 'Place pickup order',
        prompt: 'Place an order for pickup at Flow Senayan',
      },
    ],
  }
}
