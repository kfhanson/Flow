import { mockDeliveryMethods } from '../../data/mockDeliveryMethods'
import { mockProducts } from '../../data/mockProducts'
import { mockStores } from '../../data/mockStores'
import type { AssistantResponse, SuggestedAction } from '../../types/assistant'
import { formatIDRCurrency } from '../../utils/formatCurrency'

type ResponseRendererProps = {
  response: AssistantResponse
  onSelectAction: (prompt: string) => void
}

function ActionButtons({
  actions,
  onSelectAction,
}: {
  actions?: SuggestedAction[]
  onSelectAction: (prompt: string) => void
}) {
  if (!actions?.length) return null

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {actions.map((action) => (
        <button
          key={`${action.label}-${action.prompt}`}
          type="button"
          onClick={() => onSelectAction(action.prompt)}
          className="rounded-full border border-border-strong bg-bg-primary px-3 py-1 text-xs text-text-muted transition hover:border-brand-red/60 hover:text-text-primary"
        >
          {action.label}
        </button>
      ))}
    </div>
  )
}

export default function ResponseRenderer({
  response,
  onSelectAction,
}: ResponseRendererProps) {
  switch (response.type) {
    case 'text':
      return (
        <div>
          {response.title ? (
            <div className="text-sm font-semibold text-text-primary">{response.title}</div>
          ) : null}
          <div className="mt-2 whitespace-pre-line text-sm leading-relaxed text-text-muted">
            {response.body}
          </div>
          <ActionButtons
            actions={response.suggestedActions}
            onSelectAction={onSelectAction}
          />
        </div>
      )

    case 'clarification':
      return (
        <div>
          <div className="text-sm font-semibold text-text-primary">{response.question}</div>
          <div className="mt-3 grid gap-2">
            {response.options.map((option) => (
              <div
                key={option}
                className="rounded-xl border border-border-strong bg-bg-primary/70 px-3 py-2 text-xs text-text-muted"
              >
                {option}
              </div>
            ))}
          </div>
          <ActionButtons
            actions={response.suggestedActions}
            onSelectAction={onSelectAction}
          />
        </div>
      )

    case 'product_list':
      return (
        <div>
          <div className="text-sm font-semibold text-text-primary">{response.title}</div>
          {response.body ? (
            <div className="mt-2 whitespace-pre-line text-sm leading-relaxed text-text-muted">
              {response.body}
            </div>
          ) : null}
          <div className="mt-4 grid gap-3">
            {response.products.map((product) => (
              <div
                key={product.productId}
                className="rounded-2xl border border-border-strong bg-bg-primary/70 p-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold text-text-primary">{product.name}</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.16em] text-text-muted">
                      {product.category}
                    </div>
                  </div>
                  <div className="text-sm text-text-primary">
                    {formatIDRCurrency(product.price)}
                  </div>
                </div>
                <div className="mt-3 text-sm leading-relaxed text-text-muted">
                  {product.description}
                </div>
              </div>
            ))}
          </div>
          <ActionButtons
            actions={response.suggestedActions}
            onSelectAction={onSelectAction}
          />
        </div>
      )

    case 'product_detail':
      return (
        <div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-sm font-semibold text-text-primary">
                {response.title ?? response.product.name}
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.16em] text-text-muted">
                {response.product.category}
              </div>
            </div>
            <div className="text-sm text-text-primary">
              {formatIDRCurrency(response.product.price)}
            </div>
          </div>
          {response.body ? (
            <div className="mt-3 whitespace-pre-line text-sm leading-relaxed text-text-muted">
              {response.body}
            </div>
          ) : null}
          <div className="mt-4 grid gap-2 text-xs text-text-muted">
            <div>Colors: {response.product.colorways.join(', ')}</div>
            <div>Sizes: {response.product.sizes.join(', ')}</div>
            <div>Materials: {response.product.materials.join(', ')}</div>
          </div>
          <ActionButtons
            actions={response.suggestedActions}
            onSelectAction={onSelectAction}
          />
        </div>
      )

    case 'bag':
      return (
        <div>
          <div className="text-sm font-semibold text-text-primary">{response.title}</div>
          {response.body ? (
            <div className="mt-2 whitespace-pre-line text-sm leading-relaxed text-text-muted">
              {response.body}
            </div>
          ) : null}
          <div className="mt-4 grid gap-3">
            {response.items.map((item) => {
              const product = mockProducts.find((entry) => entry.productId === item.productId)
              return (
                <div
                  key={item.itemId}
                  className="rounded-2xl border border-border-strong bg-bg-primary/70 p-4"
                >
                  <div className="text-sm font-semibold text-text-primary">
                    {product?.name ?? item.productId}
                  </div>
                  <div className="mt-1 text-xs text-text-muted">
                    {item.color} · size {item.size} · qty {item.quantity}
                  </div>
                </div>
              )
            })}
          </div>
          <div className="mt-4 text-sm text-text-primary">
            Subtotal: {formatIDRCurrency(response.subtotal)}
          </div>
          <ActionButtons
            actions={response.suggestedActions}
            onSelectAction={onSelectAction}
          />
        </div>
      )

    case 'store_list':
      return (
        <div>
          <div className="text-sm font-semibold text-text-primary">{response.title}</div>
          {response.body ? (
            <div className="mt-2 whitespace-pre-line text-sm leading-relaxed text-text-muted">
              {response.body}
            </div>
          ) : null}
          <div className="mt-4 grid gap-3">
            {response.stores.map((store) => (
              <div
                key={store.storeId}
                className="rounded-2xl border border-border-strong bg-bg-primary/70 p-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold text-text-primary">{store.name}</div>
                    <div className="mt-1 text-xs text-text-muted">{store.address}</div>
                  </div>
                  <div className="text-xs text-text-muted">{store.distanceKm} km</div>
                </div>
              </div>
            ))}
          </div>
          <ActionButtons
            actions={response.suggestedActions}
            onSelectAction={onSelectAction}
          />
        </div>
      )

    case 'delivery_methods':
      return (
        <div>
          <div className="text-sm font-semibold text-text-primary">{response.title}</div>
          <div className="mt-4 grid gap-3">
            {response.methods.map((method) => (
              <div
                key={method.deliveryMethodId}
                className="rounded-2xl border border-border-strong bg-bg-primary/70 p-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold text-text-primary">{method.name}</div>
                    <div className="mt-1 text-xs text-text-muted">{method.description}</div>
                  </div>
                  <div className="text-sm text-text-primary">
                    {formatIDRCurrency(method.cost)}
                  </div>
                </div>
                <div className="mt-2 text-xs text-text-muted">
                  {method.estimatedDeliveryTime}
                </div>
              </div>
            ))}
          </div>
          <ActionButtons
            actions={response.suggestedActions}
            onSelectAction={onSelectAction}
          />
        </div>
      )

    case 'order_list':
      return (
        <div>
          <div className="text-sm font-semibold text-text-primary">{response.title}</div>
          {response.body ? (
            <div className="mt-2 whitespace-pre-line text-sm leading-relaxed text-text-muted">
              {response.body}
            </div>
          ) : null}
          <div className="mt-4 grid gap-3">
            {response.orders.map((order) => {
              const store = mockStores.find((entry) => entry.storeId === order.storeId)
              const method = mockDeliveryMethods.find(
                (entry) => entry.deliveryMethodId === order.deliveryMethodId,
              )
              return (
                <div
                  key={order.orderId}
                  className="rounded-2xl border border-border-strong bg-bg-primary/70 p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm font-semibold text-text-primary">
                        Order {order.orderId}
                      </div>
                      <div className="mt-1 text-xs text-text-muted">
                        {store?.name ?? order.storeId} · {method?.name ?? order.deliveryMethodId}
                      </div>
                    </div>
                    <div className="text-xs uppercase tracking-[0.16em] text-text-muted">
                      {order.status}
                    </div>
                  </div>
                  <div className="mt-3 text-sm text-text-primary">
                    {formatIDRCurrency(order.totalAmount)}
                  </div>
                </div>
              )
            })}
          </div>
          <ActionButtons
            actions={response.suggestedActions}
            onSelectAction={onSelectAction}
          />
        </div>
      )

    case 'inventory_summary':
      return (
        <div>
          <div className="text-sm font-semibold text-text-primary">{response.title}</div>
          {response.body ? (
            <div className="mt-2 whitespace-pre-line text-sm leading-relaxed text-text-muted">
              {response.body}
            </div>
          ) : null}
          <div className="mt-4 rounded-2xl border border-border-strong bg-bg-primary/70 p-4">
            <div className="text-sm text-text-primary">
              {response.summary.storeName} has {response.summary.numberOfProducts}{' '}
              {response.summary.category.toLowerCase()} product
              {response.summary.numberOfProducts === 1 ? '' : 's'} in stock.
            </div>
            <div className="mt-2 text-xs text-text-muted">
              Available: {response.summary.productNames.join(', ')}
            </div>
          </div>
          <ActionButtons
            actions={response.suggestedActions}
            onSelectAction={onSelectAction}
          />
        </div>
      )
  }
}
