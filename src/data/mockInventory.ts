import type { InventoryItem } from '../types/commerce'

function variantId(productId: string, color: string, size: number) {
  return `${productId}-${color.replace('/', '-')}-${size}`
}

export const mockInventory: InventoryItem[] = [
  ...[40, 41, 42, 43].map((size, index) => ({
    inventoryId: `inv-senayan-runner-black-red-${size}`,
    variantId: variantId('flow-runner', 'black/red', size),
    storeId: 'flow-senayan',
    quantity: 5 - index,
  })),
  ...[41, 42, 44].map((size, index) => ({
    inventoryId: `inv-senayan-runner-graphite-${size}`,
    variantId: variantId('flow-runner', 'graphite', size),
    storeId: 'flow-senayan',
    quantity: 4 - index,
  })),
  {
    inventoryId: 'inv-kemang-runner-black-red-42',
    variantId: variantId('flow-runner', 'black/red', 42),
    storeId: 'flow-kemang',
    quantity: 3,
  },
  {
    inventoryId: 'inv-kemang-runner-graphite-41',
    variantId: variantId('flow-runner', 'graphite', 41),
    storeId: 'flow-kemang',
    quantity: 2,
  },
  {
    inventoryId: 'inv-senayan-metro-black-41',
    variantId: variantId('flow-metro-low', 'triple black', 41),
    storeId: 'flow-senayan',
    quantity: 6,
  },
  {
    inventoryId: 'inv-kemang-metro-black-42',
    variantId: variantId('flow-metro-low', 'triple black', 42),
    storeId: 'flow-kemang',
    quantity: 4,
  },
  {
    inventoryId: 'inv-pik-office-slip-black-41',
    variantId: variantId('flow-office-slip', 'black', 41),
    storeId: 'flow-pik',
    quantity: 5,
  },
  {
    inventoryId: 'inv-pik-court-ace-black-red-42',
    variantId: variantId('flow-court-ace', 'black/red', 42),
    storeId: 'flow-pik',
    quantity: 4,
  },
]
