import type { SupportQuestion } from './types'

export const supportQuestions: SupportQuestion[] = [
  {
    id: 'shipping-id',
    label: 'Shipping in Indonesia',
    shortPrompt: 'Where do you ship, and how fast?',
    answerTitle: 'Shipping in Indonesia',
    answerBody:
      'We ship across Indonesia with tracked delivery. Major cities typically land faster; remote regions take longer. You will see the exact carrier options at checkout intent.',
    videoCue: 'shipping-id',
  },
  {
    id: 'size-guidance',
    label: 'Size guidance',
    shortPrompt: 'How should Flow fit?',
    answerTitle: 'Size guidance',
    answerBody:
      'Flow silhouettes are designed to feel secure without pressure. If you sit between sizes, go up for comfort or stay true for a sharper fit. Use our size notes per release for the final call.',
    videoCue: 'size-guidance',
  },
  {
    id: 'authenticity',
    label: 'Authenticity guarantee',
    shortPrompt: 'Is every pair authentic?',
    answerTitle: 'Authenticity guarantee',
    answerBody:
      'Every Flow release is authenticated and packed in premium, tamper-evident packaging. If anything looks off, support will guide you through a verification and resolution flow.',
    videoCue: 'authenticity',
  },
  {
    id: 'returns',
    label: 'Returns and exchanges',
    shortPrompt: 'Can I return or exchange?',
    answerTitle: 'Returns and exchanges',
    answerBody:
      'Returns and exchanges are supported for eligible items in original condition. Initiate the request from support and we will respond with the correct template and carrier instructions.',
    videoCue: 'returns',
  },
  {
    id: 'payment',
    label: 'Payment options',
    shortPrompt: 'What payments do you accept?',
    answerTitle: 'Payment options',
    answerBody:
      'Flow supports common local payment rails and cards. For the hackathon build, the cart represents purchase intent; payment integration can be added later without changing the product story.',
    videoCue: 'payment',
  },
]
