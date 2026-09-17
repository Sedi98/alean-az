import type { EventGridCardProps } from "@/components/event-grid-card"

import { RegistrationForm } from "./form"
import { RegistrationHero } from "./hero"

export default function EventRegistrationPage({ event }: { event: EventGridCardProps }) {
  return <main className="min-h-screen bg-white"><RegistrationHero event={event} /><RegistrationForm event={event} /></main>
}
