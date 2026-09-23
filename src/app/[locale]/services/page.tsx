import type { Metadata } from "next"

import ServicesPage from "@/app-pages/services"

export const metadata: Metadata = {
  title: "Services | Alean.az",
  description: "Alean.az services and tourism solutions.",
}

export default function Page() {
  return <ServicesPage />
}
