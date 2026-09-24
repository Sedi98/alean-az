// Bu səhifə hazırda istifadə olunmur.

import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"

import RegistrationPage from "@/app-pages/registration"
import { createPageMetadata } from "@/lib/seo"
import type { Locale } from "@/i18n/routing"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "Seo" })
  return createPageMetadata({ locale: locale as Locale, path: "registration", title: t("registrationTitle"), description: t("registrationDescription"), noIndex: true })
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <RegistrationPage locale={locale} />
}
