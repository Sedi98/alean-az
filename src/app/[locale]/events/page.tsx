import type { Metadata } from "next"

import EventsPage from "@/app-pages/events"
import { getEventCategories, getEvents } from "@/features/services/events/api"
import { getPartners } from "@/features/services/partners/api"

export const metadata: Metadata = {
  title: "Events | Alean.az",
  description: "Alean.az tədbir və MICE xidmətləri.",
}

export default async function Page({ searchParams }: {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ category?: string; search?: string; page?: string }>
}) {
  const query = await searchParams
  const pageNumber = query.page ? Number(query.page) : 1
  const currentPage = Number.isFinite(pageNumber) && pageNumber > 0 ? Math.floor(pageNumber) : 1
  const limit = 9
  const [categories, events, partners] = await Promise.all([
    getEventCategories(),
    getEvents({
      category: query.category,
      search: query.search,
      limit,
      offset: (currentPage - 1) * limit,
    }),
    getPartners({ limit: 4 }),
  ])

  return <EventsPage categories={categories} events={events.results} activeCategory={query.category} currentPage={currentPage} totalPages={Math.max(1, Math.ceil(events.count / limit))} searchParams={{ category: query.category, search: query.search }} partners={partners.results} />
}
