import { GetApi } from "../http"
import type { LanguageParams } from "../http"
import type {
  PaginatedPublicPartnerList,
  PublicPartnersPage,
  PartnersQuery,
} from "./types"

export async function getPartners(
  params: PartnersQuery = {},
): Promise<PaginatedPublicPartnerList> {
  return GetApi<PaginatedPublicPartnerList>("/api/v1/partners/", { params })
}

export async function getPartnersPage(
  params: LanguageParams = {},
): Promise<PublicPartnersPage> {
  return GetApi<PublicPartnersPage>("/api/v1/partners/page/", { params })
}
