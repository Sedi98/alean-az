import { GetApi } from "../http"
import type { LanguageParams } from "../http"
import type {
  NewsCategoriesQuery,
  NewsQuery,
  PaginatedPublicNewsListList,
  PublicNewsCategory,
  PublicNewsDetail,
  PublicNewsPage,
} from "./types"

export async function getNews(
  params: NewsQuery = {},
): Promise<PaginatedPublicNewsListList> {
  return GetApi<PaginatedPublicNewsListList>("/api/v1/news/", { params })
}

export async function getNewsCategories(
  params: NewsCategoriesQuery = {},
): Promise<PublicNewsCategory[]> {
  return GetApi<PublicNewsCategory[]>("/api/v1/news-categories/", { params })
}

export async function getNewsPage(params: LanguageParams = {}): Promise<PublicNewsPage> {
  return GetApi<PublicNewsPage>("/api/v1/news-page/", { params })
}

export async function getNewsDetail(
  slug: string,
  params: LanguageParams = {},
): Promise<PublicNewsDetail> {
  return GetApi<PublicNewsDetail>("/api/v1/news/" + slug + "/", {
    params,
    notFoundOn404: true,
  })
}
