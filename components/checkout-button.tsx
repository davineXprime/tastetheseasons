"use client"

import { useState } from "react"
import { Download, LoaderCircle } from "lucide-react"
import { createCheckoutSession } from "@/app/actions/stripe"

export function CheckoutButton() {
  const [isLoading, setIsLoading] = useState(false)

  async function handleCheckout() {
    setIsLoading(true)
    try {
      const checkoutUrl = await createCheckoutSession("taste-the-seasons-2027")
      window.location.assign(checkoutUrl)
    } catch {
      setIsLoading(false)
    }
  }

  return (
    <button
      type="button"
      onClick={handleCheckout}
      disabled={isLoading}
      className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-opacity hover:opacity-90 disabled:cursor-wait disabled:opacity-70"
    >
      {isLoading ? <LoaderCircle className="size-4 animate-spin" aria-hidden="true" /> : <Download className="size-4" aria-hidden="true" />}
      {isLoading ? "Opening secure checkout…" : "Buy calendar — $10"}
    </button>
  )
}
