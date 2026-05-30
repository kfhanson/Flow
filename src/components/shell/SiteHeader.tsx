import { Link, NavLink, useLocation } from 'react-router-dom'
import Container from './Container'
import { useCartStore } from '../../store/cartStore'
import { formatIDRCurrency } from '../../utils/formatCurrency'

function useIsHomeRoute() {
  const location = useLocation()
  return location.pathname === '/'
}
export default function SiteHeader() {
  const isHomeRoute = useIsHomeRoute()
  const cartItemCount = useCartStore((s) => s.itemCount())
  const subtotal = useCartStore((s) => s.subtotalIDR())

  return (
    <header className="sticky top-0 z-50 border-b border-border-strong bg-bg-primary/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link to="/" className="text-lg font-semibold tracking-tight">
          <span className="text-brand-red">Flow</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-text-muted md:flex">
          {isHomeRoute ? (
            <>
              <a href="#story" className="hover:text-text-primary">
                Story
              </a>
              <a href="#variants" className="hover:text-text-primary">
                Variants
              </a>
              <a href="#reviews" className="hover:text-text-primary">
                Reviews
              </a>
              <a href="#related" className="hover:text-text-primary">
                Related
              </a>
              <a href="#cart" className="hover:text-text-primary">
                Cart
              </a>
            </>
          ) : null}
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

        <nav className="flex items-center gap-3 text-xs text-text-muted md:hidden">
          <NavLink
            to="/"
            className={({ isActive }) =>
              [
                'rounded-full border border-border-strong px-3 py-1 transition hover:border-brand-red/60 hover:text-text-primary',
                isActive ? 'text-text-primary' : 'text-text-muted',
              ].join(' ')
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/support"
            className={({ isActive }) =>
              [
                'rounded-full border border-border-strong px-3 py-1 transition hover:border-brand-red/60 hover:text-text-primary',
                isActive ? 'text-text-primary' : 'text-text-muted',
              ].join(' ')
            }
          >
            Support
          </NavLink>
        </nav>

        <div className="flex items-center gap-3 text-xs text-text-muted">
          <div className="rounded-full border border-border-strong px-3 py-1">
            {cartItemCount} items
          </div>
          <div className="rounded-full border border-border-strong px-3 py-1 text-text-primary">
            {formatIDRCurrency(subtotal)}
          </div>
        </div>
      </Container>
    </header>
  )
}
