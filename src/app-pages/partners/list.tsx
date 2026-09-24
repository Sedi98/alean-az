import { PartnerListItem, type PartnerListItemProps } from "@/components/partner-list-item"
import { getTranslations } from "next-intl/server"

export interface PartnersListProps {
  partners: PartnerListItemProps[]
}

export async function PartnersList({ partners }: PartnersListProps) {
  const t = await getTranslations("Common")
  return (
    <section data-node-id="242:2537" aria-labelledby="partners-list-title">
      <h2 id="partners-list-title" className="sr-only">{t("partners")}</h2>
      {partners.map((partner, index) => <PartnerListItem key={partner.name} {...partner} muted={index % 2 === 1} />)}
    </section>
  )
}
