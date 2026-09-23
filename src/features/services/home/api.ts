import { GetApi } from "../http"
import type { HomeQuery, PublicHome } from "./types"

export async function getHome(params: HomeQuery = {}): Promise<PublicHome> {
  return GetApi<PublicHome>("/api/v1/home/", { params })
}
