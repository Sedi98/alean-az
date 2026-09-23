import type { Metadata } from "next"
import { hasLocale, NextIntlClientProvider } from "next-intl"
import { setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"
import { Geist, Geist_Mono, Inter, Manrope, Montserrat } from "next/font/google"

import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { cn } from "@/lib/utils"
import { routing, type Locale } from "@/i18n/routing"

import "../globals.css"

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-sans" })
const manrope = Manrope({ subsets: ["latin"], variable: "--font-hero" })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Alean.az | Səyahət və turizm",
  description: "Alean.az ilə unudulmaz səyahətləri kəşf edin.",
}

export function generateStaticParams(): Array<{ locale: Locale }> {
  return routing.locales.map((locale) => ({ locale }))
}

export const dynamic = "force-static"
export const dynamicParams = false
export const revalidate = 120

type LocaleLayoutProps = Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  // Avoid reading the locale from request headers so pages remain statically renderable.
  setRequestLocale(locale)

  return (
    <html lang={locale} className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, montserrat.variable, manrope.variable, inter.variable, "font-sans")}>
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
