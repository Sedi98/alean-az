import type { Metadata } from "next"

import ContactPage from "@/app-pages/contact"

export const metadata: Metadata = {
  title: "Əlaqə | Alean.az",
  description: "ALEAN ilə əlaqə saxlayın.",
}

export default function Page() {
  return <ContactPage />
}
