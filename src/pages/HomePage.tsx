import Hero from '../components/hero/Hero'
import CartSummarySection from '../components/commerce/CartSummarySection'
import RelatedSection from '../components/commerce/RelatedSection'
import ReviewsSection from '../components/commerce/ReviewsSection'
import StorySection from '../components/commerce/StorySection'
import VariantsSection from '../components/commerce/VariantsSection'

export default function HomePage() {
  return (
    <main className="min-h-full">
      <Hero />
      <StorySection />
      <VariantsSection />
      <ReviewsSection />
      <RelatedSection />
      <CartSummarySection />
    </main>
  )
}
