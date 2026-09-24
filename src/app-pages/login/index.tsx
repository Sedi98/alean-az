import { RegistrationHero } from "@/app-pages/registration/hero"
import { RegistrationInfoCards } from "@/app-pages/registration/info-cards"

import { LoginForm } from "./form"
import { getTranslations } from "next-intl/server"

export default async function LoginPage({ locale = "az" }: { locale?: string }) {
  const t = await getTranslations("Common")
  return (
    <main className="min-h-screen bg-white">
      <RegistrationHero
        breadcrumb={`${t("home")} / ${t("login")}`}
        title={t("login")}
        phone="+994 77 218 0770"
        email="info@alean-az.com"
        note={t("trustLine")}
      />
      <LoginForm />
      <RegistrationInfoCards
        cards={[
          { label: t("phone"), value: "+994 77 218 0770" },
          { label: t("email"), value: "info@alean-az.com" },
          { label: t("address"), value: "İzmir Plaza, Bakı" },
          { label: t("support"), value: "7/24" },
        ]}
      />
    </main>
  )
}
