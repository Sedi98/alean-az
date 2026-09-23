import type { Metadata } from "next"

import EventRegistrationPage from "@/app-pages/events/registration"
import { getEvent } from "@/features/services/events/api"

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const event = await getEvent(slug)
  return { title: `Registration | ${event.title}`, description: event.description }
}

export default async function Page({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params
  const event = await getEvent(slug)
  return <EventRegistrationPage locale={locale} event={event} />
}
