import { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { products } from '../../data/products'
import { useCartStore } from '../../store/cartStore'
import { formatIDRCurrency } from '../../utils/formatCurrency'
import Container from './Container'

export default function SiteHeader() {
  const items = useCartStore((s) => s.items)
  const cartItemCount = useCartStore((s) => s.itemCount())
  const subtotal = useCartStore((s) => s.subtotalIDR())
  const setQuantity = useCartStore((s) => s.setQuantity)
  const removeItem = useCartStore((s) => s.removeItem)
  const clear = useCartStore((s) => s.clear)
  const isCartOpen = useCartStore((s) => s.isCartOpen)
  const setCartOpen = useCartStore((s) => s.setCartOpen)

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setCartOpen(false)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [setCartOpen])

  return (
    <header className="sticky top-0 z-50 border-b border-border-strong bg-bg-primary/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link to="/" className="text-lg font-semibold tracking-tight">
          <span className="text-brand-red">Flow</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-text-muted md:flex">
          <Link to="/#story" className="hover:text-text-primary">
            Story
          </Link>
          <Link to="/#variants" className="hover:text-text-primary">
            Variants
          </Link>
          <Link to="/#reviews" className="hover:text-text-primary">
            Reviews
          </Link>
          <NavLink
            to="/support"
            className={({ isActive }) =>
              [
                'hover:text-text-primary',
                isActive ? 'text-text-primary' : 'text-text-muted',
              ].join(' ')
            }
          >
            Support
          </NavLink>
        </nav>

        <div className="relative flex items-center gap-3 text-xs text-text-muted">
          <button
            type="button"
            className="inline-flex items-center gap-3 rounded-full border border-border-strong bg-bg-primary/40 px-3 py-1 text-text-primary backdrop-blur transition hover:border-brand-red/60"
            aria-haspopup="dialog"
            aria-expanded={isCartOpen}
            onClick={() => setCartOpen(!isCartOpen)}
          >
            <span className="text-text-muted">{cartItemCount} items</span>
            <span className="h-3 w-px bg-border-strong" />
            <span>{formatIDRCurrency(subtotal)}</span>
          </button>

          {isCartOpen ? (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setCartOpen(false)}
                aria-hidden="true"
              />
              <div
                role="dialog"
                aria-label="Cart"
                className="absolute right-0 top-full z-50 mt-3 w-[360px] rounded-2xl border border-border-strong bg-bg-primary/90 p-4 shadow-2xl shadow-black/40 backdrop-blur"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="text-xs uppercase tracking-[0.18em] text-text-muted">
                    Cart
                  </div>
                  <button
                    type="button"
                    className="rounded-full border border-border-strong px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-text-muted hover:border-brand-red/60 hover:text-text-primary"
                    onClick={() => setCartOpen(false)}
                  >
                    Close
                  </button>
                </div>

                <div className="mt-4 grid max-h-[50vh] gap-3 overflow-auto pr-1">
                  {items.length === 0 ? (
                    <div className="rounded-xl border border-border-strong bg-bg-panel/40 p-4 text-sm text-text-muted">
                      Your cart is empty. Add a pair to start building your Flow
                      selection.
                    </div>
                  ) : (
                    items.map((item) => {
                      const product = products.find((p) => p.id === item.productId)
                      const name = product?.name ?? item.productId
                      const price = product?.price ?? 0
                      return (
                        <div
                          key={item.productId}
                          className="rounded-xl border border-border-strong bg-bg-panel/50 p-4"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <div className="text-sm font-semibold text-text-primary">
                                {name}
                              </div>
                              <div className="mt-1 text-xs text-text-muted">
                                {formatIDRCurrency(price)}
                              </div>
                            </div>
                            <button
                              type="button"
                              className="text-xs text-text-muted underline decoration-border-strong underline-offset-4 hover:text-text-primary"
                              onClick={() => removeItem(item.productId)}
                            >
                              Remove
                            </button>
                          </div>

                          <div className="mt-4 flex items-center justify-between gap-4">
                            <div className="inline-flex items-center gap-2">
                              <button
                                type="button"
                                onClick={() =>
                                  setQuantity(item.productId, item.quantity - 1)
                                }
                                className="h-9 w-9 rounded-lg border border-border-strong bg-bg-primary/30 text-text-primary hover:border-brand-red/60"
                                aria-label="Decrease quantity"
                              >
                                −
                              </button>
                              <div className="min-w-10 text-center text-sm text-text-primary">
                                {item.quantity}
                              </div>
                              <button
                                type="button"
                                onClick={() =>
                                  setQuantity(item.productId, item.quantity + 1)
                                }
                                className="h-9 w-9 rounded-lg border border-border-strong bg-bg-primary/30 text-text-primary hover:border-brand-red/60"
                                aria-label="Increase quantity"
                              >
                                +
                              </button>
                            </div>
                            <div className="text-sm font-semibold text-text-primary">
                              {formatIDRCurrency(price * item.quantity)}
                            </div>
                          </div>
                        </div>
                      )
                    })
                  )}
                </div>

                <div className="mt-4 rounded-xl border border-border-strong bg-bg-elevated/40 p-4">
                  <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.18em] text-text-muted">
                    <span>Subtotal</span>
                    <span className="text-text-primary">
                      {formatIDRCurrency(subtotal)}
                    </span>
                  </div>
                  <div className="mt-3 text-xs leading-relaxed text-text-muted">
                    A clean summary of what you are considering now, with totals
                    held here while you compare finish, fit, and silhouette.
                  </div>
                  {items.length > 0 ? (
                    <button
                      type="button"
                      className="mt-4 w-full text-xs text-text-muted underline decoration-border-strong underline-offset-4 hover:text-text-primary"
                      onClick={() => clear()}
                    >
                      Clear cart
                    </button>
                  ) : null}
                </div>
              </div>
            </>
          ) : null}
        </div>
      </Container>
    </header>
  )
}
