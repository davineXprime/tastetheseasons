import Image from "next/image"
import { ArrowDown, Download } from "lucide-react"

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-5 pt-14 pb-16 md:pt-20 md:pb-24">
      <div className="flex flex-col items-center text-center">
        <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-primary">The 2027 Calendar</p>
        <h1 className="max-w-4xl text-balance font-serif text-5xl leading-[1.02] tracking-tight md:text-7xl lg:text-8xl">
          Eat with the calendar, not against it.
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          Twelve months, twelve ingredients at their peak. A wall calendar that reminds you what to cook, what to buy,
          and what to savor all year long.
        </p>
        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="/taste-the-seasons-2027.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Download className="size-4" aria-hidden="true" />
            Download the free PDF
          </a>
          <a
            href="#months"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
          >
            Explore the months
            <ArrowDown className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="relative mt-14 overflow-hidden rounded-2xl border md:mt-20">
        <Image
          src="/images/hero-calendar.png"
          alt="The Taste the Seasons 2027 wall calendar hanging in a sunlit kitchen, open to January with blood oranges"
          width={1408}
          height={768}
          priority
          className="h-auto w-full"
        />
      </div>
    </section>
  )
}
