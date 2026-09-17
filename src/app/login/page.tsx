import type { Metadata } from "next"

import LoginPage from "@/app-pages/login"

export const metadata: Metadata = {
  title: "Giriş | Alean.az",
  description: "Alean.az agent kabinetinə giriş səhifəsi.",
}

export default function Page() {
  return <LoginPage />
}
