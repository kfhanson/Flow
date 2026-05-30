type PromptChipsProps = {
  prompts: readonly string[]
  selectedPrompt?: string | null
  onSelect: (prompt: string) => void
}

export default function PromptChips({
  prompts,
  selectedPrompt,
  onSelect,
}: PromptChipsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {prompts.map((prompt) => {
        const isActive = selectedPrompt === prompt
        return (
          <button
            key={prompt}
            type="button"
            onClick={() => onSelect(prompt)}
            className={[
              'rounded-full border px-3 py-2 text-left text-xs transition',
              isActive
                ? 'border-brand-red/70 bg-brand-red-soft/30 text-text-primary'
                : 'border-border-strong bg-bg-elevated/50 text-text-muted hover:border-brand-red/50 hover:text-text-primary',
            ].join(' ')}
          >
            {prompt}
          </button>
        )
      })}
    </div>
  )
}
