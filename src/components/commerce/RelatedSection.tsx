import { products } from '../../data/products'
import { formatIDRCurrency } from '../../utils/formatCurrency'
import Section from './Section'

export default function RelatedSection() {
  return (
    <Section
      id="related"
      title="Related drops"
      eyebrow="Related"
      backdropScene="ambient"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {products.map((p) => (
          <div
            key={p.id}
            className="rounded-2xl border border-border-strong bg-bg-panel p-6"
          >
            <div className="text-sm font-semibold text-text-primary">{p.name}</div>
            <div className="mt-1 text-xs uppercase tracking-[0.16em] text-text-muted">
              {p.category}
            </div>
            <div className="mt-4 text-sm text-text-primary">
              {formatIDRCurrency(p.price)}
            </div>
            <div className="mt-6 h-1 w-10 rounded-full bg-brand-red/70" />
          </div>
        ))}
      </div>
    </Section>
  )
}
