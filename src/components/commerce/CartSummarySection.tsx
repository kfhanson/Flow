import { products } from '../../data/products'
import { useCartStore } from '../../store/cartStore'
import { formatIDRCurrency } from '../../utils/formatCurrency'
import Section from './Section'

function productName(productId: string) {
  return products.find((p) => p.id === productId)?.name ?? productId
}

export default function CartSummarySection() {
  const items = useCartStore((s) => s.items)
  const setQuantity = useCartStore((s) => s.setQuantity)
  const clear = useCartStore((s) => s.clear)
  const subtotal = useCartStore((s) => s.subtotalIDR())

  return (
    <Section
      id="cart"
      title="Cart intent"
      eyebrow="Cart"
      backdropScene="ambient"
    >
      <div className="grid gap-6 md:grid-cols-12">
        <div className="rounded-2xl border border-border-strong bg-bg-panel p-6 md:col-span-8">
          {items.length === 0 ? (
            <div className="text-sm text-text-muted">
              No selections yet. Add a variant to build purchase intent.
            </div>
          ) : (
            <div className="grid gap-4">
              {items.map((item) => (
                <div
                  key={item.productId}
                  className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border-strong bg-bg-elevated/40 px-4 py-3"
                >
                  <div className="text-sm font-medium text-text-primary">
                    {productName(item.productId)}
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setQuantity(item.productId, item.quantity - 1)}
                      className="h-9 w-9 rounded-lg border border-border-strong bg-bg-panel text-text-primary hover:border-brand-red/60"
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <div className="min-w-10 text-center text-sm text-text-primary">
                      {item.quantity}
                    </div>
                    <button
                      type="button"
                      onClick={() => setQuantity(item.productId, item.quantity + 1)}
                      className="h-9 w-9 rounded-lg border border-border-strong bg-bg-panel text-text-primary hover:border-brand-red/60"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={() => clear()}
                className="self-start text-xs text-text-muted underline decoration-border-strong underline-offset-4 hover:text-text-primary"
              >
                Clear cart
              </button>
            </div>
          )}
        </div>

        <div className="rounded-2xl border border-border-strong bg-bg-elevated/50 p-6 md:col-span-4">
          <div className="text-xs uppercase tracking-[0.18em] text-text-muted">
            Subtotal
          </div>
          <div className="mt-2 text-2xl font-semibold text-text-primary">
            {formatIDRCurrency(subtotal)}
          </div>
          <div className="mt-4 text-sm leading-relaxed text-text-muted">
            This is a premium intent cart—no transactional checkout in the initial build.
          </div>
          <button
            type="button"
            className="mt-6 w-full rounded-xl bg-brand-red px-4 py-3 text-sm font-semibold text-text-primary transition hover:bg-brand-red/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
          >
            Continue with intent
          </button>
        </div>
      </div>
    </Section>
  )
}
