import supportQaRaw from '../../support-qa.json?raw'
import type { SupportQuestion } from './types'

const supportIdleVideoSrc = new URL('../../ASSETS/idle.mp4', import.meta.url).toString()
const supportShippingIndonesiaVideoSrc = new URL(
  '../../ASSETS/shipping indo.mp4',
  import.meta.url,
).toString()
const supportInternationalShippingVideoSrc = new URL(
  '../../ASSETS/international shipping.mp4',
  import.meta.url,
).toString()
const supportSizeGuidanceVideoSrc = new URL(
  '../../ASSETS/size guidance.mp4',
  import.meta.url,
).toString()
const supportReturnsExchangesVideoSrc = new URL(
  '../../ASSETS/return policy.mp4',
  import.meta.url,
).toString()

export type SupportQaItem = {
  id: string
  label: string
  shortPrompt: string
  answerTitle: string
  answerBody: string
  keyPoints: string[]
  videoCue: string
  cta: string
}

export type ChatbotMockResponse = {
  id: string
  question: string
  answer: string
}

export type SupportChatResponse = {
  id: string
  question: string
  answer: string
}

export type SupportQaData = {
  collection: string
  brand: string
  voice: string
  items: SupportQaItem[]
  chatbotMockResponses?: ChatbotMockResponse[]
}

export function parseSupportQa(raw: string): SupportQaData {
  const parsed = JSON.parse(raw) as Partial<SupportQaData>
  if (!parsed || typeof parsed !== 'object') {
    throw new Error('Invalid support-qa.json payload')
  }
  if (!Array.isArray(parsed.items)) {
    throw new Error('support-qa.json.items must be an array')
  }
  return parsed as SupportQaData
}

export const supportQa = parseSupportQa(supportQaRaw)
const demoSupportIds = new Set([
  'shipping-indonesia',
  'international-shipping',
  'size-guidance',
  'returns-exchanges',
])

export const supportItems = supportQa.items.filter((item) => demoSupportIds.has(item.id))
export const chatbotMockResponses = Array.isArray(supportQa.chatbotMockResponses)
  ? supportQa.chatbotMockResponses
  : []
export const supportChatResponses: SupportChatResponse[] = supportItems.map((item) => ({
  id: item.id,
  question: item.shortPrompt,
  answer: [item.answerTitle, item.answerBody, `CTA: ${item.cta}`]
    .filter(Boolean)
    .join('\n\n'),
}))

const supportVideoSrcById: Record<string, string> = {
  'shipping-indonesia': supportShippingIndonesiaVideoSrc,
  'international-shipping': supportInternationalShippingVideoSrc,
  'size-guidance': supportSizeGuidanceVideoSrc,
  'returns-exchanges': supportReturnsExchangesVideoSrc,
}

export function getSupportVideoSrc(supportId?: string | null) {
  if (!supportId) return supportIdleVideoSrc
  return supportVideoSrcById[supportId] ?? supportIdleVideoSrc
}

export { supportIdleVideoSrc }

export const supportQuestions: SupportQuestion[] = supportItems.map((item) => ({
  id: item.id,
  label: item.label,
  shortPrompt: item.shortPrompt,
  answerTitle: item.id === 'shipping-indonesia' ? '' : item.answerTitle,
  answerBody: item.answerBody,
  keyPoints: item.keyPoints,
  videoCue: item.videoCue,
  cta: item.cta,
}))
