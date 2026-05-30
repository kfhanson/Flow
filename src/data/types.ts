export type ProductVariant = {
  id: string
  name: string
  category: 'Sneaker' | 'Runner' | 'Leather'
  price: number
  accent: string
  description: string
  materials: string[]
  angles: Array<{
    id: string
    label: string
    videoSrc: string
    posterSrc: string
  }>
}

export type ReviewItem = {
  id: string
  author: string
  location: string
  rating: number
  quote: string
}

export type SupportQuestion = {
  id: string
  label: string
  shortPrompt: string
  answerTitle: string
  answerBody: string
  videoCue: string
}

export type CartItem = {
  productId: string
  quantity: number
}
