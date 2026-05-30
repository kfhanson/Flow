import { mockProducts, mockProductVariants } from '../data/mockProducts'
import type { CatalogSearchParams } from '../types/assistant'

function includesNormalized(haystack: string, needle: string) {
  return haystack.toLowerCase().includes(needle.toLowerCase())
}

export function searchProducts(params: CatalogSearchParams = {}) {
  const {
    query,
    brand,
    category,
    color,
    maxPrice,
    useCase,
    limit = 4,
  } = params

  return [...mockProducts]
    .filter((product) => (brand ? product.brand === brand : true))
    .filter((product) => (category ? product.category === category : true))
    .filter((product) => (color ? product.colorways.some((item) => includesNormalized(item, color)) : true))
    .filter((product) => (maxPrice ? product.price <= maxPrice : true))
    .filter((product) =>
      useCase
        ? product.useCases.some((item) => includesNormalized(item, useCase))
        : true,
    )
    .filter((product) => {
      if (!query) return true
      return (
        includesNormalized(product.name, query) ||
        includesNormalized(product.description, query) ||
        product.useCases.some((item) => includesNormalized(item, query))
      )
    })
    .sort((left, right) => right.popularityScore - left.popularityScore)
    .slice(0, limit)
}

export function getProductDetails(productNameOrSlug: string) {
  const normalized = productNameOrSlug.trim().toLowerCase()
  return (
    mockProducts.find(
      (product) =>
        product.slug === normalized || product.name.toLowerCase() === normalized,
    ) ?? null
  )
}

export function getProductVariants(productId: string) {
  return mockProductVariants.filter((variant) => variant.productId === productId)
}

export function getVariant(productId: string, size: number, color: string) {
  const normalizedColor = color.trim().toLowerCase()
  return (
    mockProductVariants.find(
      (variant) =>
        variant.productId === productId &&
        variant.size === size &&
        variant.color.toLowerCase() === normalizedColor,
    ) ?? null
  )
}
