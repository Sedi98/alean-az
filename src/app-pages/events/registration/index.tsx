import type { PublicEventDetail } from "@/features/services/events/types"
import type { ApiLanguage } from "@/features/services/http"

import { RegistrationForm } from "./form"
import { RegistrationHero } from "./hero"

export default function EventRegistrationPage({ locale = "en", event }: { locale?: string; event: PublicEventDetail }) {
  return <main className="min-h-screen bg-white"><RegistrationHero event={event} /><RegistrationForm locale={locale as ApiLanguage} event={event} /></main>
}
