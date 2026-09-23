import type { PublicEventDetail, PublicEventList } from "@/features/services/events/types"

import { EventDetailHero } from "./hero"
import { EventInfoSection } from "./info"
import { EventGallery } from "./gallery"
import { RelatedEvents } from "./related"
import { localize } from "@/i18n/content"

export default function EventDetailPage({ locale = "az", event, relatedEvents }: { locale?: string; event: PublicEventDetail; relatedEvents: PublicEventList[] }) {
  const title = localize(locale, "Tədbir haqqında")
  return <main className="min-h-screen bg-white"><EventDetailHero locale={locale} event={event} /><EventInfoSection title={title} event={event} /><EventGallery gallery={event.gallery} /><RelatedEvents events={relatedEvents} locale={locale} /></main>
}
