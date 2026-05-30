import { useEffect, useMemo, useRef } from 'react'
import { products } from '../../data/products'
import { useShowcaseStore } from '../../store/showcaseStore'
import { formatIDRCurrency } from '../../utils/formatCurrency'
import Container from '../shell/Container'

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const activeHeroSceneIndex = useShowcaseStore((s) => s.activeHeroSceneIndex)
  const heroProgress = useShowcaseStore((s) => s.heroProgress)
  const setHeroProgress = useShowcaseStore((s) => s.setHeroProgress)

  const scenes = useMemo(
    () =>
      [
        {
          id: products[0]?.id ?? 'hero-01',
          eyebrow: 'Flow Velocity 01',
          headline: 'Built for the city after dark.',
          product: products[0] ?? products[products.length - 1],
          microcopy:
            'A premium Indonesian runner shaped for speed, refined in every line, and cut to hold attention under low light.',
          sceneNote: 'White launch colorway',
        },
        {
          id: products[1]?.id ?? 'hero-02',
          eyebrow: 'Flow Arc Runner',
          headline: 'One silhouette. More than one attitude.',
          product: products[1] ?? products[products.length - 1],
          microcopy:
            'From clean white to graphite and black, the collection keeps the same sharp stance while the mood shifts with the light.',
          sceneNote: 'Graphite and black transition',
        },
      ],
    [],
  )

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    let rafId = 0
    const onScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = window.requestAnimationFrame(() => {
        const start = section.offsetTop
        const end = start + section.offsetHeight - window.innerHeight
        const rawProgress = end <= start ? 0 : (window.scrollY - start) / (end - start)
        const progress = clamp(rawProgress, 0, 1)
        const nextIndex = Math.min(
          scenes.length - 1,
          Math.floor(progress * scenes.length),
        )
        setHeroProgress(progress, nextIndex)
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(rafId)
    }
  }, [scenes.length, setHeroProgress])

  const activeScene = scenes[activeHeroSceneIndex] ?? scenes[0]

  return (
    <section
      ref={sectionRef}
      id="top"
      data-home-scene="hero"
      className="relative"
      style={{ height: `${Math.max(3, scenes.length + 1) * 100}vh` }}
    >
      <div className="sticky top-0 h-screen">
        <Container className="grid h-full grid-cols-1 items-end gap-8 pb-10 pt-24 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border-strong bg-bg-primary/35 px-4 py-2 text-xs uppercase tracking-[0.22em] text-text-muted backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              <span>{activeScene.eyebrow}</span>
              <span className="text-text-primary/70">Premium Indonesian footwear</span>
            </div>
            <h1 className="max-w-[10ch] text-balance text-5xl font-extrabold tracking-tight text-text-primary md:text-7xl">
              {activeScene.headline}
            </h1>
            <p className="mt-5 max-w-[48ch] text-sm leading-relaxed text-text-primary/84 md:text-base">
              {activeScene.microcopy}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#variants"
                className="rounded-full bg-brand-red px-5 py-3 text-sm font-semibold text-text-primary transition hover:bg-brand-red/90"
              >
                Explore the lineup
              </a>
              <a
                href="#story"
                className="rounded-full border border-border-strong bg-bg-primary/35 px-5 py-3 text-sm font-semibold text-text-primary backdrop-blur transition hover:border-brand-red/60"
              >
                Read the story
              </a>
            </div>

            <div className="mt-10 flex items-center gap-3">
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-bg-elevated/70">
                <div
                  className="h-full bg-brand-red transition-[width] duration-200"
                  style={{ width: `${Math.round(heroProgress * 100)}%` }}
                />
              </div>
              <div className="w-16 text-right text-xs uppercase tracking-[0.18em] text-text-muted">
                {activeHeroSceneIndex + 1}/{scenes.length}
              </div>
            </div>
          </div>

          <div className="md:col-span-5 md:justify-self-end">
            <div className="w-full max-w-md rounded-[2rem] border border-border-strong bg-bg-primary/40 p-6 shadow-2xl shadow-black/30 backdrop-blur-md">
              <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.18em] text-text-muted">
                <span>{activeScene.sceneNote}</span>
                <span className="text-text-primary/75">Current focus</span>
              </div>

              <div className="mt-7 grid gap-3 rounded-2xl border border-border-strong bg-bg-elevated/50 p-5">
                <div className="flex items-baseline justify-between gap-4">
                  <div className="text-sm font-semibold text-text-primary">
                    {activeScene.product.name}
                  </div>
                  <div className="text-sm text-text-primary">
                    {formatIDRCurrency(activeScene.product.price)}
                  </div>
                </div>
                <div className="text-xs uppercase tracking-[0.18em] text-text-muted">
                  {activeScene.product.category}
                </div>
                <p className="text-sm leading-relaxed text-text-muted">
                  {activeScene.product.description}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {activeScene.product.materials.slice(0, 3).map((material) => (
                  <span
                    key={material}
                    className="rounded-full border border-border-strong bg-bg-primary/35 px-3 py-1 text-xs text-text-muted"
                  >
                    {material}
                  </span>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-border-strong bg-bg-primary/30 p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-text-muted">
                  Story line
                </div>
                <div className="mt-2 text-sm leading-relaxed text-text-primary">
                  Flow is premium Indonesian movement, shaped for speed, refined
                  in every detail, and built to carry confidence from city
                  streets to every step ahead.
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
