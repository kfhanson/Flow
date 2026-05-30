import { useEffect, useMemo, useRef, useState } from 'react'
import { supportItems, getSupportVideoSrc } from '../../data/supportQa'
import { suggestedPrompts } from '../../data/suggestedPrompts'
import { getMockAssistantResponse } from '../../services/mockAssistantService'
import { useAssistantStore } from '../../store/assistantStore'
import { normalizeInput } from '../../utils/intent'
import Container from '../shell/Container'
import MessageList from './MessageList'
import PromptChips from './PromptChips'
import type { AssistantContext, AssistantMessage, AssistantResponse } from '../../types/assistant'

const assistantHelpVideoSrc = new URL(
  /* @vite-ignore */ '../../ASSETS/how can i help.mp4',
  import.meta.url,
).toString()

function createMessageId() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`
}

function nowISO() {
  return new Date().toISOString()
}

function tokenize(text: string) {
  return normalizeInput(text)
    .split(' ')
    .map((t) => t.trim())
    .filter(Boolean)
    .filter((t) => t.length > 1)
}

function keywordScore(input: string, question: string) {
  const inputTokens = tokenize(input)
  const questionTokens = tokenize(question)
  if (inputTokens.length === 0 || questionTokens.length === 0) return 0

  const questionSet = new Set(questionTokens)
  let overlap = 0
  for (const token of inputTokens) {
    if (questionSet.has(token)) overlap += 1
  }
  return overlap / Math.max(inputTokens.length, questionTokens.length)
}

function matchSupportItem(input: string) {
  const normalizedInput = normalizeInput(input)
  if (!normalizedInput) return null

  let best: { id: string; score: number } | null = null
  for (const item of supportItems) {
    const score = keywordScore(normalizedInput, item.shortPrompt)
    if (!best || score > best.score) best = { id: item.id, score }
    if (normalizeInput(item.shortPrompt) === normalizedInput) {
      return item
    }
  }

  if (best && best.score >= 0.55) {
    return supportItems.find((item) => item.id === best!.id) ?? null
  }

  return null
}

function supportItemToResponse(
  item: (typeof supportItems)[number],
): Extract<AssistantResponse, { type: 'text' }> {
  const keyPoints = item.keyPoints?.length
    ? `Key points:\n- ${item.keyPoints.join('\n- ')}`
    : ''

  return {
    type: 'text',
    title: item.answerTitle,
    body: [item.answerBody, keyPoints, `CTA: ${item.cta}`].filter(Boolean).join('\n\n'),
  }
}

export default function AssistantPanel() {
  const messages = useAssistantStore((s) => s.messages)
  const addMessage = useAssistantStore((s) => s.addMessage)
  const selectedPrompt = useAssistantStore((s) => s.selectedPrompt)
  const setSelectedPrompt = useAssistantStore((s) => s.setSelectedPrompt)

  const [draft, setDraft] = useState('')
  const [activeSupportId, setActiveSupportId] = useState<string | null>(null)
  const listRef = useRef<HTMLDivElement | null>(null)

  const allPrompts = useMemo(() => {
    const supportPrompts = supportItems.map((item) => item.shortPrompt)
    return [...suggestedPrompts, ...supportPrompts]
  }, [])

  const context: AssistantContext = useMemo(
    () => ({ userId: 'raka-demo' }),
    [],
  )

  useEffect(() => {
    const el = listRef.current
    if (!el) return
    el.scrollTop = el.scrollHeight
  }, [messages.length])

  const videoSrc =
    messages.length === 0 && !draft.trim()
      ? assistantHelpVideoSrc
      : activeSupportId
        ? getSupportVideoSrc(activeSupportId)
        : assistantHelpVideoSrc

  function send(text: string) {
    const trimmed = text.trim()
    if (!trimmed) return

    const userMessage: AssistantMessage = {
      id: createMessageId(),
      role: 'user',
      content: trimmed,
      createdAt: nowISO(),
    }
    addMessage(userMessage)

    const supportMatch = matchSupportItem(trimmed)
    if (supportMatch) {
      setActiveSupportId(supportMatch.id)
      const response = supportItemToResponse(supportMatch)
      const assistantMessage: AssistantMessage = {
        id: createMessageId(),
        role: 'assistant',
        content: response.body,
        response,
        createdAt: nowISO(),
      }
      addMessage(assistantMessage)
      setDraft('')
      setSelectedPrompt(null)
      return
    }

    setActiveSupportId(null)
    const response = getMockAssistantResponse(trimmed, context)
    const assistantMessage: AssistantMessage = {
      id: createMessageId(),
      role: 'assistant',
      content: response.type === 'text' ? response.body : '',
      response,
      createdAt: nowISO(),
    }
    addMessage(assistantMessage)
    setDraft('')
    setSelectedPrompt(null)
  }

  return (
    <section id="assistant" className="border-t border-border-strong bg-bg-primary">
      <Container className="max-w-none px-4 py-10 md:px-10 md:py-14">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="text-xs uppercase tracking-[0.18em] text-text-muted">
              Assistant
            </div>
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-text-primary md:text-5xl">
              Shop by asking.
            </h1>
            <p className="mt-4 max-w-[56ch] text-sm leading-relaxed text-text-muted">
              Flow responds with deterministic demo results for products, bag, stores,
              delivery options, mock orders, and inventory. Support answers trigger the
              matching video.
            </p>

            <div className="mt-8">
              <PromptChips
                prompts={allPrompts}
                selectedPrompt={selectedPrompt}
                onSelect={(prompt) => {
                  setSelectedPrompt(prompt)
                  setDraft(prompt)
                }}
              />
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="overflow-hidden rounded-3xl border border-border-strong bg-bg-panel">
              <div className="relative aspect-[16/9] w-full">
                <video
                  key={videoSrc}
                  src={videoSrc}
                  className="absolute inset-0 h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-br from-brand-red-soft/35 via-transparent to-transparent" />
              </div>

              <div className="border-t border-border-strong p-5">
                <div ref={listRef} className="max-h-[46vh] overflow-auto">
                  <MessageList messages={messages} onSelectAction={(p) => send(p)} />
                </div>

                <form
                  className="mt-4 flex items-center gap-2"
                  onSubmit={(e) => {
                    e.preventDefault()
                    send(draft)
                  }}
                >
                  <input
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    placeholder="Type a request…"
                    className="flex-1 rounded-2xl border border-border-strong bg-bg-elevated px-4 py-3 text-sm text-text-primary outline-none placeholder:text-text-muted focus:border-brand-red/60"
                  />
                  <button
                    type="submit"
                    className="rounded-2xl border border-brand-red/60 bg-brand-red-soft/40 px-4 py-3 text-sm font-semibold text-text-primary transition hover:bg-brand-red-soft/60"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
