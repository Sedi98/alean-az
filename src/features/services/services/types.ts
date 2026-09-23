import type { ApiLanguage } from "../http"

export interface ServicesQuery {
  lang?: ApiLanguage
}

export interface Card {
  title: string
  description: string
  image?: string | null
  number: string
}

export interface Image {
  image: string
  alt: string
}

export interface Tag {
  text: string
}

export interface Cta {
  label: string
  url: string
}

export interface PublicService {
  key: string
  eyebrow: string
  title: string
  description: string
  chip_label: string
  icon: string | null
  cta: Cta | null
  cards: Card[]
  images: Image[]
  tags: Tag[]
}

export interface ServicesHero {
  eyebrow: string
  title: string
  subtitle: string
}

export interface Chip {
  key: string
  label: string
}

export interface ServicesOverview {
  page: ServicesHero | null
  chips: Chip[]
  sections: PublicService[]
}

export interface ServicesBlock {
  eyebrow: string
  items: PublicService[]
}
