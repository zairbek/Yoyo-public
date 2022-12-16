export interface ProductPrices {
  base: ProductPrice,
  discount: null|ProductPrice,
}

export interface ProductPrice {
  price: number,
  currency: string,
  formatted: string,
}
