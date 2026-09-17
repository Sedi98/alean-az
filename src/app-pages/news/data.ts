import type { NewsCardProps } from "@/components/news-card"

export interface NewsItem extends NewsCardProps {
  slug: string
  category?: string
  detailTitle?: string
  detailBreadcrumb?: string
}

export const newsItems: NewsItem[] = [
  { slug: "tourism-news-1", title: "Xəbər 1", description: "Xarici tərəfdaşlar üçün Azərbaycan üzrə tam paket: qəbul, marşrut, bələdçi və logistika.", image: "/news/news-1.jpeg", imageAlt: "Xəbər 1", category: "Turizm", detailTitle: "2026-cı İl Üçün Əsas Trendlər", detailBreadcrumb: "Azərbaycanda Turizmin Gələcəyi:" },
  { slug: "tourism-news-2", title: "Xəbər 2", description: "Xarici tərəfdaşlar üçün Azərbaycan üzrə tam paket: qəbul, marşrut, bələdçi və logistika.", image: "/news/news-2.jpeg", imageAlt: "Xəbər 2" },
  { slug: "tourism-news-3", title: "Xəbər 3", description: "Xarici tərəfdaşlar üçün Azərbaycan üzrə tam paket: qəbul, marşrut, bələdçi və logistika.", image: "/news/news-3.jpeg", imageAlt: "Xəbər 3" },
]
