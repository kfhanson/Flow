import { reviews } from '../../data/reviews'
import Section from './Section'

function averageRating() {
  if (reviews.length === 0) return 0
  const total = reviews.reduce((acc, r) => acc + r.rating, 0)
  return total / reviews.length
}

export default function ReviewsSection() {
  const avg = averageRating()

  return (
    <Section id="reviews" title="Curated proof, not marketplace noise" eyebrow="Reviews">
      <div className="grid gap-6 md:grid-cols-12">
        <div className="rounded-2xl border border-border-strong bg-bg-elevated/50 p-8 md:col-span-4">
          <div className="text-5xl font-semibold tracking-tight text-text-primary">
            {avg.toFixed(1)}
          </div>
          <div className="mt-2 text-xs uppercase tracking-[0.18em] text-text-muted">
            Average rating
          </div>
          <div className="mt-6 text-sm leading-relaxed text-text-muted">
            Reviews are styled like editorial pull-quotes—clear signal, no clutter.
          </div>
        </div>
        <div className="grid gap-6 md:col-span-8 md:grid-cols-2">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="rounded-2xl border border-border-strong bg-bg-panel p-6"
            >
              <div className="text-sm leading-relaxed text-text-primary">
                “{review.quote}”
              </div>
              <div className="mt-5 flex items-center justify-between gap-4 text-xs text-text-muted">
                <div>
                  {review.author} · {review.location}
                </div>
                <div className="text-text-primary">{review.rating}/5</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
