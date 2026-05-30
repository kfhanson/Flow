import { suggestedPrompts } from '../data/suggestedPrompts'
import { addToBag, getBagItems, getBagSubtotal } from './mockBagService'
import {
  getProductDetails,
  getProductVariants,
  searchProducts,
} from './mockCatalogService'
import { createMockOrder, getOrders } from './mockOrderService'
import {
  getDeliveryMethods,
  getNearbyStores,
  getStoreByName,
  getStoreInventorySummary,
} from './mockStoreService'
import { detectIntent, normalizeInput } from '../utils/intent'
import type { AssistantContext, AssistantResponse } from '../types/assistant'

function promptActions(...prompts: string[]) {
  return prompts.map((prompt) => ({ label: prompt, prompt }))
}

function parseAddToBagInput(input: string) {
  const sizeMatch = input.match(/size\s+(\d+)/i)
  const productNameMatch = input.match(/add\s+(.+?)(?:,\s*size|\s+to my bag|$)/i)
  const colorMatch = input.match(/size\s+\d+\s*,\s*([^,]+?)(?:\s+to my bag|$)/i)

  return {
    productNameOrSlug: productNameMatch?.[1]?.trim() ?? '',
    size: sizeMatch ? Number(sizeMatch[1]) : undefined,
    color: colorMatch?.[1]?.trim(),
  }
}

function fallbackResponse(): AssistantResponse {
  return {
    type: 'text',
    title: 'Try one of the demo prompts',
    body: 'I can help with the Flow mock shoe catalog, shopping bag, stores, delivery options, and mock orders.',
    suggestedActions: promptActions(...suggestedPrompts.slice(0, 4)),
  }
}

export function getMockAssistantResponse(
  input: string,
  context: AssistantContext,
): AssistantResponse {
  const normalized = normalizeInput(input)
  const intent = detectIntent(normalized)

  switch (intent) {
    case 'help':
      return {
        type: 'text',
        title: 'Welcome to Flow',
        body: 'I can help you find shoes, show product details, add items to your bag, find stores, check delivery methods, place a mock order, and check order status.',
        suggestedActions: promptActions(...suggestedPrompts.slice(0, 5)),
      }

    case 'product_search': {
      if (normalized.includes('black sneakers') && normalized.includes('daily city wear')) {
        return {
          type: 'product_list',
          title: 'Black sneakers for daily city wear',
          body: 'These are the strongest matches for a black everyday city shoe.',
          products: searchProducts({
            color: 'black',
            useCase: 'daily city wear',
            limit: 3,
          }),
          suggestedActions: promptActions('Tell me more about Flow Runner', 'Show my bag'),
        }
      }

      if (normalized.includes('red accent') && normalized.includes('1.500.000')) {
        return {
          type: 'product_list',
          title: 'Red accent sneakers under Rp 1.500.000',
          body: 'These picks stay within the demo budget and keep the red accent look.',
          products: searchProducts({
            color: 'red',
            maxPrice: 1500000,
            limit: 2,
          }),
          suggestedActions: promptActions('Tell me more about Flow Runner'),
        }
      }

      return fallbackResponse()
    }

    case 'product_detail': {
      const product = getProductDetails('flow-runner')
      if (!product) return fallbackResponse()

      return {
        type: 'product_detail',
        title: product.name,
        body: `${product.name} fits true to size and is available at Flow Senayan and Flow Kemang in the demo.`,
        product,
        variants: getProductVariants(product.productId),
        suggestedActions: promptActions(
          'Add Flow Runner, size 42, black/red to my bag',
          'Find Flow stores near Jakarta',
        ),
      }
    }

    case 'add_to_bag': {
      const parsed = parseAddToBagInput(input)
      return addToBag({
        userId: context.userId,
        productNameOrSlug: parsed.productNameOrSlug || 'Flow Runner',
        size: parsed.size,
        color: parsed.color,
      })
    }

    case 'show_bag': {
      const items = getBagItems(context.userId)
      if (items.length === 0) {
        return {
          type: 'text',
          title: 'Your bag is empty',
          body: 'Try asking for black sneakers for daily city wear or add Flow Runner, size 42, black/red to my bag.',
          suggestedActions: promptActions(
            'I am looking for black sneakers for daily city wear',
            'Add Flow Runner, size 42, black/red to my bag',
          ),
        }
      }

      return {
        type: 'bag',
        title: 'Your bag',
        items,
        subtotal: getBagSubtotal(items),
        suggestedActions: promptActions(
          'Place an order for pickup at Flow Senayan',
          'Check my order status',
        ),
      }
    }

    case 'find_stores':
      return {
        type: 'store_list',
        title: 'Flow stores near Jakarta',
        body: 'All listed stores support pickup in the demo.',
        stores: getNearbyStores({ userId: context.userId, city: 'Jakarta' }),
        suggestedActions: promptActions('Show delivery options for Flow Senayan'),
      }

    case 'delivery_methods': {
      const store = getStoreByName('Flow Senayan')
      if (!store) return fallbackResponse()

      return {
        type: 'delivery_methods',
        title: `Delivery options for ${store.name}`,
        storeName: store.name,
        methods: getDeliveryMethods(store.storeId),
        suggestedActions: promptActions('Place an order for pickup at Flow Senayan'),
      }
    }

    case 'place_order': {
      const result = createMockOrder({
        userId: context.userId,
        storeName: 'Flow Senayan',
        deliveryMethodName: 'Store Pickup',
      })

      if (result.reason === 'empty_bag') {
        return {
          type: 'text',
          title: 'Your bag is empty',
          body: 'Add a product first before placing a mock order.',
          suggestedActions: promptActions('Add Flow Runner, size 42, black/red to my bag'),
        }
      }

      if (!result.order) return fallbackResponse()

      return {
        type: 'order_list',
        title: 'Mock order created',
        body: 'This is demo state only. No payment was processed and no real order was sent.',
        orders: [result.order],
        suggestedActions: promptActions('Check my order status'),
      }
    }

    case 'order_status': {
      const orders = getOrders(context.userId)
      if (orders.length === 0) {
        return {
          type: 'text',
          title: 'No mock orders yet',
          body: 'Add a product to your bag first, then place a mock order.',
          suggestedActions: promptActions('Add Flow Runner, size 42, black/red to my bag'),
        }
      }

      return {
        type: 'order_list',
        title: 'Your mock order status',
        orders,
        suggestedActions: promptActions('Show delivery options for Flow Senayan'),
      }
    }

    case 'inventory_summary': {
      const store = getStoreByName('Flow Senayan')
      if (!store) return fallbackResponse()

      return {
        type: 'inventory_summary',
        title: 'Runner inventory summary',
        summary: getStoreInventorySummary({
          storeId: store.storeId,
          brand: 'Flow',
          category: 'Runner',
        }),
        suggestedActions: promptActions('Tell me more about Flow Runner'),
      }
    }

    default:
      return fallbackResponse()
  }
}
