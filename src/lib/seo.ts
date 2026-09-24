import type { Metadata } from "next"

import type { Locale } from "@/i18n/routing"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"

const localeToOgLocale: Record<Locale, string> = {
  az: "az_AZ",
  en: "en_US",
  ru: "ru_RU",
}

function absoluteUrl(path: string): URL {
  return new URL(path, siteUrl.endsWith("/") ? siteUrl : `${siteUrl}/`)
}

function stripHtml(value?: string | null): string | undefined {
  if (!value) return undefined

  return value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim().slice(0, 160)
}

export interface PageMetadataOptions {
  locale: Locale
  path?: string
  title: string
  description: string
  image?: string | null
  type?: "website" | "article"
  noIndex?: boolean
}

export function createPageMetadata({
  locale,
  path = "",
  title,
  description,
  image,
  type = "website",
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const pathname = path ? `/${path.replace(/^\//, "")}` : ""
  const canonicalPath = `/${locale}${pathname}`
  const canonical = absoluteUrl(canonicalPath)
  const imageUrl = image ? absoluteUrl(image) : undefined
  const languages = Object.fromEntries(
    (["az", "en", "ru"] as Locale[]).map((alternateLocale) => [
      alternateLocale,
      absoluteUrl(`/${alternateLocale}${pathname}`),
    ]),
  )

  return {
    metadataBase: absoluteUrl("/"),
    title,
    description: stripHtml(description),
    alternates: {
      canonical,
      languages: { ...languages, "x-default": absoluteUrl(`/az${pathname}`) },
    },
    openGraph: {
      type,
      url: canonical,
      siteName: "Alean.az",
      title,
      description: stripHtml(description),
      locale: localeToOgLocale[locale],
      alternateLocale: Object.entries(localeToOgLocale)
        .filter(([alternateLocale]) => alternateLocale !== locale)
        .map(([, ogLocale]) => ogLocale),
      ...(imageUrl ? { images: [{ url: imageUrl }] } : {}),
    },
    twitter: {
      card: imageUrl ? "summary_large_image" : "summary",
      title,
      description: stripHtml(description),
      ...(imageUrl ? { images: [imageUrl] } : {}),
    },
    robots: noIndex ? { index: false, follow: true } : { index: true, follow: true },
  }
}

export function toJsonLdString(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c")
}
