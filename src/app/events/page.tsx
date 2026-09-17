import type { Metadata } from "next"

import EventsPage from "@/app-pages/events"

export const metadata: Metadata = {
  title: "Events | Alean.az",
  description: "Alean.az tədbir və MICE xidmətləri.",
}

export default function Page() {
  return <EventsPage />
}
