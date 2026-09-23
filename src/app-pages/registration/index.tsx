import { RegistrationHero } from "./hero"
import { RegistrationForm } from "./form"
import { RegistrationInfoCards } from "./info-cards"
import { localize } from "@/i18n/content"

export default function RegistrationPage({ locale = "az" }: { locale?: string }) {
  const t = <T,>(value: T) => localize(locale, value)
  return (
    <main className="min-h-screen bg-white">
      <RegistrationHero
        breadcrumb={t("Ana səhifə / Qeydiyyat")}
        title={t("Qeydiyyat")}
        phone="+994 77 218 0770"
        email="info@alean-az.com"
        note={t("İzmir Plaza, Bakı · 7/24 əməliyyat dəstəyi")}
      />
      <RegistrationForm />
      <RegistrationInfoCards
        cards={[
          { label: t("Telefon"), value: "+994 77 218 0770" },
          { label: t("E-mail"), value: "info@alean-az.com" },
          { label: t("Ünvan"), value: t("İzmir Plaza, Bakı") },
          { label: t("Dəstək"), value: t("7/24 əməliyyat") },
        ]}
      />
    </main>
  )
}
