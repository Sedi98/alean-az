import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"

import ContactPage from "@/app-pages/contact"
import { getContact } from "@/features/services/contact/api"
import { createPageMetadata } from "@/lib/seo"
import type { Locale } from "@/i18n/routing"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "Seo" })
  return createPageMetadata({ locale: locale as Locale, path: "contact", title: t("contactTitle"), description: t("contactDescription") })
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  await params
  const contact = await getContact()

  return <ContactPage contact={contact} />
}
