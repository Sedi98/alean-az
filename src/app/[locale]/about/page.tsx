import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"

import AboutPage from "@/app-pages/about"
import { getAbout } from "@/features/services/about/api"
import { getPartners } from "@/features/services/partners/api"
import { createPageMetadata } from "@/lib/seo"
import type { Locale } from "@/i18n/routing"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "Seo" })
  return createPageMetadata({ locale: locale as Locale, path: "about", title: t("aboutTitle"), description: t("aboutDescription") })
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const [about, partners] = await Promise.all([
    getAbout({ lang: locale as Locale }),
    getPartners({ lang: locale as Locale, limit: 4 }),
  ])
  return <AboutPage about={about} partners={partners.results} />
}
