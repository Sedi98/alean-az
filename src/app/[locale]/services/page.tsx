import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"

import ServicesPage from "@/app-pages/services"
import { getServicesOverview } from "@/features/services/services/api"
import { createPageMetadata } from "@/lib/seo"
import type { Locale } from "@/i18n/routing"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "Seo" })
  return createPageMetadata({ locale: locale as Locale, path: "services", title: t("servicesTitle"), description: t("servicesDescription") })
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const services = await getServicesOverview({ lang: locale as Locale })

  return <ServicesPage services={services} />
}
