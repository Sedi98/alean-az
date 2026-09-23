import { NewsHero } from "../news/hero"
import { ContactFormSection } from "./form"
import { ContactInfoSection } from "./info"
import type { PublicContact } from "@/features/services/contact/types"

export default function ContactPage({
  contact,
}: {
  contact: PublicContact
}) {
  return (
    <main className="min-h-screen bg-white">
      <NewsHero
      // badge
        breadcrumb="Ana səhifə / Əlaqə"

        // title
        title={contact.page.title ?? "Əlaqə"}

        // subtitle
        description={contact.page.subtitle ?? "Səyahət planlarınız, əməkdaşlıq təklifləriniz və suallarınız üçün\nALEAN komandası ilə əlaqə saxlayın."}
        metadata={contact.page.badge ?? "IATA qeydiyyatlı agentlik · 2000+ tərəfdaş · 7/24 əməliyyat dəstəyi"}
      />

      {/* channels api array map  */}
      <ContactInfoSection channels={contact.channels} />


      {/* form title and subtitle goes here  */}
      {/* office araay data is going to ContactDetailsCard component  */}
      <ContactFormSection form={contact.form} office={contact.office} />
    </main>
  )
}
