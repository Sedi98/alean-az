import { EventsGrid } from "./grid"
import { EventsHero } from "./hero"
import { getTranslations } from "next-intl/server"
import { PartnersSection } from "@/app-pages/home/partners"
import { Pagination } from "@/components/ui/pagination"
import type { PublicCategory, PublicEventList } from "@/features/services/events/types"
import type { PublicPartner } from "@/features/services/partners/types"

export interface EventsPageProps {
  categories: PublicCategory[]
  events: PublicEventList[]
  activeCategory?: string
  currentPage: number
  totalPages: number
  searchParams: Record<string, string | undefined>
  partners: PublicPartner[]
}

export default async function EventsPage({ categories, events, currentPage, totalPages, searchParams, partners }: EventsPageProps) {
  const t = await getTranslations("Common")
  return (
    <main className="min-h-screen bg-white">
      <EventsHero
        breadcrumb={`${t("home")} / ${t("events")}`}
        title={t("events")}
        cards={categories.map((category) => ({
          title: category.short_name,
          description: category.short_description ?? "",
          href: "/events?category=" + encodeURIComponent(category.slug),
        }))}
      />
      <EventsGrid
        events={events.map((event) => ({
          slug: event.slug,
          image: event.cover_image ?? "/events/tourism-forum.jpg",
          category: event.category.short_name,
          date: event.date,
          title: event.title,
          location: `${event.venue}, ${event.city}`,
        }))}
      />
      <Pagination pathname="/events" page={currentPage} totalPages={totalPages} searchParams={searchParams} />
      <PartnersSection
        label={t("partnerNetworks")}
        dotImage="/brand/partners-dot.svg"
        actionText={t("viewAll")}
        actionUrl="/partners"
        partners={partners}
      />
    </main>
  )
}
