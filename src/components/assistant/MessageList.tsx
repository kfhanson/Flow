import type { AssistantMessage } from '../../types/assistant'
import ResponseRenderer from './ResponseRenderer'

type MessageListProps = {
  messages: AssistantMessage[]
  onSelectAction: (prompt: string) => void
  showGreeting?: boolean
}

export default function MessageList({
  messages,
  onSelectAction,
  showGreeting = true,
}: MessageListProps) {
  if (showGreeting && messages.length === 0) {
    return (
      <div className="rounded-3xl border border-border-strong bg-bg-elevated/40 p-5 text-sm leading-relaxed text-text-muted">
        Welcome to Flow. Choose a suggested prompt or type your question to get a deterministic demo response.
      </div>
    )
  }

  return (
    <div className="grid gap-3">
      {messages.map((message) => {
        const isUser = message.role === 'user'
        return (
          <div key={message.id} className={isUser ? 'flex justify-end' : 'flex justify-start'}>
            <div
              className={[
                'max-w-[92%] rounded-3xl border px-4 py-4',
                isUser
                  ? 'border-brand-red/40 bg-brand-red-soft/25 text-text-primary'
                  : 'border-border-strong bg-bg-panel text-text-primary',
              ].join(' ')}
            >
              {isUser || !message.response ? (
                <div className="text-sm leading-relaxed">{message.content}</div>
              ) : (
                <ResponseRenderer
                  response={message.response}
                  onSelectAction={onSelectAction}
                />
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
