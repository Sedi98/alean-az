import type { Metadata } from "next"

import ServicesPage from "@/app-pages/services"
import { getServicesOverview } from "@/features/services/services/api"

export const metadata: Metadata = {
  title: "Services | Alean.az",
  description: "Alean.az services and tourism solutions.",
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  await params
  const services = await getServicesOverview()

  return <ServicesPage services={services} />
}
