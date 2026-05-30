import type { ProductVariant } from './types'

export const products: ProductVariant[] = [
  {
    id: 'flow-velocity-black-red',
    name: 'Velocity One',
    category: 'Sneaker',
    price: 1899000,
    accent: 'brand.red',
    description: 'A flagship drop built for night streets and studio light.',
    materials: ['Full-grain leather', 'Carbon mesh', 'Red lacquer eyelets'],
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
    name: 'Arc Runner',
    category: 'Runner',
    price: 1599000,
    accent: 'brand.red',
    description: 'Neutral graphite with a sharp red cadence underfoot.',
    materials: ['Engineered knit', 'TPU cage', 'Impact foam'],
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
    name: 'Tan Leather Mid',
    category: 'Leather',
    price: 2099000,
    accent: 'brand.red',
    description: 'Elevated leather with a restrained, editorial silhouette.',
    materials: ['Vegetable-tanned leather', 'Waxed laces', 'Rubber cupsole'],
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
