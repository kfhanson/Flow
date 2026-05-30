import { useEffect, useMemo, useRef, useState } from 'react'
import heroVideo01 from '../../assets/flow-hero-01.mp4'
import heroVideo02 from '../../assets/flow-hero-02.mp4'
import heroVideo03 from '../../assets/flow-hero-03.mp4'
import heroVideo04 from '../../assets/flow-hero-04.mp4'
import heroVideo05 from '../../assets/flow-hero-05.mp4'
import heroVideo06 from '../../assets/flow-hero-06.mp4'
import heroVideo07 from '../../assets/flow-hero-07.mp4'
import storyVideo from '../../assets/story.mp4'
import {
  type BackdropSceneId,
  useShowcaseStore,
} from '../../store/showcaseStore'

type BackdropLayer = {
  id: BackdropSceneId
  src?: string
  overlayClassName: string
}

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const syncPreference = () => setPrefersReducedMotion(mediaQuery.matches)

    syncPreference()
    mediaQuery.addEventListener('change', syncPreference)
    return () => mediaQuery.removeEventListener('change', syncPreference)
  }, [])

  return prefersReducedMotion
}

export default function ShowcaseBackdrop() {
  const activeBackdropScene = useShowcaseStore((s) => s.activeBackdropScene)
  const activeHeroSceneIndex = useShowcaseStore((s) => s.activeHeroSceneIndex)
  const prefersReducedMotion = usePrefersReducedMotion()
  const isJsdom =
    typeof navigator !== 'undefined' && navigator.userAgent.includes('jsdom')
  const videoRefs = useRef<{
    hero0: HTMLVideoElement | null
    hero1: HTMLVideoElement | null
    story: HTMLVideoElement | null
    commerce: HTMLVideoElement | null
  }>({
    hero0: null,
    hero1: null,
    story: null,
    commerce: null,
  })
  const commerceClips = useMemo(
    () => [heroVideo03, heroVideo04, heroVideo05, heroVideo06, heroVideo07],
    [],
  )
  const [commerceClipIndex, setCommerceClipIndex] = useState(0)
  const commerceSrc = commerceClips[commerceClipIndex]

  useEffect(() => {
    if (isJsdom) return
    const videos = videoRefs.current
    const pauseIfPossible = (video: HTMLVideoElement | null) => {
      if (!video) return
      video.pause()
    }
    const playIfPossible = (video: HTMLVideoElement | null) => {
      if (!video) return
      const playResult = video.play()
      if (playResult && typeof playResult.catch === 'function') {
        playResult.catch(() => {})
      }
    }

    if (prefersReducedMotion) {
      pauseIfPossible(videos.hero0)
      pauseIfPossible(videos.hero1)
      pauseIfPossible(videos.story)
      pauseIfPossible(videos.commerce)
      return
    }

    if (activeBackdropScene === 'hero') {
      playIfPossible(videos.hero0)
      playIfPossible(videos.hero1)
      pauseIfPossible(videos.story)
      pauseIfPossible(videos.commerce)
      return
    }

    if (activeBackdropScene === 'story') {
      pauseIfPossible(videos.hero0)
      pauseIfPossible(videos.hero1)
      playIfPossible(videos.story)
      pauseIfPossible(videos.commerce)
      return
    }

    if (activeBackdropScene === 'commerce') {
      pauseIfPossible(videos.hero0)
      pauseIfPossible(videos.hero1)
      pauseIfPossible(videos.story)
      playIfPossible(videos.commerce)
      return
    }

    pauseIfPossible(videos.hero0)
    pauseIfPossible(videos.hero1)
    pauseIfPossible(videos.story)
    pauseIfPossible(videos.commerce)
  }, [activeBackdropScene, prefersReducedMotion, isJsdom, commerceSrc])

  const layers = useMemo<BackdropLayer[]>(
    () => [
      {
        id: 'hero',
        overlayClassName:
          'bg-[radial-gradient(circle_at_72%_30%,rgba(208,17,27,0.26),transparent_42%),linear-gradient(180deg,rgba(6,6,6,0.1),rgba(6,6,6,0.58)_58%,rgba(6,6,6,0.88))]',
      },
      {
        id: 'story',
        src: storyVideo,
        overlayClassName:
          'bg-[radial-gradient(circle_at_28%_24%,rgba(208,17,27,0.18),transparent_38%),linear-gradient(180deg,rgba(6,6,6,0.2),rgba(6,6,6,0.62)_56%,rgba(6,6,6,0.9))]',
      },
      {
        id: 'commerce',
        src: commerceSrc,
        overlayClassName:
          'bg-[linear-gradient(180deg,rgba(6,6,6,0.48),rgba(6,6,6,0.74)_48%,rgba(6,6,6,0.94)),radial-gradient(circle_at_50%_16%,rgba(255,255,255,0.05),transparent_40%)]',
      },
      {
        id: 'ambient',
        overlayClassName:
          'bg-[linear-gradient(180deg,rgba(6,6,6,0.72),rgba(6,6,6,0.88)_42%,rgba(6,6,6,0.98))]',
      },
    ],
    [commerceSrc],
  )

  const heroVideoIndex = activeHeroSceneIndex >= 1 ? 1 : 0

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-bg-primary" />

      {layers.map((layer) => {
        const isActive = layer.id === activeBackdropScene

        return (
          <div
            key={layer.id}
            className={[
              'absolute inset-0 transition-opacity duration-700',
              isActive ? 'opacity-100' : 'opacity-0',
            ].join(' ')}
            aria-hidden="true"
          >
            {layer.id === 'hero' ? (
              <div className="absolute inset-0">
                <video
                  ref={(node) => {
                    videoRefs.current.hero0 = node
                  }}
                  className={[
                    'absolute inset-0 h-full w-full object-cover transition-opacity duration-700',
                    heroVideoIndex === 0 ? 'opacity-100' : 'opacity-0',
                  ].join(' ')}
                  src={heroVideo01}
                  autoPlay={!prefersReducedMotion}
                  muted
                  loop
                  playsInline
                  preload="auto"
                  controls={false}
                  disablePictureInPicture
                  aria-hidden="true"
                  tabIndex={-1}
                />
                <video
                  ref={(node) => {
                    videoRefs.current.hero1 = node
                  }}
                  className={[
                    'absolute inset-0 h-full w-full object-cover transition-opacity duration-700',
                    heroVideoIndex === 1 ? 'opacity-100' : 'opacity-0',
                  ].join(' ')}
                  src={heroVideo02}
                  autoPlay={!prefersReducedMotion}
                  muted
                  loop
                  playsInline
                  preload="auto"
                  controls={false}
                  disablePictureInPicture
                  aria-hidden="true"
                  tabIndex={-1}
                />
              </div>
            ) : layer.src ? (
              <video
                ref={(node) => {
                  if (layer.id === 'story') {
                    videoRefs.current.story = node
                    return
                  }
                  if (layer.id === 'commerce') {
                    videoRefs.current.commerce = node
                    return
                  }
                }}
                key={layer.src}
                className={[
                  'absolute inset-0 h-full w-full object-cover',
                  layer.id === 'commerce' ? 'scale-[1.04] blur-[1px]' : 'scale-[1.02]',
                ].join(' ')}
                src={layer.src}
                autoPlay={!prefersReducedMotion}
                muted
                loop={layer.id !== 'commerce'}
                playsInline
                preload={layer.id === 'story' ? 'auto' : 'metadata'}
                controls={false}
                disablePictureInPicture
                aria-hidden="true"
                tabIndex={-1}
                onEnded={() => {
                  if (layer.id !== 'commerce') return
                  setCommerceClipIndex((index) => (index + 1) % commerceClips.length)
                }}
              />
            ) : null}

            <div className={`absolute inset-0 ${layer.overlayClassName}`} />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,6,6,0.14),transparent_32%,rgba(6,6,6,0.5))]" />
          </div>
        )
      })}
    </div>
  )
}
