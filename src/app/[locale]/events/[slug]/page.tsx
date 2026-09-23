import type { Metadata } from "next"

import EventDetailView from "@/app-pages/events/detail"
import { getEvent, getRelatedEvents } from "@/features/services/events/api"

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const event = await getEvent(slug)
  return { title: `${event.title} | Alean.az`, description: event.description }
}

export default async function EventDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params
  const [event, relatedEvents] = await Promise.all([getEvent(slug), getRelatedEvents(slug)])

  return <EventDetailView locale={locale} event={event} relatedEvents={relatedEvents} />
}
