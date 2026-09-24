import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"

import HomePage from "@/app-pages/home";
import { getHome } from "@/features/services/home/api";
import { getPartners } from "@/features/services/partners/api";
import { createPageMetadata } from "@/lib/seo"
import type { Locale } from "@/i18n/routing"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "Seo" })
  return createPageMetadata({ locale: locale as Locale, title: t("siteTitle"), description: t("siteDescription") })
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  await params
  const [home, partners] = await Promise.all([
    getHome(),
    getPartners({ limit: 4 }),
  ])

  return <HomePage home={home} partners={partners.results} />;
}
