import type { Metadata } from "next"

import RegistrationPage from "@/app-pages/registration"

export const metadata: Metadata = {
  title: "Qeydiyyat | Alean.az",
  description: "Alean.az qeydiyyat səhifəsi.",
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <RegistrationPage locale={locale} />
}
