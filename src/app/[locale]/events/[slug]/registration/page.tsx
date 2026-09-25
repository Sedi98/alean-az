import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"

import EventRegistrationPage from "@/app-pages/events/registration"
import { getEvent } from "@/features/services/events/api"
import { createPageMetadata } from "@/lib/seo"
import { normalizeSlug } from "@/lib/routes"
import type { Locale } from "@/i18n/routing"

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params
  const canonicalSlug = normalizeSlug(slug)
  const event = await getEvent(canonicalSlug, { lang: locale as Locale })
  const t = await getTranslations({ locale, namespace: "Seo" })
  return createPageMetadata({ locale: locale as Locale, path: `events/${canonicalSlug}/registration`, title: `${t("eventRegistrationTitle")} | ${event.title}`, description: event.description ?? event.title, noIndex: true })
}

export default async function Page({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params
  const event = await getEvent(normalizeSlug(slug), { lang: locale as Locale })
  return <EventRegistrationPage locale={locale} event={event} />
}
