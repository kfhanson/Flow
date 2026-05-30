import type { ProductVariant } from './types'

export const products: ProductVariant[] = [
  {
    id: 'flow-velocity-black-red',
    name: 'Flow Velocity 01',
    category: 'Runner',
    price: 1899000,
    accent: 'brand.red',
    description:
      'The flagship silhouette: a fast, sculpted runner finished for late-city light and all-day pace.',
    materials: ['Engineered mesh upper', 'Sculpted foam midsole', 'Crimson outsole trim'],
    angles: [
      {
        id: 'three-quarter',
        label: 'Three-quarter',
        videoSrc: '/assets/pixverse/velocity-one/three-quarter.mp4',
        posterSrc: '/assets/pixverse/velocity-one/three-quarter.jpg',
      },
      {
        id: 'sole-detail',
        label: 'Sole detail',
        videoSrc: '/assets/pixverse/velocity-one/sole-detail.mp4',
        posterSrc: '/assets/pixverse/velocity-one/sole-detail.jpg',
      },
    ],
  },
  {
    id: 'flow-arc-runner-graphite',
    name: 'Flow Arc Runner',
    category: 'Runner',
    price: 1599000,
    accent: 'brand.red',
    description:
      'A lighter graphite runner with a quieter upper and a sharper underfoot response.',
    materials: ['Graphite knit shell', 'Support cage frame', 'Impact-tuned foam'],
    angles: [
      {
        id: 'lateral',
        label: 'Lateral profile',
        videoSrc: '/assets/pixverse/arc-runner/lateral.mp4',
        posterSrc: '/assets/pixverse/arc-runner/lateral.jpg',
      },
      {
        id: 'macro',
        label: 'Macro stitch',
        videoSrc: '/assets/pixverse/arc-runner/macro.mp4',
        posterSrc: '/assets/pixverse/arc-runner/macro.jpg',
      },
    ],
  },
  {
    id: 'flow-tan-leather-mid',
    name: 'Flow Linea Mid',
    category: 'Leather',
    price: 2099000,
    accent: 'brand.red',
    description:
      'A leather-led mid cut that brings editorial structure, cleaner lines, and a more dressed finish.',
    materials: ['Premium leather upper', 'Waxed lace system', 'Cushioned cupsole'],
    angles: [
      {
        id: 'orbit',
        label: 'Studio orbit',
        videoSrc: '/assets/pixverse/tan-leather-mid/orbit.mp4',
        posterSrc: '/assets/pixverse/tan-leather-mid/orbit.jpg',
      },
      {
        id: 'heel',
        label: 'Heel counter',
        videoSrc: '/assets/pixverse/tan-leather-mid/heel.mp4',
        posterSrc: '/assets/pixverse/tan-leather-mid/heel.jpg',
      },
    ],
  },
]
