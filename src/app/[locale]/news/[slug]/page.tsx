import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { newsItems } from "@/app-pages/news/data"
import { NewsDetailHero } from "@/app-pages/news/detail/hero"
import { NewsDetailImage } from "@/app-pages/news/detail/image"
import { NewsArticle } from "@/app-pages/news/detail/article"

export function generateStaticParams() { return newsItems.map(({ slug }) => ({ slug })) }

export const dynamicParams = false

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const news = newsItems.find((item) => item.slug === slug)
  return { title: news ? `${news.title} | Alean.az` : "News | Alean.az", description: news?.description }
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const news = newsItems.find((item) => item.slug === slug)
  if (!news) notFound()

  return <main className="min-h-screen bg-white"><NewsDetailHero news={news} /><NewsDetailImage /><NewsArticle /></main>
}
