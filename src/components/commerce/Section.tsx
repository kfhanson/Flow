import type { ReactNode } from 'react'
import type { BackdropSceneId } from '../../store/showcaseStore'
import Container from '../shell/Container'

type SectionProps = {
  id: string
  title: string
  eyebrow?: string
  index?: number
  backdropScene?: BackdropSceneId
  fullPage?: boolean
  children: ReactNode
}

export default function Section({
  id,
  title,
  eyebrow,
  index,
  backdropScene = 'ambient',
  fullPage = false,
  children,
}: SectionProps) {
  const eyebrowText =
    eyebrow && index != null
      ? `${String(index).padStart(2, '0')} — ${eyebrow}`
      : eyebrow

  return (
    <section
      id={id}
      data-home-scene={backdropScene}
      className={[
        'relative border-t border-border-strong/80 bg-transparent',
        fullPage ? 'min-h-screen' : null,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <Container
        className={[
          fullPage ? 'flex min-h-screen items-center py-20' : 'py-16',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {eyebrowText ? (
          <div className="mb-3 text-xs uppercase tracking-[0.18em] text-text-muted">
            {eyebrowText}
          </div>
        ) : null}
        <h2 className="font-display text-4xl font-semibold tracking-tight text-text-primary md:text-5xl">
          {title}
        </h2>
        <div className="mt-8">{children}</div>
      </Container>
    </section>
  )
}
