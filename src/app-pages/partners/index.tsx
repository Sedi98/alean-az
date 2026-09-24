import { PartnersHero } from "./hero"
import { PartnersList } from "./list"
import { getTranslations } from "next-intl/server"
import { Pagination } from "@/components/ui/pagination"
import type { PublicPartner, PublicPartnersPage } from "@/features/services/partners/types"

interface PartnersPageProps {
  page: PublicPartnersPage
  partners: PublicPartner[]
  currentPage: number
  totalPages: number
}

export default async function PartnersPage({ page, partners, currentPage, totalPages }: PartnersPageProps) {
  const t = await getTranslations("Common")
  return (
    <main className="min-h-screen bg-white">
      <PartnersHero
        breadcrumb={`${t("home")} / ${t("partners")}`}
        eyebrow={t("partnersLabel")}
        title={page.title ?? t("partners")}
        description={page.subtitle ?? t("partnersPageDescription")}
        metadata={t("trustLine")}
        actionText={t("servicesWithPossessive")}
        actionUrl="/services"
      />
      <PartnersList
        partners={partners.map((partner) => ({
          name: partner.name,
          logo: partner.logo,
          logoWidth: 206,
          logoHeight: 116,
          description: partner.description ?? "",
          benefits: partner.features.map((feature) => feature.text),
        }))}
      />
      <Pagination pathname="/partners" page={currentPage} totalPages={totalPages} searchParams={{}} />
    </main>
  )
}
