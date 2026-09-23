import { GetApi } from "../http"
import type { LanguageParams } from "../http"
import type { PublicSite } from "./types"

export async function getSiteSettings(params: LanguageParams = {}): Promise<PublicSite> {
  return GetApi<PublicSite>("/api/v1/site/", { params })
}
