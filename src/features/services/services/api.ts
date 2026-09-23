import { GetApi } from "../http"
import type { LanguageParams } from "../http"
import type { PublicService, ServicesOverview } from "./types"

export async function getServicesOverview(
  params: LanguageParams = {},
): Promise<ServicesOverview> {
  return GetApi<ServicesOverview>("/api/v1/services/", { params })
}

export async function getService(
  key: string,
  params: LanguageParams = {},
): Promise<PublicService> {
  return GetApi<PublicService>("/api/v1/services/" + key + "/", {
    params,
    notFoundOn404: true,
  })
}
