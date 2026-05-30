import {
  getSupportVideoSrc,
  supportChatResponses,
  supportIdleVideoSrc,
  supportItems,
} from '../../data/supportQa'
import Container from '../shell/Container'
import { useEffect, useMemo, useRef, useState } from 'react'
import { getMockAssistantResponse } from '../../services/mockAssistantService'
import MessageList from '../assistant/MessageList'
import type { AssistantContext, AssistantMessage, AssistantResponse } from '../../types/assistant'

const supportHelpVideoSrc = new URL(
  '../../../ASSETS/how can i help.mp4',
  import.meta.url,
).toString()

function MuteIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 3.3a1 1 0 0 0-1.5-.8L6.5 6H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5l4 3.5A1 1 0 0 0 12 20.7V3.3Zm6.2 4.8a1 1 0 0 1 1.4 0L21 9.5l1.4-1.4a1 1 0 1 1 1.4 1.4L22.4 11l1.4 1.4a1 1 0 0 1-1.4 1.4L21 12.4l-1.4 1.4a1 1 0 0 1-1.4-1.4l1.4-1.4-1.4-1.4a1 1 0 0 1 0-1.4Z"
      />
    </svg>
  )
}

function SoundIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M10.5 4.5 6.5 8H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2.5l4 3.5A1 1 0 0 0 12 20.7V3.3a1 1 0 0 0-1.5-.8Zm8.6 2.8a1 1 0 0 1 1.4 0 8 8 0 0 1 0 11.4 1 1 0 0 1-1.4-1.4 6 6 0 0 0 0-8.6 1 1 0 0 1 0-1.4Z"
      />
    </svg>
  )
}

export default function SupportStage() {
  const context: AssistantContext = useMemo(() => ({ userId: 'raka-demo' }), [])
  const [draft, setDraft] = useState('')
  const [muted, setMuted] = useState(false)
  const [autoplayBlocked, setAutoplayBlocked] = useState(false)
  const [soundHintDismissed, setSoundHintDismissed] = useState(false)
  const mutedRef = useRef(false)
  const autoplayBlockedRef = useRef(false)
  const [activeSlot, setActiveSlot] = useState<'a' | 'b'>('a')
  const activeSlotRef = useRef<'a' | 'b'>('a')
  const [pendingSlot, setPendingSlot] = useState<'a' | 'b' | null>(null)
  const pendingSlotRef = useRef<'a' | 'b' | null>(null)
  const [aSrc, setASrc] = useState(supportHelpVideoSrc)
  const [aLoop, setALoop] = useState(false)
  const [bSrc, setBSrc] = useState<string | null>(null)
  const [bLoop, setBLoop] = useState(false)
  const videoARef = useRef<HTMLVideoElement | null>(null)
  const videoBRef = useRef<HTMLVideoElement | null>(null)
  const [messages, setMessages] = useState<AssistantMessage[]>(() => [
    {
      id: 'flow-greeting',
      role: 'assistant',
      content:
        'Welcome to Flow. Choose a suggested prompt or type your question to get a deterministic demo response.',
      createdAt: new Date().toISOString(),
    },
  ])
  const scrollRef = useRef<HTMLDivElement | null>(null)

  const supportPrompts = useMemo(() => supportChatResponses.map((r) => r.question), [])
  const ecommercePrompts = useMemo(
    () =>
      [
        'I am looking for black sneakers for daily city wear',
        'Show red accent sneakers under Rp 1.500.000',
        'Tell me more about Flow Runner',
        'Add Flow Runner, size 42, black/red to my bag',
        'Show my bag',
        'Find Flow stores near Jakarta',
        'Show delivery options for Flow Senayan',
        'Place an order for pickup at Flow Senayan',
        'Check my order status',
        'How many runner shoes are in stock at Flow Senayan?',
      ] as const,
    [],
  )

  const suggestions = useMemo(
    () => [...supportPrompts, ...ecommercePrompts],
    [ecommercePrompts, supportPrompts],
  )

  const suggestionsRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.scrollTop = el.scrollHeight
  }, [messages.length])

  useEffect(() => {
    activeSlotRef.current = activeSlot
  }, [activeSlot])

  useEffect(() => {
    pendingSlotRef.current = pendingSlot
  }, [pendingSlot])

  useEffect(() => {
    mutedRef.current = muted
  }, [muted])

  useEffect(() => {
    autoplayBlockedRef.current = autoplayBlocked
  }, [autoplayBlocked])

  useEffect(() => {
    function tryUnmuteOnInteract(event: Event) {
      const target = event.target as HTMLElement | null
      if (target?.closest?.('[data-sound-toggle="true"]')) return
      const el = activeSlot === 'a' ? videoARef.current : videoBRef.current
      if (!el) return
      if (mutedRef.current) return
      if (!autoplayBlockedRef.current) return
      el.muted = false
      el.currentTime = 0
      void el
        .play()
        .then(() => {
          setAutoplayBlocked(false)
          setSoundHintDismissed(true)
        })
        .catch(() => {
          setAutoplayBlocked(true)
        })
    }

    window.addEventListener('pointerdown', tryUnmuteOnInteract, { capture: true })
    window.addEventListener('keydown', tryUnmuteOnInteract, { capture: true })

    return () => {
      window.removeEventListener('pointerdown', tryUnmuteOnInteract, { capture: true })
      window.removeEventListener('keydown', tryUnmuteOnInteract, { capture: true })
    }
  }, [activeSlot])

  function nowISO() {
    return new Date().toISOString()
  }

  function createMessageId() {
    return `${Date.now()}-${Math.random().toString(16).slice(2)}`
  }

  function getVideoEl(slot: 'a' | 'b') {
    return slot === 'a' ? videoARef.current : videoBRef.current
  }

  function setSlotSource(slot: 'a' | 'b', src: string, loop: boolean) {
    if (slot === 'a') {
      setASrc(src)
      setALoop(loop)
      return
    }
    setBSrc(src)
    setBLoop(loop)
  }

  function enableSound() {
    mutedRef.current = false
    autoplayBlockedRef.current = false
    setMuted(false)
    setAutoplayBlocked(false)
    const el = getVideoEl(activeSlotRef.current)
    if (!el) return
    el.pause()
    el.currentTime = 0
    el.muted = false
    void el
      .play()
      .then(() => {
        setAutoplayBlocked(false)
        setSoundHintDismissed(true)
      })
      .catch(() => {
        setAutoplayBlocked(true)
        setSoundHintDismissed(false)
      })
  }

  function toggleMuted() {
    if (mutedRef.current || autoplayBlockedRef.current) {
      enableSound()
      return
    }
    mutedRef.current = true
    setMuted(true)
    const el = getVideoEl(activeSlot)
    if (el) {
      el.muted = true
    }
  }

  function switchTo(src: string, loop: boolean) {
    const incoming: 'a' | 'b' = activeSlotRef.current === 'a' ? 'b' : 'a'
    setPendingSlot(incoming)
    setSlotSource(incoming, src, loop)
  }

  function interruptAndPlayNext(src: string, loop: boolean) {
    const outgoingEl = getVideoEl(activeSlotRef.current)
    if (outgoingEl) outgoingEl.pause()
    switchTo(src, loop)
  }

  function onVideoReady(slot: 'a' | 'b') {
    const el = getVideoEl(slot)
    if (!el) return

    void (async () => {
      try {
        const effectiveMuted = mutedRef.current || autoplayBlockedRef.current
        el.muted = effectiveMuted
        await el.play()
      } catch {
        if (mutedRef.current) return
        if (autoplayBlockedRef.current) return
        autoplayBlockedRef.current = true
        setAutoplayBlocked(true)
        el.muted = true
        try {
          await el.play()
        } catch {
          return
        }
      }
      if (pendingSlotRef.current === slot) {
        const outgoing: 'a' | 'b' = slot === 'a' ? 'b' : 'a'
        const outgoingEl = getVideoEl(outgoing)
        if (outgoingEl) {
          outgoingEl.pause()
          outgoingEl.currentTime = 0
        }
        setActiveSlot(slot)
        setPendingSlot(null)
      } else if (activeSlotRef.current !== slot) {
        el.pause()
      }
    })()
  }

  function onVideoEnded(slot: 'a' | 'b') {
    if (slot !== activeSlotRef.current) return
    const src = slot === 'a' ? aSrc : bSrc
    if (!src) return
    if (src === supportIdleVideoSrc) return
    switchTo(supportIdleVideoSrc, true)
  }

  function supportAnswerResponse(supportId: string): Extract<AssistantResponse, { type: 'text' }> {
    const item = supportItems.find((entry) => entry.id === supportId)
    if (!item) {
      return { type: 'text', body: 'Try one of the suggested support prompts.' }
    }
    return {
      type: 'text',
      body: item.answerBody,
    }
  }

  function send(text: string) {
    const trimmed = text.trim()
    if (!trimmed) return
    if (muted) enableSound()

    setMessages((prev) => [
      ...prev,
      { id: createMessageId(), role: 'user', content: trimmed, createdAt: nowISO() },
    ])

    const normalized = trimmed.toLowerCase()
    const supportMatch =
      supportChatResponses.find((r) => r.question.toLowerCase() === normalized) ??
      supportChatResponses.find((r) => normalized.includes(r.question.toLowerCase())) ??
      null

    if (supportMatch) {
      const src = getSupportVideoSrc(supportMatch.id)
      interruptAndPlayNext(src, false)
      const response = supportAnswerResponse(supportMatch.id)
      setMessages((prev) => [
        ...prev,
        {
          id: createMessageId(),
          role: 'assistant',
          content: response.body,
          response,
          createdAt: nowISO(),
        },
      ])
      setDraft('')
      return
    }

    interruptAndPlayNext(supportIdleVideoSrc, true)
    const response = getMockAssistantResponse(trimmed, context)
    setMessages((prev) => [
      ...prev,
      {
        id: createMessageId(),
        role: 'assistant',
        content: response.type === 'text' ? response.body : '',
        response,
        createdAt: nowISO(),
      },
    ])
    setDraft('')
  }

  return (
    <section className="h-full bg-bg-primary">
      <Container className="max-w-none h-full px-0 py-0">
        <div className="flex h-full flex-col">
          <div className="min-h-0 flex-1 px-4 py-4 md:px-10 md:py-6">
            <div className="grid h-full min-h-0 grid-rows-[minmax(0,1fr)_minmax(0,1fr)] gap-6 md:grid-cols-12 md:grid-rows-1 md:items-stretch">
              <div className="min-h-0 md:col-span-7">
                <div className="h-full min-h-0 overflow-hidden rounded-3xl border border-border-strong bg-bg-panel">
                  <div className="relative h-full w-full bg-black">
                    <video
                      ref={videoARef}
                      key={aSrc}
                      src={aSrc}
                      className={[
                        'absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ease-in-out',
                        activeSlot === 'a' ? 'opacity-100' : 'opacity-0',
                      ].join(' ')}
                      autoPlay
                      muted={muted || autoplayBlocked}
                      loop={aLoop}
                      playsInline
                      onCanPlay={() => onVideoReady('a')}
                      onEnded={() => onVideoEnded('a')}
                    />
                    {bSrc ? (
                      <video
                        ref={videoBRef}
                        key={bSrc}
                        src={bSrc}
                        className={[
                          'absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ease-in-out',
                          activeSlot === 'b' ? 'opacity-100' : 'opacity-0',
                        ].join(' ')}
                        autoPlay
                        muted={muted || autoplayBlocked}
                        loop={bLoop}
                        playsInline
                        onCanPlay={() => onVideoReady('b')}
                        onEnded={() => onVideoEnded('b')}
                      />
                    ) : null}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-red-soft/40 via-transparent to-transparent" />
                    <button
                      type="button"
                      onClick={toggleMuted}
                      data-sound-toggle="true"
                      className="absolute right-3 top-3 inline-flex items-center gap-2 rounded-full border border-border-strong bg-bg-primary/70 px-3 py-1 text-xs text-text-muted backdrop-blur transition hover:border-brand-red/60 hover:text-text-primary"
                    >
                      {muted || autoplayBlocked ? <MuteIcon /> : <SoundIcon />}
                      {autoplayBlocked && !muted && !soundHintDismissed ? 'Enable sound' : null}
                    </button>
                  </div>
                </div>
              </div>

              <div className="min-h-0 md:col-span-5">
                <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-3xl border border-border-strong bg-bg-panel">
                  <div ref={scrollRef} className="min-h-0 flex-1 overflow-auto px-5 py-5">
                    <MessageList
                      messages={messages}
                      onSelectAction={(p) => send(p)}
                      showGreeting={false}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="shrink-0 border-t border-border-strong bg-bg-panel/95 backdrop-blur">
            <div className="px-4 py-4 md:px-10">
              <div className="mb-3">
                <div
                  ref={suggestionsRef}
                  className="flex gap-2 overflow-x-auto whitespace-nowrap pr-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                  {suggestions.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      onClick={() => send(prompt)}
                      className="shrink-0 rounded-full border border-border-strong bg-bg-elevated/50 px-3 py-1 text-xs text-text-muted transition hover:border-brand-red/60 hover:text-text-primary"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>

              <form
                className="flex items-center gap-2"
                onSubmit={(e) => {
                  e.preventDefault()
                  send(draft)
                }}
              >
                <input
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  placeholder="Type a support question…"
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
      </Container>
    </section>
  )
}
