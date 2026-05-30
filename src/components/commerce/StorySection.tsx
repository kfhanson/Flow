import Section from './Section'

export default function StorySection() {
  return (
    <Section
      id="story"
      title="Made to move through the city with purpose"
      eyebrow="Story"
      index={1}
      backdropScene="story"
      fullPage
    >
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <blockquote className="font-display text-balance text-[clamp(1.75rem,3vw,3rem)] font-medium leading-[1.08] tracking-tight text-text-primary">
            “Flow starts with Indonesian craft, then sharpens it through motion,
            proportion, and the kind of detail that still reads in low light.”
          </blockquote>
          <div className="mt-6 text-xs uppercase tracking-[0.18em] text-text-muted">
            Brand manifesto
          </div>
        </div>
        <div className="md:col-span-5">
          <p className="max-w-[60ch] text-sm leading-relaxed text-text-muted">
            Flow is imagined like a premium fashion campaign translated into
            footwear. Every pair is shaped to feel fast, calm, and considered:
            clean proportions, confident materials, and a finish that moves
            easily between city pace and more dressed moments after dark.
          </p>
          <div className="mt-8 flex flex-wrap gap-2 text-xs uppercase tracking-[0.16em] text-text-muted">
            <span className="rounded-full border border-border-strong/70 px-4 py-2">
              Made in Indonesia
            </span>
            <span className="rounded-full border border-border-strong/70 px-4 py-2">
              Performance-led silhouette
            </span>
            <span className="rounded-full border border-border-strong/70 px-4 py-2">
              Editorial finish
            </span>
          </div>
        </div>
      </div>
    </Section>
  )
}
