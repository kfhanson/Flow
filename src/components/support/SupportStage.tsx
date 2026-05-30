import { supportQuestions } from '../../data/support'
import { useSupportStore } from '../../store/supportStore'
import Container from '../shell/Container'

export default function SupportStage() {
  const selectedQuestionId = useSupportStore((s) => s.selectedQuestionId)
  const selectQuestion = useSupportStore((s) => s.selectQuestion)
  const active =
    supportQuestions.find((q) => q.id === selectedQuestionId) ?? supportQuestions[0]

  return (
    <section className="bg-bg-primary">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="text-xs uppercase tracking-[0.18em] text-text-muted">
              Support
            </div>
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-text-primary md:text-5xl">
              Calm answers. No noise.
            </h1>
            <p className="mt-4 max-w-[56ch] text-sm leading-relaxed text-text-muted">
              Select a question and the answer panel will stay synchronized with a
              dedicated support-host video cue.
            </p>

            <div className="mt-10 grid gap-3">
              {supportQuestions.map((q) => {
                const isActive = q.id === active.id
                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => selectQuestion(q.id)}
                    className={[
                      'rounded-2xl border px-5 py-4 text-left transition',
                      isActive
                        ? 'border-brand-red/70 bg-bg-elevated text-text-primary'
                        : 'border-border-strong bg-bg-panel text-text-muted hover:border-brand-red/50 hover:text-text-primary',
                    ].join(' ')}
                  >
                    <div className="text-sm font-semibold">{q.label}</div>
                    <div className="mt-1 text-xs text-text-muted">
                      {q.shortPrompt}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="md:col-span-6">
            <div className="overflow-hidden rounded-3xl border border-border-strong bg-bg-panel">
              <div className="relative aspect-[16/12] w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-red-soft/70 via-transparent to-transparent" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="text-xs uppercase tracking-[0.18em] text-text-muted">
                    Support host video stage
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-border-strong bg-bg-elevated/50 p-6">
              <div className="text-xs uppercase tracking-[0.18em] text-text-muted">
                {active.answerTitle}
              </div>
              <div className="mt-3 text-sm leading-relaxed text-text-primary">
                {active.answerBody}
              </div>
              <div className="mt-6 text-xs text-text-muted">
                Video cue: <span className="text-text-primary">{active.videoCue}</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
