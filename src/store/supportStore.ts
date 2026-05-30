import { create } from 'zustand'
import { supportQuestions } from '../data/support'

type SupportState = {
  selectedQuestionId: string
  selectQuestion: (questionId: string) => void
}

export const useSupportStore = create<SupportState>((set) => ({
  selectedQuestionId: supportQuestions[0]?.id ?? 'shipping-id',
  selectQuestion: (questionId) => set({ selectedQuestionId: questionId }),
}))
