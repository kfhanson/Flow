import type { ReactNode } from 'react'
import type { BackdropSceneId } from '../../store/showcaseStore'
import Container from '../shell/Container'

type SectionProps = {
  id: string
  title: string
  eyebrow?: string
  backdropScene?: BackdropSceneId
  fullPage?: boolean
  children: ReactNode
}

export default function Section({
  id,
  title,
  eyebrow,
  backdropScene = 'ambient',
  fullPage = false,
  children,
}: SectionProps) {
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
        {eyebrow ? (
          <div className="mb-3 text-xs uppercase tracking-[0.18em] text-text-muted">
            {eyebrow}
          </div>
        ) : null}
        <h2 className="text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
          {title}
        </h2>
        <div className="mt-8">{children}</div>
      </Container>
    </section>
  )
}
