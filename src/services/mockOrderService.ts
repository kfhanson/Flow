import { mockOrders } from '../data/mockOrders'
import { getBagItems, clearBag, getBagSubtotal } from './mockBagService'
import { getDeliveryMethods, getStoreByName } from './mockStoreService'
import { useOrderStore } from '../store/orderStore'
import type { MockOrder } from '../types/commerce'

function createOrderId() {
  return `FLW-${1000 + mockOrders.length + 1}`
}

export function getOrders(userId: string) {
  return useOrderStore.getState().orders.filter((order) => order.userId === userId)
}

export function createMockOrder(params: {
  userId: string
  storeName: string
  deliveryMethodName?: string
}): { order: MockOrder | null; reason?: 'empty_bag' | 'store_not_found' | 'delivery_not_found' } {
  const items = getBagItems(params.userId)
  if (items.length === 0) {
    return { order: null, reason: 'empty_bag' }
  }

  const store = getStoreByName(params.storeName)
  if (!store) {
    return { order: null, reason: 'store_not_found' }
  }

  const deliveryMethod =
    getDeliveryMethods(store.storeId).find(
      (method) =>
        method.name.toLowerCase() === (params.deliveryMethodName ?? 'Store Pickup').toLowerCase(),
    ) ?? null

  if (!deliveryMethod) {
    return { order: null, reason: 'delivery_not_found' }
  }

  const order: MockOrder = {
    orderId: createOrderId(),
    userId: params.userId,
    storeId: store.storeId,
    deliveryMethodId: deliveryMethod.deliveryMethodId,
    status: 'pending',
    items,
    totalAmount: getBagSubtotal(items),
  }

  mockOrders.push(order)
  useOrderStore.getState().addOrder(order)
  clearBag(params.userId)
  return { order }
}
