import type { ApiLanguage } from "../http"
import type { PublicNewsList } from "../news/types"
import type { PublicService } from "../services/types"

export interface HomeQuery {
  lang?: ApiLanguage
}

export interface HomeCta {
  label: string
  url: string
}

export interface HomeHero {
  title: string
  subtitle: string
  image: string | null
  cta: HomeCta | null
}

export interface HomeStat {
  value: string
  label: string
}

export interface HomeIata {
  logo: string | null
  caption: string
}

export interface HomeAbout {
  eyebrow: string
  headline: string
  stats: HomeStat[]
  iata: HomeIata
}

export interface HomeEventCategory {
  id: number
  slug: string
  name: string
  short_description?: string
}

export interface HomeEvents {
  eyebrow: string
  title: string
  subtitle: string
  note: string
  link_label: string
  categories: HomeEventCategory[]
}

export interface HomeNews {
  eyebrow: string
  title: string
  subtitle: string
  link_label: string
  items: PublicNewsList[]
}

export interface HomePartner {
  id: number
  name: string
  logo: string
}

export interface HomePartners {
  eyebrow: string
  link_label: string
  items: HomePartner[]
}

export interface PublicHome {
  hero: HomeHero
  about: HomeAbout
  services: {
    eyebrow: string
    items: PublicService[]
  }
  events: HomeEvents
  news: HomeNews
  partners: HomePartners
}
