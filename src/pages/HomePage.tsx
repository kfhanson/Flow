import { useEffect, useRef } from 'react'
import Hero from '../components/hero/Hero'
import ShowcaseBackdrop from '../components/hero/ShowcaseBackdrop'
import ReviewsSection from '../components/commerce/ReviewsSection'
import StorySection from '../components/commerce/StorySection'
import VariantsSection from '../components/commerce/VariantsSection'
import {
  type BackdropSceneId,
  useShowcaseStore,
} from '../store/showcaseStore'

export default function HomePage() {
  const mainRef = useRef<HTMLElement | null>(null)
  const setActiveBackdropScene = useShowcaseStore((s) => s.setActiveBackdropScene)

  useEffect(() => {
    const main = mainRef.current
    if (!main) return

    const sections = Array.from(
      main.querySelectorAll<HTMLElement>('[data-home-scene]'),
    )

    if (sections.length === 0) return

    let rafId = 0

    const updateActiveScene = () => {
      const viewportMarker = window.innerHeight * 0.42
      let nextScene: BackdropSceneId = 'hero'
      let smallestDistance = Number.POSITIVE_INFINITY

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        const rectCenter = rect.top + rect.height / 2
        const distance = Math.abs(rectCenter - viewportMarker)

        if (distance < smallestDistance) {
          smallestDistance = distance
          nextScene = (section.dataset.homeScene as BackdropSceneId) ?? 'hero'
        }
      })

      setActiveBackdropScene(nextScene)
    }

    const onScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = window.requestAnimationFrame(updateActiveScene)
    }

    updateActiveScene()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(rafId)
    }
  }, [setActiveBackdropScene])

  return (
    <main ref={mainRef} className="relative isolate min-h-full overflow-x-clip">
      <ShowcaseBackdrop />
      <div className="relative z-10">
        <Hero />
        <StorySection />
        <VariantsSection />
        <ReviewsSection />
      </div>
    </main>
  )
}
