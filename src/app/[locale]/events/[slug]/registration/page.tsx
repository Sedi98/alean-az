import type { Metadata } from "next"
import { notFound } from "next/navigation"

import EventRegistrationPage from "@/app-pages/events/registration"
import { events } from "@/app-pages/events/data"

export function generateStaticParams() { return events.map(({ slug }) => ({ slug })) }

export const dynamicParams = false

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const event = events.find((item) => item.slug === slug)
  return { title: event ? `Registration | ${event.title}` : "Event Registration | Alean.az" }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const event = events.find((item) => item.slug === slug)
  if (!event) notFound()
  return <EventRegistrationPage event={event} />
}
