import { create } from 'zustand'
import { supportQuestions } from '../data/supportQa'

type SupportState = {
  selectedQuestionId: string
  selectQuestion: (questionId: string) => void
}

export const useSupportStore = create<SupportState>((set) => ({
  selectedQuestionId: supportQuestions[0]?.id ?? 'shipping-indonesia',
  selectQuestion: (questionId) => set({ selectedQuestionId: questionId }),
}))
