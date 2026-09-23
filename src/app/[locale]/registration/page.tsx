import type { Metadata } from "next"

import RegistrationPage from "@/app-pages/registration"

export const metadata: Metadata = {
  title: "Qeydiyyat | Alean.az",
  description: "Alean.az qeydiyyat səhifəsi.",
}

export default function Page() {
  return <RegistrationPage />
}
