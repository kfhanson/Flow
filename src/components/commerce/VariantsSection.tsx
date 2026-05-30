import { products } from '../../data/products'
import { useCartStore } from '../../store/cartStore'
import { formatIDRCurrency } from '../../utils/formatCurrency'
import Section from './Section'

export default function VariantsSection() {
  const addItem = useCartStore((s) => s.addItem)

  return (
    <Section
      id="variants"
      title="Variants built for the night shift"
      eyebrow="Variants"
      backdropScene="commerce"
    >
      <div className="grid gap-6 md:grid-cols-12">
        {products.map((product) => (
          <div
            key={product.id}
            className="group rounded-2xl border border-border-strong bg-bg-panel p-6 transition hover:border-brand-red/60 md:col-span-4"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-text-primary">
                  {product.name}
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.16em] text-text-muted">
                  {product.category}
                </div>
              </div>
              <div className="text-sm text-text-primary">
                {formatIDRCurrency(product.price)}
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              {product.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {product.materials.slice(0, 3).map((m) => (
                <span
                  key={m}
                  className="rounded-full border border-border-strong bg-bg-elevated/40 px-3 py-1 text-xs text-text-muted"
                >
                  {m}
                </span>
              ))}
            </div>

            <button
              type="button"
              onClick={() => addItem(product.id)}
              className="mt-6 w-full rounded-xl bg-brand-red px-4 py-3 text-sm font-semibold text-text-primary transition hover:bg-brand-red/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </Section>
  )
}
