import type { Metadata } from "next"

import EventDetailView from "@/app-pages/events/detail"
import { getEvent, getRelatedEvents } from "@/features/services/events/api"
import { JsonLd } from "@/components/seo/json-ld"
import { createPageMetadata } from "@/lib/seo"
import { normalizeSlug } from "@/lib/routes"
import type { Locale } from "@/i18n/routing"

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params
  const canonicalSlug = normalizeSlug(slug)
  const event = await getEvent(canonicalSlug, { lang: locale as Locale })
  return createPageMetadata({ locale: locale as Locale, path: `events/${canonicalSlug}`, title: `${event.title} | Alean.az`, description: event.description ?? event.title, image: event.cover_image })
}

export default async function EventDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params
  const canonicalSlug = normalizeSlug(slug)
  const [event, relatedEvents] = await Promise.all([
    getEvent(canonicalSlug, { lang: locale as Locale }),
    getRelatedEvents(canonicalSlug, { lang: locale as Locale }),
  ])

  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Event",
        name: event.title,
        description: event.description,
        startDate: `${event.date}T${event.start_time}`,
        endDate: event.end_date && event.end_time ? `${event.end_date}T${event.end_time}` : undefined,
        image: event.cover_image ? [event.cover_image] : undefined,
        location: { "@type": "Place", name: event.venue, address: { "@type": "PostalAddress", addressLocality: event.city } },
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/${locale}/events/${normalizeSlug(event.slug)}`,
      }} />
      <EventDetailView locale={locale} event={event} relatedEvents={relatedEvents} />
    </>
  )
}
