import type { Metadata } from "next"

import ServicesPage from "@/app-pages/services"

export const metadata: Metadata = {
  title: "Services | Alean.az",
  description: "Alean.az services and tourism solutions.",
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <ServicesPage locale={locale} />
}
