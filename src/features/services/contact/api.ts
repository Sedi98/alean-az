import { GetApi, PostApi } from "../http"
import type { LanguageParams } from "../http"
import type {
  ContactMessageCreateRequest,
  ContactMessageCreateResponse,
  PublicContact,
} from "./types"

export async function getContact(params: LanguageParams = {}): Promise<PublicContact> {
  return GetApi<PublicContact>("/api/v1/contact/", { params })
}

export async function createContactMessage(
  payload: ContactMessageCreateRequest,
  params: LanguageParams = {},
): Promise<ContactMessageCreateResponse> {
  return PostApi<ContactMessageCreateRequest, ContactMessageCreateResponse>(
    "/api/v1/contact/",
    payload,
    { params },
  )
}
