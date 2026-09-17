import { PartnerListItem, type PartnerListItemProps } from "@/components/partner-list-item"

export interface PartnersListProps {
  partners: PartnerListItemProps[]
}

export function PartnersList({ partners }: PartnersListProps) {
  return (
    <section data-node-id="242:2537" aria-label="Partnyorlar siyahısı">
      {partners.map((partner, index) => <PartnerListItem key={partner.name} {...partner} muted={index % 2 === 1} />)}
    </section>
  )
}
