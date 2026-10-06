import type { Metadata, Viewport } from "next"
import { Fraunces, Inter } from "next/font/google"
import "./globals.css"

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })

export const metadata: Metadata = {
  title: "Taste the Seasons 2027 — A Calendar of Seasonal Food",
  description:
    "A 12-month wall calendar celebrating the ingredients of each season. Blood oranges in January, heirloom tomatoes in July, pomegranates in December.",
}

export const viewport: Viewport = {
  themeColor: "#f6f1e7",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
