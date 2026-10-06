"use server"

import { headers } from "next/headers"
import { PRODUCTS } from "@/lib/products"
import { stripe } from "@/lib/stripe"

export async function createCheckoutSession(productId: string) {
  const product = PRODUCTS.find((item) => item.id === productId)
  if (!product) throw new Error("Product not found")

  const origin = (await headers()).get("origin") ?? "http://localhost:3000"
  const integrationIdentifier = `taste-seasons-${Math.random().toString(36).slice(2, 10)}`

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: product.name,
            description: product.description,
          },
          unit_amount: product.priceInCents,
        },
        quantity: 1,
      },
    ],
    success_url: `${origin}/?checkout=success`,
    cancel_url: `${origin}/?checkout=cancelled#download`,
    integration_identifier: integrationIdentifier,
  })

  if (!session.url) throw new Error("Stripe did not return a checkout URL")
  return session.url
}
