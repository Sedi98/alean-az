import { GetApi } from "../http"
import type { LanguageParams } from "../http"
import type { PublicAbout } from "./types"

export async function getAbout(params: LanguageParams = {}): Promise<PublicAbout> {
  return GetApi<PublicAbout>("/api/v1/about/", { params })
}
