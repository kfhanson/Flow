import { mockDeliveryMethods } from '../data/mockDeliveryMethods'
import { mockInventory } from '../data/mockInventory'
import { mockProducts, mockProductVariants } from '../data/mockProducts'
import { mockStores } from '../data/mockStores'
import { mockUsers } from '../data/mockUsers'
import { distanceInKm } from '../utils/distance'
import type { InventorySummary, StoreWithDistance } from '../types/assistant'
import type { ProductCategory } from '../types/commerce'

export function getNearbyStores(params: {
  userId?: string
  longitude?: number
  latitude?: number
  city?: string
}): StoreWithDistance[] {
  const user =
    (params.userId ? mockUsers.find((item) => item.userId === params.userId) : undefined) ??
    mockUsers[0]

  const origin = {
    latitude: params.latitude ?? user.latitude,
    longitude: params.longitude ?? user.longitude,
  }

  return mockStores
    .filter((store) => (params.city ? store.city.toLowerCase() === params.city.toLowerCase() : true))
    .map((store) => ({
      ...store,
      distanceKm: Number(
        distanceInKm(origin, {
          latitude: store.latitude,
          longitude: store.longitude,
        }).toFixed(1),
      ),
    }))
    .sort((left, right) => left.distanceKm - right.distanceKm)
}

export function getDeliveryMethods(storeId: string) {
  return mockDeliveryMethods.filter((method) => method.storeId === storeId)
}

export function getStoreByName(storeName: string) {
  const normalized = storeName.trim().toLowerCase()
  return (
    mockStores.find((store) => store.name.toLowerCase() === normalized) ?? null
  )
}

export function getStoreInventorySummary(params: {
  storeId: string
  brand?: string
  category?: ProductCategory
}): InventorySummary {
  const store = mockStores.find((item) => item.storeId === params.storeId)
  const variantIdsAtStore = mockInventory
    .filter((item) => item.storeId === params.storeId && item.quantity > 0)
    .map((item) => item.variantId)

  const productIds = new Set(
    mockProductVariants
      .filter((variant) => variantIdsAtStore.includes(variant.variantId))
      .map((variant) => variant.productId),
  )

  const products = mockProducts.filter((product) => {
    if (!productIds.has(product.productId)) return false
    if (params.brand && product.brand !== params.brand) return false
    if (params.category && product.category !== params.category) return false
    return true
  })

  return {
    storeName: store?.name ?? params.storeId,
    brand: params.brand ?? 'Flow',
    category: params.category ?? 'All',
    numberOfProducts: products.length,
    productNames: products.map((product) => product.name),
  }
}
