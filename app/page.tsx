import { DownloadCta } from "@/components/download-cta"
import { Features } from "@/components/features"
import { Hero } from "@/components/hero"
import { MonthExplorer } from "@/components/month-explorer"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <MonthExplorer />
        <Features />
        <DownloadCta />
      </main>
      <SiteFooter />
    </>
  )
}
