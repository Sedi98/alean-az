import type { ApiLanguage } from "../http"

export interface NewsQuery {
  category?: string
  lang?: ApiLanguage
  limit?: number
  offset?: number
  search?: string
  tag?: string
}

export interface NewsCategoriesQuery {
  lang?: ApiLanguage
}

export interface PublicNewsCategory {
  slug: string
  name: string
}

export interface PublicNewsTag {
  slug: string
  name: string
}

export interface PublicNewsList {
  id: number
  slug: string
  title: string
  summary?: string
  cover_image?: string | null
  category: PublicNewsCategory
  date?: string
}

export interface PublicNewsDetail extends PublicNewsList {
  content?: string
  author?: string
  tags: PublicNewsTag[]
}

export interface PublicNewsPage {
  title?: string
  subtitle?: string
}

export interface PaginatedPublicNewsListList {
  count: number
  next?: string | null
  previous?: string | null
  results: PublicNewsList[]
}
