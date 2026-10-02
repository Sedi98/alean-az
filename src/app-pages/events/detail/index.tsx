import type { PublicEventDetail, PublicEventList } from "@/features/services/events/types"

import { EventDetailHero } from "./hero"
import { EventInfoSection } from "./info"
import { EventGallery } from "./gallery"
import { RelatedEvents } from "./related"
import { getTranslations } from "next-intl/server"

export default async function EventDetailPage({ locale = "en", event, relatedEvents }: { locale?: string; event: PublicEventDetail; relatedEvents: PublicEventList[] }) {
  const t = await getTranslations("Common")
  const title = t("eventAbout")
  return <main className="min-h-screen bg-white"><EventDetailHero locale={locale} event={event} /><EventInfoSection title={title} event={event} /><EventGallery gallery={event.gallery} /><RelatedEvents events={relatedEvents} locale={locale} /></main>
}
