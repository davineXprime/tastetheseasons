export interface Product {
  id: string
  name: string
  description: string
  priceInCents: number
}

export const PRODUCTS: Product[] = [
  {
    id: "taste-the-seasons-2027",
    name: "Taste the Seasons 2027 Calendar",
    description: "A printable twelve-month seasonal food calendar.",
    priceInCents: 1000,
  },
]
