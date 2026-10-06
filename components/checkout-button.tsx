"use client"

import { useState } from "react"
import { LoaderCircle, ShoppingBag } from "lucide-react"
import { createCheckoutSession } from "@/app/actions/stripe"

type CheckoutButtonProps = {
  label?: string
  loadingLabel?: string
  className?: string
}

const defaultClassName =
  "mt-8 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-opacity hover:opacity-90"

export function CheckoutButton({
  label = "Buy calendar — $10",
  loadingLabel = "Opening secure checkout…",
  className = defaultClassName,
}: CheckoutButtonProps) {
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
      aria-busy={isLoading}
      className={`${className} disabled:cursor-wait disabled:opacity-70`}
    >
      {isLoading ? (
        <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
      ) : (
        <ShoppingBag className="size-4" aria-hidden="true" />
      )}
      {isLoading ? loadingLabel : label}
    </button>
  )
}
