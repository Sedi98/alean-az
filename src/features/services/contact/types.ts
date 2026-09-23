import type { ApiLanguage } from "../http"

export interface ContactQuery {
  lang?: ApiLanguage
}

export interface ContactMessageCreateRequest {
  first_name: string
  last_name?: string
  email: string
  phone?: string
  company?: string
  subject?: string
  message: string
  website?: string
}

export interface ContactMessageCreateResponse {
  status: string
}

export type ContactChannelType = "phone" | "email" | "address" | "whatsapp" | "other"

export interface Channel {
  type: ContactChannelType
  label: string
  value: string
  note?: string
  href: string
}

export interface Hero {
  title?: string
  subtitle?: string
  badge?: string
}

export interface FormInfo {
  title?: string
  subtitle?: string
}

export interface Office {
  image: string | null
  name?: string
  phone: string
  email: string
  address: string
  working_hours?: string
  support?: string
  map_url?: string
}

export interface PublicContact {
  page: Hero
  channels: Channel[]
  form: FormInfo
  office: Office
}
