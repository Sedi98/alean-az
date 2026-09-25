import type { Metadata } from "next";

import { NewsDetailHero } from "@/app-pages/news/detail/hero";
import { NewsDetailImage } from "@/app-pages/news/detail/image";
import { NewsArticle } from "@/app-pages/news/detail/article";
import { getNewsDetail } from "@/features/services/news/api";
import { JsonLd } from "@/components/seo/json-ld"
import { createPageMetadata } from "@/lib/seo"
import type { Locale } from "@/i18n/routing"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const news = await getNewsDetail(slug);

  return createPageMetadata({ locale: locale as Locale, path: `news/${slug}`, title: `${news.title} | Alean.az`, description: news.summary ?? news.title, image: news.cover_image, type: "article" })
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const news = await getNewsDetail(slug);
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");
  const shareUrl = `${siteUrl}/${locale}/news/${news.slug}`;

  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        headline: news.title,
        description: news.summary,
        image: news.cover_image ? [news.cover_image] : undefined,
        datePublished: news.date,
        author: { "@type": "Person", name: news.author ?? "ALEAN Tour Operator" },
        mainEntityOfPage: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/${locale}/news/${news.slug}`,
      }} />
      <main className="min-h-screen bg-white">
        <NewsDetailHero news={news} />
        {news.cover_image ? <NewsDetailImage src={news.cover_image} /> : null}
        <NewsArticle news={news} shareUrl={shareUrl} />
      </main>
    </>
  );
}
