import type { Metadata } from "next"

import ContactPage from "@/app-pages/contact"
import { getContact } from "@/features/services/contact/api"

export const metadata: Metadata = {
  title: "Əlaqə | Alean.az",
  description: "ALEAN ilə əlaqə saxlayın.",
}

export default async function Page() {
  const contact = await getContact()

  return <ContactPage contact={contact} />
}
