import { RegistrationHero } from "./hero"
import { RegistrationForm } from "./form"
import { RegistrationInfoCards } from "./info-cards"

export default function RegistrationPage() {
  return (
    <main className="min-h-screen bg-white">
      <RegistrationHero
        breadcrumb="Ana səhifə / Qeydiyyat"
        title="Qeydiyyat"
        phone="+994 77 218 0770"
        email="info@alean-az.com"
        note="İzmir Plaza, Bakı · 7/24 əməliyyat dəstəyi"
      />
      <RegistrationForm />
      <RegistrationInfoCards
        cards={[
          { label: "Telefon", value: "+994 77 218 0770" },
          { label: "E-mail", value: "info@alean-az.com" },
          { label: "Ünvan", value: "İzmir Plaza, Bakı" },
          { label: "Dəstək", value: "7/24 əməliyyat" },
        ]}
      />
    </main>
  )
}
