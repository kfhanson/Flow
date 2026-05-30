import type { AssistantIntent } from '../types/assistant'

export function normalizeInput(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[\u2019']/g, "'")
    .replace(/[^a-z0-9\s./,-]/g, ' ')
    .replace(/\s+/g, ' ')
}

export function detectIntent(input: string): AssistantIntent {
  const normalized = normalizeInput(input)

  if (!normalized) return 'help'
  if (normalized.includes('show my bag') || normalized.includes('my bag')) return 'show_bag'
  if (normalized.includes('place an order')) return 'place_order'
  if (normalized.includes('order status') || normalized.includes('check my order status')) {
    return 'order_status'
  }
  if (normalized.includes('delivery options')) return 'delivery_methods'
  if (normalized.includes('stores near') || normalized.includes('find flow stores')) {
    return 'find_stores'
  }
  if (normalized.includes('stock at') || normalized.includes('in stock at')) {
    return 'inventory_summary'
  }
  if (normalized.includes('add ') && normalized.includes('bag')) return 'add_to_bag'
  if (
    normalized.includes('tell me more about') ||
    normalized.includes('details') ||
    normalized.includes('more about')
  ) {
    return 'product_detail'
  }
  if (
    normalized.includes('looking for') ||
    normalized.includes('show ') ||
    normalized.includes('sneakers')
  ) {
    return 'product_search'
  }
  return 'fallback'
}
