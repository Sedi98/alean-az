import type { Metadata } from "next"

import LoginPage from "@/app-pages/login"

export const metadata: Metadata = {
  title: "Giriş | Alean.az",
  description: "Alean.az agent kabinetinə giriş səhifəsi.",
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <LoginPage locale={locale} />
}
