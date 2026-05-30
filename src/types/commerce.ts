export type ProductCategory = 'Sneaker' | 'Runner' | 'Court' | 'Slip-on'

export type Product = {
  productId: string
  slug: string
  name: string
  brand: string
  category: ProductCategory
  description: string
  price: number
  imageUrl: string
  colorways: string[]
  sizes: number[]
  materials: string[]
  useCases: string[]
  popularityScore: number
}

export type ProductVariant = {
  variantId: string
  productId: string
  size: number
  color: string
  price: number
}

export type Store = {
  storeId: string
  name: string
  address: string
  city: string
  postalCode: string
  country: string
  longitude: number
  latitude: number
  pickupAvailable: boolean
}

export type InventoryItem = {
  inventoryId: string
  variantId: string
  storeId: string
  quantity: number
}

export type DeliveryMethodName =
  | 'Store Pickup'
  | 'Standard Delivery'
  | 'Express Delivery'

export type DeliveryMethod = {
  deliveryMethodId: string
  storeId: string
  name: DeliveryMethodName
  description: string
  cost: number
  estimatedDeliveryTime: string
}

export type MockUser = {
  userId: string
  firstName: string
  city: string
  latitude: number
  longitude: number
}

export type BagItem = {
  itemId: string
  productId: string
  variantId: string
  size: number
  color: string
  quantity: number
}

export type OrderStatus = 'pending' | 'confirmed' | 'ready for pickup' | 'delivered'

export type MockOrder = {
  orderId: string
  userId: string
  storeId: string
  deliveryMethodId: string
  status: OrderStatus
  items: BagItem[]
  totalAmount: number
}
