import type { Metadata } from "next"
import { hasLocale, NextIntlClientProvider } from "next-intl"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"
import { Geist, Geist_Mono, Inter, Montserrat, Poppins, Space_Grotesk } from "next/font/google"

import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { JsonLd } from "@/components/seo/json-ld"
import { getSiteSettings } from "@/features/services/site-settings/api"
import { cn } from "@/lib/utils"
import { createPageMetadata } from "@/lib/seo"
import { routing, type Locale } from "@/i18n/routing"

import "../globals.css"

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-sans" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-hero-title" })
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-hero-description" })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "Seo" })

  const metadata = createPageMetadata({
    locale: locale as Locale,
    title: t("siteTitle"),
    description: t("siteDescription"),
  })

  return {
    ...metadata,
    icons: {
      icon: [
        { url: "/favicon.ico", type: "image/x-icon" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: "/apple-touch-icon.png",
    },
    manifest: "/manifest.webmanifest",
  }
}

export function generateStaticParams(): Array<{ locale: Locale }> {
  return routing.locales.map((locale) => ({ locale }))
}

export const dynamic = "force-static"
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

  // Configure next-intl for translations and static locale-aware rendering.
  setRequestLocale(locale)
  const site = await getSiteSettings({ lang: locale as Locale })

  return (
    <html lang={locale} data-scroll-behavior="smooth" className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, montserrat.variable, spaceGrotesk.variable, poppins.variable, inter.variable, "font-sans")}>
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider>
          <JsonLd data={{
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            name: site.site_name ?? "Alean.az",
            url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/${locale}`,
            logo: site.logo ?? undefined,
            telephone: site.phone ?? undefined,
            email: site.email ?? undefined,
            address: site.address ? { "@type": "PostalAddress", streetAddress: site.address } : undefined,
            sameAs: site.social.map((social) => social.url),
          }} />
          <Navbar site={site} />
          {children}
          <Footer site={site} />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
