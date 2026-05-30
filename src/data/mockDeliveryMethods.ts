import type { DeliveryMethod } from '../types/commerce'

export const mockDeliveryMethods: DeliveryMethod[] = [
  {
    deliveryMethodId: 'flow-senayan-pickup',
    storeId: 'flow-senayan',
    name: 'Store Pickup',
    description: 'Pick up your order at Flow Senayan.',
    cost: 0,
    estimatedDeliveryTime: 'Ready in 2 hours',
  },
  {
    deliveryMethodId: 'flow-senayan-standard',
    storeId: 'flow-senayan',
    name: 'Standard Delivery',
    description: 'Reliable courier delivery for Jakarta and surrounding areas.',
    cost: 35000,
    estimatedDeliveryTime: '2-4 business days',
  },
  {
    deliveryMethodId: 'flow-senayan-express',
    storeId: 'flow-senayan',
    name: 'Express Delivery',
    description: 'Fast same-day delivery for eligible orders before 14:00.',
    cost: 75000,
    estimatedDeliveryTime: 'Same day before 21:00',
  },
  {
    deliveryMethodId: 'flow-kemang-pickup',
    storeId: 'flow-kemang',
    name: 'Store Pickup',
    description: 'Pick up your order at Flow Kemang.',
    cost: 0,
    estimatedDeliveryTime: 'Ready in 2 hours',
  },
  {
    deliveryMethodId: 'flow-pik-pickup',
    storeId: 'flow-pik',
    name: 'Store Pickup',
    description: 'Pick up your order at Flow PIK.',
    cost: 0,
    estimatedDeliveryTime: 'Ready in 3 hours',
  },
]
