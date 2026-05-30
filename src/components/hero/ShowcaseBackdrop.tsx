import { useEffect, useMemo, useState } from 'react'
import heroVideo01 from '../../assets/flow-hero-01.mp4'
import heroVideo02 from '../../assets/flow-hero-02.mp4'
import {
  type BackdropSceneId,
  useShowcaseStore,
} from '../../store/showcaseStore'

type BackdropLayer = {
  id: BackdropSceneId
  label: string
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
  const prefersReducedMotion = usePrefersReducedMotion()
  const layers = useMemo<BackdropLayer[]>(
    () => [
      {
        id: 'hero',
        label: 'Hero sequence',
        src: heroVideo01,
        overlayClassName:
          'bg-[radial-gradient(circle_at_72%_30%,rgba(208,17,27,0.26),transparent_42%),linear-gradient(180deg,rgba(6,6,6,0.1),rgba(6,6,6,0.58)_58%,rgba(6,6,6,0.88))]',
      },
      {
        id: 'story',
        label: 'Story transition',
        src: heroVideo02,
        overlayClassName:
          'bg-[radial-gradient(circle_at_28%_24%,rgba(208,17,27,0.18),transparent_38%),linear-gradient(180deg,rgba(6,6,6,0.2),rgba(6,6,6,0.62)_56%,rgba(6,6,6,0.9))]',
      },
      {
        id: 'commerce',
        label: 'Commerce atmosphere',
        src: heroVideo02,
        overlayClassName:
          'bg-[linear-gradient(180deg,rgba(6,6,6,0.48),rgba(6,6,6,0.74)_48%,rgba(6,6,6,0.94)),radial-gradient(circle_at_50%_16%,rgba(255,255,255,0.05),transparent_40%)]',
      },
      {
        id: 'ambient',
        label: 'Ambient hold',
        overlayClassName:
          'bg-[linear-gradient(180deg,rgba(6,6,6,0.72),rgba(6,6,6,0.88)_42%,rgba(6,6,6,0.98))]',
      },
    ],
    [],
  )

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
            {layer.src ? (
              <video
                className={[
                  'absolute inset-0 h-full w-full object-cover',
                  layer.id === 'commerce' ? 'scale-[1.04] blur-[2px]' : 'scale-[1.02]',
                ].join(' ')}
                src={layer.src}
                autoPlay={!prefersReducedMotion}
                muted
                loop
                playsInline
                preload={layer.id === 'hero' ? 'auto' : 'metadata'}
                controls={false}
                disablePictureInPicture
                aria-hidden="true"
                tabIndex={-1}
              />
            ) : null}

            <div className={`absolute inset-0 ${layer.overlayClassName}`} />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,6,6,0.14),transparent_32%,rgba(6,6,6,0.5))]" />
          </div>
        )
      })}

      <div className="absolute left-6 top-24 rounded-full border border-border-strong bg-bg-primary/45 px-3 py-2 text-[11px] uppercase tracking-[0.2em] text-text-muted backdrop-blur">
        {layers.find((layer) => layer.id === activeBackdropScene)?.label}
      </div>
    </div>
  )
}
