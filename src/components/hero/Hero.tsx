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
      products.map((p, index) => ({
        id: p.id,
        headline: index === 0 ? 'Night-built. Studio sharp.' : p.name,
        product: p,
        microcopy: 'Premium Indonesian craft meets street velocity.',
      })),
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
      className="relative"
      style={{ height: `${Math.max(3, scenes.length + 1) * 100}vh` }}
    >
      <div className="sticky top-0 h-screen">
        <Container className="grid h-full grid-cols-1 items-center gap-10 py-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-text-muted">
              <span className="h-1 w-10 rounded-full bg-brand-red/70" />
              <span>Scroll</span>
            </div>
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-text-primary md:text-7xl">
              {activeScene.headline}
            </h1>
            <p className="mt-4 max-w-[46ch] text-sm leading-relaxed text-text-muted">
              {activeScene.microcopy}
            </p>

            <div className="mt-10 grid gap-2 rounded-2xl border border-border-strong bg-bg-elevated/60 p-5">
              <div className="flex items-baseline justify-between gap-4">
                <div className="text-sm font-medium text-text-primary">
                  {activeScene.product.name}
                </div>
                <div className="text-sm text-text-primary">
                  {formatIDRCurrency(activeScene.product.price)}
                </div>
              </div>
              <div className="text-xs text-text-muted">
                {activeScene.product.category} · {activeScene.product.materials[0]}
              </div>
            </div>
          </div>

          <div className="relative md:col-span-7">
            <div className="relative overflow-hidden rounded-3xl border border-border-strong bg-bg-panel">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-red-soft/70 via-transparent to-transparent" />
              <div className="relative aspect-[16/10] w-full">
                <div className="absolute inset-0 grid place-items-center">
                  <div className="text-xs uppercase tracking-[0.18em] text-text-muted">
                    PixVerse video stage
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <div className="h-1 flex-1 overflow-hidden rounded-full bg-bg-elevated">
                <div
                  className="h-full bg-brand-red transition-[width] duration-200"
                  style={{ width: `${Math.round(heroProgress * 100)}%` }}
                />
              </div>
              <div className="w-16 text-right text-xs text-text-muted">
                {activeHeroSceneIndex + 1}/{scenes.length}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
