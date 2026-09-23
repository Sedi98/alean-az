import type { ApiLanguage } from "../http"

export interface EventCategoriesQuery {
  lang?: ApiLanguage
}

export interface EventsQuery {
  category?: string
  lang?: ApiLanguage
  limit?: number
  offset?: number
  search?: string
}

export interface RelatedEventsQuery {
  lang?: ApiLanguage
  limit?: number
}

export interface PublicCategoryBrief {
  slug: string
  name: string
  display_name: string
  short_name: string
}

export interface PublicCategory extends PublicCategoryBrief {
  id: number
  short_description?: string
  description?: string
}

export interface PublicGallery {
  id: number
  image: string
  alt?: string
  order?: number
}

export interface PublicEventList {
  id: number
  slug: string
  title: string
  cover_image?: string | null
  category: PublicCategoryBrief
  date: string
  end_date?: string | null
  start_time: string
  end_time?: string | null
  venue: string
  city: string
  price?: string | null
  currency?: string
  is_free: boolean
}

export interface PublicEventDetail extends PublicEventList {
  description?: string
  organizer?: string
  expected_participants?: number | null
  event_languages: string[]
  seats_left: number | null
  can_register: boolean
  gallery: PublicGallery[]
}

export interface PaginatedPublicEventListList {
  count: number
  next?: string | null
  previous?: string | null
  results: PublicEventList[]
}

export interface RegistrationCreateRequest {
  first_name: string
  last_name: string
  email: string
  phone: string
  company?: string
  position?: string
  participants_count?: number
  country?: string
  message?: string
}

export interface RegistrationCreateResponse {
  id: number
  status: string
}
