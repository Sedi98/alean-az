import { GetApi, PostApi } from "../http"
import type { LanguageParams } from "../http"
import type {
  EventCategoriesQuery,
  EventsQuery,
  PaginatedPublicEventListList,
  PublicCategory,
  PublicEventDetail,
  PublicEventList,
  RegistrationCreateRequest,
  RegistrationCreateResponse,
  RelatedEventsQuery,
} from "./types"

export async function getEventCategories(
  params: EventCategoriesQuery = {},
): Promise<PublicCategory[]> {
  return GetApi<PublicCategory[]>("/api/v1/event-categories/", { params })
}

export async function getEvents(
  params: EventsQuery = {},
): Promise<PaginatedPublicEventListList> {
  return GetApi<PaginatedPublicEventListList>("/api/v1/events/", { params })
}

export async function getEvent(slug: string, params: LanguageParams = {}): Promise<PublicEventDetail> {
  return GetApi<PublicEventDetail>("/api/v1/events/" + slug + "/", {
    params,
    notFoundOn404: true,
  })
}

export async function registerForEvent(
  slug: string,
  payload: RegistrationCreateRequest,
): Promise<RegistrationCreateResponse> {
  return PostApi<RegistrationCreateRequest, RegistrationCreateResponse>(
    "/api/v1/events/" + slug + "/register/",
    payload,
  )
}

export async function getRelatedEvents(
  slug: string,
  params: RelatedEventsQuery = {},
): Promise<PublicEventList[]> {
  return GetApi<PublicEventList[]>("/api/v1/events/" + slug + "/related/", { params })
}
