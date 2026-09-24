import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"

import LoginPage from "@/app-pages/login"
import { createPageMetadata } from "@/lib/seo"
import type { Locale } from "@/i18n/routing"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "Seo" })
  return createPageMetadata({ locale: locale as Locale, path: "login", title: t("loginTitle"), description: t("loginDescription"), noIndex: true })
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <LoginPage locale={locale} />
}
