import type { PublicEventDetail } from "@/features/services/events/types"

import { RegistrationForm } from "./form"
import { RegistrationHero } from "./hero"

export default function EventRegistrationPage({ locale = "az", event }: { locale?: string; event: PublicEventDetail }) {
  void locale
  return <main className="min-h-screen bg-white"><RegistrationHero event={event} /><RegistrationForm event={event} /></main>
}
