import type { EventGridCardProps } from "@/components/event-grid-card"

import { EventDetailHero } from "./hero"
import { EventInfoSection } from "./info"
import { EventGallery } from "./gallery"
import { RelatedEvents } from "./related"

export default function EventDetailPage({ event, relatedEvents }: { event: EventGridCardProps; relatedEvents: EventGridCardProps[] }) {
  return <main className="min-h-screen bg-white"><EventDetailHero event={event} /><EventInfoSection title="Tədbir haqqında" /><EventGallery /><RelatedEvents events={relatedEvents} /></main>
}
