import Section from './Section'

export default function StorySection() {
  return (
    <Section
      id="story"
      title="Made to move through the city with purpose"
      eyebrow="Story"
      backdropScene="story"
      fullPage
    >
      <div className="grid gap-6 md:grid-cols-12">
        <div className="rounded-2xl border border-border-strong bg-bg-panel p-8 md:col-span-5">
          <div className="text-sm leading-relaxed text-text-primary">
            “Flow starts with Indonesian craft, then sharpens it through motion,
            proportion, and the kind of detail that still reads in low light.”
          </div>
          <div className="mt-6 text-xs uppercase tracking-[0.18em] text-text-muted">
            Brand manifesto
          </div>
        </div>
        <div className="rounded-2xl border border-border-strong bg-bg-elevated/50 p-8 md:col-span-7">
          <p className="max-w-[70ch] text-sm leading-relaxed text-text-muted">
            Flow is imagined like a premium fashion campaign translated into
            footwear. Every pair is shaped to feel fast, calm, and considered:
            clean proportions, confident materials, and a finish that moves
            easily between city pace and more dressed moments after dark.
          </p>
          <div className="mt-8 grid gap-3 text-xs text-text-muted md:grid-cols-3">
            <div className="rounded-xl border border-border-strong bg-bg-panel/40 px-4 py-3">
              Made in Indonesia
            </div>
            <div className="rounded-xl border border-border-strong bg-bg-panel/40 px-4 py-3">
              Performance-led silhouette
            </div>
            <div className="rounded-xl border border-border-strong bg-bg-panel/40 px-4 py-3">
              Editorial finish
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
