import { NewsHero } from "../news/hero"
import { ContactFormSection } from "./form"
import { ContactInfoSection } from "./info"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <NewsHero
        breadcrumb="Ana səhifə / Əlaqə"
        title="Əlaqə"
        description={'Səyahət planlarınız, əməkdaşlıq təklifləriniz və suallarınız üçün\nALEAN komandası ilə əlaqə saxlayın.'}
        metadata="IATA qeydiyyatlı agentlik · 2000+ tərəfdaş · 7/24 əməliyyat dəstəyi"
      />
      <ContactInfoSection />
      <ContactFormSection />
    </main>
  )
}
