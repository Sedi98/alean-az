import type { MetadataRoute } from "next"

import { getEvents } from "@/features/services/events/api"
import { getNews } from "@/features/services/news/api"

const locales = ["az", "en", "ru"] as const
const staticPaths = ["", "about", "services", "events", "news", "partners", "contact"]

function siteUrl(path: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  return `${baseUrl.replace(/\/$/, "")}/${path.replace(/^\//, "")}`
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    staticPaths.map((path) => ({
      url: siteUrl(`${locale}${path ? `/${path}` : ""}`),
      changeFrequency: path === "" || path === "news" || path === "events" ? "daily" : "monthly",
      priority: path === "" ? 1 : 0.7,
    })),
  )

  const [events, news] = await Promise.allSettled([
    getEvents({ limit: 1000 }),
    getNews({ limit: 1000 }),
  ])

  for (const locale of locales) {
    if (events.status === "fulfilled") {
      entries.push(...events.value.results.map((event) => ({
        url: siteUrl(`${locale}/events/${event.slug}`),
        changeFrequency: "weekly" as const,
        priority: 0.6,
      })))
    }

    if (news.status === "fulfilled") {
      entries.push(...news.value.results.map((article) => ({
        url: siteUrl(`${locale}/news/${article.slug}`),
        changeFrequency: "weekly" as const,
        priority: 0.6,
        ...(article.date ? { lastModified: article.date } : {}),
      })))
    }
  }

  return entries
}
