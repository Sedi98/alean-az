import { NewsHero } from "../news/hero"
import { getTranslations } from "next-intl/server"
import { ContactDetailsCard } from "@/components/contact-details-card"
import { ContactFormSection } from "./form"
import { ContactInfoSection } from "./info"
import type { PublicContact } from "@/features/services/contact/types"
import type { ApiLanguage } from "@/features/services/http"

export default async function ContactPage({
  contact,
  locale,
}: {
  contact: PublicContact
  locale: ApiLanguage
}) {
  const t = await getTranslations("Common")
  return (
    <main className="min-h-screen bg-white">
      <NewsHero
      // badge
        breadcrumb={`${t("home")} / ${t("contact")}`}

        // title
        title={contact.page.title ?? t("contact")}

        // subtitle
        description={contact.page.subtitle ?? t("contactPageDescription")}
        metadata={contact.page.badge ?? t("trustLine")}
      />

      {/* channels api array map  */}
      <ContactInfoSection channels={contact.channels} />


      {/* form title and subtitle goes here  */}
      {/* office araay data is going to ContactDetailsCard component  */}
      <ContactFormSection locale={locale} form={contact.form} details={<ContactDetailsCard office={contact.office} />} />
    </main>
  )
}
