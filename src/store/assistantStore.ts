import { create } from 'zustand'
import type { AssistantMessage } from '../types/assistant'

type AssistantState = {
  messages: AssistantMessage[]
  selectedPrompt: string | null
  setSelectedPrompt: (prompt: string | null) => void
  addMessage: (message: AssistantMessage) => void
  clearMessages: () => void
}

export const useAssistantStore = create<AssistantState>((set) => ({
  messages: [],
  selectedPrompt: null,
  setSelectedPrompt: (prompt) => set({ selectedPrompt: prompt }),
  addMessage: (message) =>
    set((state) => ({ messages: [...state.messages, message] })),
  clearMessages: () => set({ messages: [] }),
}))
