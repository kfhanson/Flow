import Section from './Section'

export default function StorySection() {
  return (
    <Section
      id="story"
      title="Flow is a campaign you can wear"
      eyebrow="Story"
      backdropScene="story"
    >
      <div className="grid gap-6 md:grid-cols-12">
        <div className="rounded-2xl border border-border-strong bg-bg-panel p-8 md:col-span-5">
          <div className="text-sm leading-relaxed text-text-primary">
            “Made in Indonesia with the discipline of a studio set—built to move
            fast, look deliberate, and never fade into the crowd.”
          </div>
          <div className="mt-6 text-xs uppercase tracking-[0.18em] text-text-muted">
            Manifesto excerpt
          </div>
        </div>
        <div className="rounded-2xl border border-border-strong bg-bg-elevated/50 p-8 md:col-span-7">
          <p className="max-w-[70ch] text-sm leading-relaxed text-text-muted">
            Flow is a premium Indonesian label imagined like a fashion editorial:
            sharp silhouette, controlled motion, and product video as first-class
            storytelling. Every drop is curated—few pieces, high intent, and
            the kind of detail that reads in low light.
          </p>
          <div className="mt-8 grid gap-3 text-xs text-text-muted md:grid-cols-3">
            <div className="rounded-xl border border-border-strong bg-bg-panel/40 px-4 py-3">
              Cinematic scroll hero
            </div>
            <div className="rounded-xl border border-border-strong bg-bg-panel/40 px-4 py-3">
              Curated releases
            </div>
            <div className="rounded-xl border border-border-strong bg-bg-panel/40 px-4 py-3">
              Intent-focused cart
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
