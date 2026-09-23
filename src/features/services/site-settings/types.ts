import type { ApiLanguage } from "../http"

export interface SiteSettingsQuery {
  lang?: ApiLanguage
}

export type Network =
  | "facebook"
  | "instagram"
  | "linkedin"
  | "youtube"
  | "telegram"
  | "tiktok"
  | "x"
  | "whatsapp"

export interface Social {
  network: Network
  url: string
}

export interface PublicSite {
  site_name?: string
  logo: string
  footer_logo: string
  tagline?: string
  footer_contact_title?: string
  address?: string
  phone?: string
  email?: string
  footer_social_title?: string
  social: Social[]
  copyright: string
}
