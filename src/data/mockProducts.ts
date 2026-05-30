import type { Product, ProductVariant } from '../types/commerce'

export const mockProducts: Product[] = [
  {
    productId: 'flow-runner',
    slug: 'flow-runner',
    name: 'Flow Runner',
    brand: 'Flow',
    category: 'Runner',
    description:
      'A cushioned runner designed for daily city movement, light training, and all-day comfort.',
    price: 1299000,
    imageUrl: '/assets/mock-products/flow-runner.jpg',
    colorways: ['black/red', 'graphite'],
    sizes: [40, 41, 42, 43, 44],
    materials: ['Engineered mesh', 'Synthetic overlays', 'Foam midsole', 'Rubber outsole'],
    useCases: ['daily city wear', 'running', 'long walks', 'commute'],
    popularityScore: 98,
  },
  {
    productId: 'flow-metro-low',
    slug: 'flow-metro-low',
    name: 'Flow Metro Low',
    brand: 'Flow',
    category: 'Sneaker',
    description:
      'A clean low-profile sneaker for everyday styling, travel, and polished urban outfits.',
    price: 1099000,
    imageUrl: '/assets/mock-products/flow-metro-low.jpg',
    colorways: ['triple black', 'bone'],
    sizes: [39, 40, 41, 42, 43, 44],
    materials: ['Smooth synthetic leather', 'Mesh lining', 'Rubber cupsole'],
    useCases: ['daily city wear', 'travel', 'smart casual'],
    popularityScore: 89,
  },
  {
    productId: 'flow-office-slip',
    slug: 'flow-office-slip',
    name: 'Flow Office Slip',
    brand: 'Flow',
    category: 'Slip-on',
    description:
      'A minimal slip-on built for easy daily wear with a sharper office-ready silhouette.',
    price: 999000,
    imageUrl: '/assets/mock-products/flow-office-slip.jpg',
    colorways: ['black', 'graphite'],
    sizes: [39, 40, 41, 42, 43, 44],
    materials: ['Stretch knit upper', 'Soft lining', 'Lightweight outsole'],
    useCases: ['daily city wear', 'office', 'easy commute'],
    popularityScore: 78,
  },
  {
    productId: 'flow-court-ace',
    slug: 'flow-court-ace',
    name: 'Flow Court Ace',
    brand: 'Flow',
    category: 'Court',
    description:
      'A crisp court-inspired sneaker with red accents and a versatile everyday stance.',
    price: 1399000,
    imageUrl: '/assets/mock-products/flow-court-ace.jpg',
    colorways: ['white/red', 'black/red'],
    sizes: [40, 41, 42, 43, 44],
    materials: ['Leather upper', 'Textile lining', 'Rubber outsole'],
    useCases: ['daily city wear', 'casual', 'weekend'],
    popularityScore: 84,
  },
]

function createVariant(productId: string, size: number, color: string, price: number): ProductVariant {
  return {
    variantId: `${productId}-${color.replace('/', '-')}-${size}`,
    productId,
    size,
    color,
    price,
  }
}

export const mockProductVariants: ProductVariant[] = [
  ...[40, 41, 42, 43, 44].flatMap((size) => [
    createVariant('flow-runner', size, 'black/red', 1299000),
    createVariant('flow-runner', size, 'graphite', 1299000),
  ]),
  ...[39, 40, 41, 42, 43, 44].flatMap((size) => [
    createVariant('flow-metro-low', size, 'triple black', 1099000),
    createVariant('flow-metro-low', size, 'bone', 1099000),
  ]),
  ...[39, 40, 41, 42, 43, 44].flatMap((size) => [
    createVariant('flow-office-slip', size, 'black', 999000),
    createVariant('flow-office-slip', size, 'graphite', 999000),
  ]),
  ...[40, 41, 42, 43, 44].flatMap((size) => [
    createVariant('flow-court-ace', size, 'white/red', 1399000),
    createVariant('flow-court-ace', size, 'black/red', 1399000),
  ]),
]
