import { create } from 'zustand'
import type { MockOrder } from '../types/commerce'

type OrderState = {
  orders: MockOrder[]
  addOrder: (order: MockOrder) => void
  clearOrders: () => void
}

export const useOrderStore = create<OrderState>((set) => ({
  orders: [],
  addOrder: (order) => set((state) => ({ orders: [...state.orders, order] })),
  clearOrders: () => set({ orders: [] }),
}))
