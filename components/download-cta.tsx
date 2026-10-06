import Image from "next/image"
import { CheckoutButton } from "@/components/checkout-button"

const PREVIEW_IMAGES = ["/images/months/05.png", "/images/months/07.png", "/images/months/10.png"]

export function DownloadCta() {
  return (
    <section id="download" className="px-5 pb-20 md:pb-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 overflow-hidden rounded-3xl bg-accent px-6 py-14 text-accent-foreground md:flex-row md:px-14 md:py-16">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-balance font-serif text-4xl leading-tight tracking-tight md:text-5xl">
            Hang a year of good eating on your wall.
          </h2>
          <p className="mt-5 max-w-md text-pretty leading-relaxed opacity-85 md:mx-0 mx-auto">
            The complete Taste the Seasons 2027 calendar — all twelve months — beautifully designed and ready to print at home.
          </p>
          <CheckoutButton />
        </div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {PREVIEW_IMAGES.map((src, i) => (
            <div
              key={src}
              className={`relative size-28 overflow-hidden rounded-xl border-4 border-accent shadow-lg md:size-36 ${
                i === 0 ? "-rotate-6" : i === 1 ? "-mx-6 z-10 -translate-y-3" : "rotate-6"
              }`}
            >
              <Image src={src} alt="" fill sizes="144px" className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
