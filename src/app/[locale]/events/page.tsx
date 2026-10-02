import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"

import EventsPage from "@/app-pages/events"
import { getEventCategories, getEvents } from "@/features/services/events/api"
import { getPartners } from "@/features/services/partners/api"
import { createPageMetadata } from "@/lib/seo"
import type { Locale } from "@/i18n/routing"

export async function generateMetadata({ params, searchParams }: {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ category?: string; search?: string; page?: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const query = await searchParams
  const t = await getTranslations({ locale, namespace: "Seo" })
  return createPageMetadata({
    locale: locale as Locale,
    path: "events",
    title: t("eventsTitle"),
    description: t("eventsDescription"),
    noIndex: Boolean(query.search || query.category || query.page),
  })
}

export default async function Page({ params, searchParams }: {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ category?: string; search?: string; page?: string }>
}) {
  const { locale } = await params
  const query = await searchParams
  const pageNumber = query.page ? Number(query.page) : 1
  const currentPage = Number.isFinite(pageNumber) && pageNumber > 0 ? Math.floor(pageNumber) : 1
  const limit = 9
  const [categories, events, partners] = await Promise.all([
    getEventCategories({ lang: locale as Locale }),
    getEvents({
      lang: locale as Locale,
      category: query.category,
      search: query.search,
      limit,
      offset: (currentPage - 1) * limit,
    }),
    getPartners({ lang: locale as Locale, limit: 4 }),
  ])

  return <EventsPage categories={categories} events={events.results} activeCategory={query.category} currentPage={currentPage} totalPages={Math.max(1, Math.ceil(events.count / limit))} searchParams={{ category: query.category, search: query.search }} partners={partners.results} />
}
