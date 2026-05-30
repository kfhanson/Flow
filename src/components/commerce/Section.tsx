import type { ReactNode } from 'react'
import Container from '../shell/Container'

type SectionProps = {
  id: string
  title: string
  eyebrow?: string
  children: ReactNode
}

export default function Section({ id, title, eyebrow, children }: SectionProps) {
  return (
    <section id={id} className="border-t border-border-strong bg-bg-primary">
      <Container className="py-16">
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
