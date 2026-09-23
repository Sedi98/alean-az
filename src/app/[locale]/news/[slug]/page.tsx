import type { Metadata } from "next";

import { NewsDetailHero } from "@/app-pages/news/detail/hero";
import { NewsDetailImage } from "@/app-pages/news/detail/image";
import { NewsArticle } from "@/app-pages/news/detail/article";
import { getNewsDetail } from "@/features/services/news/api";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const news = await getNewsDetail(slug);

  return {
    title: `${news.title} | Alean.az`,
    description: news.summary,
  };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const news = await getNewsDetail(slug);

  return (
    <main className="min-h-screen bg-white">
      <NewsDetailHero news={news} />
      <NewsDetailImage src={news.cover_image ?? undefined} />
      <NewsArticle news={news} />
    </main>
  );
}
