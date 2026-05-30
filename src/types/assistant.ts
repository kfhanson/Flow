import type {
  BagItem,
  DeliveryMethod,
  MockOrder,
  Product,
  ProductCategory,
  ProductVariant,
  Store,
} from './commerce'

export type AssistantIntent =
  | 'help'
  | 'product_search'
  | 'product_detail'
  | 'add_to_bag'
  | 'show_bag'
  | 'find_stores'
  | 'delivery_methods'
  | 'place_order'
  | 'order_status'
  | 'inventory_summary'
  | 'fallback'

export type AssistantMessage = {
  id: string
  role: 'user' | 'assistant'
  content: string
  response?: AssistantResponse
  createdAt: string
}

export type AssistantContext = {
  userId: string
}

export type SuggestedAction = {
  label: string
  prompt: string
}

export type CatalogSearchParams = {
  query?: string
  brand?: string
  category?: ProductCategory
  color?: string
  maxPrice?: number
  useCase?: string
  limit?: number
}

export type StoreWithDistance = Store & {
  distanceKm: number
}

export type InventorySummary = {
  storeName: string
  brand: string
  category: ProductCategory | 'All'
  numberOfProducts: number
  productNames: string[]
}

export type AssistantResponse =
  | {
      type: 'text'
      title?: string
      body: string
      suggestedActions?: SuggestedAction[]
    }
  | {
      type: 'clarification'
      question: string
      options: string[]
      suggestedActions?: SuggestedAction[]
    }
  | {
      type: 'product_list'
      title: string
      body?: string
      products: Product[]
      suggestedActions?: SuggestedAction[]
    }
  | {
      type: 'product_detail'
      title?: string
      body?: string
      product: Product
      variants: ProductVariant[]
      suggestedActions?: SuggestedAction[]
    }
  | {
      type: 'bag'
      title: string
      body?: string
      items: BagItem[]
      subtotal: number
      suggestedActions?: SuggestedAction[]
    }
  | {
      type: 'store_list'
      title: string
      body?: string
      stores: StoreWithDistance[]
      suggestedActions?: SuggestedAction[]
    }
  | {
      type: 'delivery_methods'
      title: string
      body?: string
      storeName: string
      methods: DeliveryMethod[]
      suggestedActions?: SuggestedAction[]
    }
  | {
      type: 'order_list'
      title: string
      body?: string
      orders: MockOrder[]
      suggestedActions?: SuggestedAction[]
    }
  | {
      type: 'inventory_summary'
      title: string
      body?: string
      summary: InventorySummary
      suggestedActions?: SuggestedAction[]
    }
