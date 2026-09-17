import { RegistrationHero } from "@/app-pages/registration/hero"
import { RegistrationInfoCards } from "@/app-pages/registration/info-cards"

import { LoginForm } from "./form"

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-white">
      <RegistrationHero
        breadcrumb="Ana səhifə / Giriş"
        title="Giriş"
        phone="+994 77 218 0770"
        email="info@alean-az.com"
        note="İzmir Plaza, Bakı · 7/24 əməliyyat dəstəyi"
      />
      <LoginForm />
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
