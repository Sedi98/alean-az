import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { events } from "@/app-pages/events/data"
import EventDetailView from "@/app-pages/events/detail"

export function generateStaticParams() {
  return events.map(({ slug }) => ({ slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const event = events.find((item) => item.slug === slug)
  return { title: event ? `${event.title} | Alean.az` : "Event | Alean.az" }
}

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const event = events.find((item) => item.slug === slug)
  if (!event) notFound()

  return <EventDetailView event={event} relatedEvents={events.slice(0, 3)} />
}
