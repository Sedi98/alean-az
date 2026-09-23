import type { ApiLanguage } from "../http"

export interface PartnersQuery {
  lang?: ApiLanguage
  limit?: number
  offset?: number
}

export interface PartnerFeature {
  text: string
}

export interface PublicPartner {
  id: number
  name: string
  logo: string
  description?: string
  features: PartnerFeature[]
}

export interface PaginatedPublicPartnerList {
  count: number
  next?: string | null
  previous?: string | null
  results: PublicPartner[]
}

export interface PublicPartnersPage {
  title?: string
  subtitle?: string
}
