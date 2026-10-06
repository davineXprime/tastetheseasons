import { CheckoutButton } from "@/components/checkout-button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <a href="#top" className="font-serif text-lg font-semibold tracking-tight">
          Taste the Seasons
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#months" className="transition-colors hover:text-foreground">The Months</a>
          <a href="#inside" className="transition-colors hover:text-foreground">{"What's Inside"}</a>
          <a href="#download" className="transition-colors hover:text-foreground">Get It</a>
        </nav>
        <CheckoutButton
          label="Buy — $10"
          loadingLabel="Opening…"
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-85"
        />
      </div>
    </header>
  )
}
