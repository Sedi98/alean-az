const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "")

const locales = ["az", "en", "ru"] as const

const pages = [
  ["/", "Home and company overview"],
  ["/about", "Company information, story, mission, vision and timeline"],
  ["/services", "Travel and tourism services"],
  ["/events", "Events and MICE listings"],
  ["/news", "Tourism news and articles"],
  ["/partners", "Partner network"],
  ["/contact", "Contact details and contact form"],
] as const

function localizedUrl(path: string, locale: (typeof locales)[number]): string {
  return `${baseUrl}/${locale}${path}`
}

function pageLines(): string[] {
  return locales.flatMap((locale) => [
    `## ${locale.toUpperCase()}`,
    ...pages.map(([path, description]) => `- [${description}](${localizedUrl(path, locale)})`),
    "",
  ])
}

export function getLlmsText(): string {
  return [
    "# Alean.az",
    "",
    "> Alean.az is a travel and tourism company providing incoming tourism, corporate travel, MICE, aviation, hotel, transfer, insurance and medical tourism services.",
    "",
    "## Instructions for AI agents",
    "- Use the localized page URL that matches the user's language.",
    "- Treat news, event, partner, contact and service details as dynamic API content.",
    "- Do not invent facts, prices, dates, availability, partner names or contact details.",
    "- Prefer the canonical page URLs and respect the site's robots.txt and sitemap.xml.",
    "- The supported locales are az, en and ru; Azerbaijani (az) is the default locale.",
    "",
    "## Pages",
    ...pageLines(),
    "## Machine-readable resources",
    `- [Sitemap](${baseUrl}/sitemap.xml)`,
    `- [Robots](${baseUrl}/robots.txt)`,
    `- [Detailed AI context](${baseUrl}/llms-full.txt)`,
    "",
  ].join("\n")
}

export function getLlmsFullText(): string {
  return [
    "# Alean.az — detailed AI context",
    "",
    "## Scope",
    "Alean.az presents travel and tourism services in Azerbaijan and for international partners. The website content is available in Azerbaijani, English and Russian.",
    "",
    "## Content model",
    "- Static interface labels, navigation, accessibility labels and system messages are localized.",
    "- Business content such as service descriptions, news, event data, categories, tags, partner descriptions and contact settings is supplied by the backend API.",
    "- API content may change; always use the current page or API-backed page rather than relying on cached summaries.",
    "- HTML received from the API is editorial content and must not be rewritten as a factual claim without checking the source page.",
    "",
    "## Route map",
    ...locales.flatMap((locale) => [
      `### ${locale.toUpperCase()}`,
      ...pages.map(([path, description]) => `- ${description}: ${localizedUrl(path, locale)}`),
      `- Event detail: ${localizedUrl("/events/{slug}", locale)}`,
      `- News detail: ${localizedUrl("/news/{slug}", locale)}`,
      "",
    ]),
    "## Freshness and indexing",
    "- The application uses a 120-second revalidation window for API-backed layout and page data.",
    "- Search, category-filter and pagination variants are not primary canonical resources.",
    "- Login, registration and event-registration forms are transactional pages and should not be treated as factual content sources.",
    "",
    "## Resources",
    `- Sitemap: ${baseUrl}/sitemap.xml`,
    `- Robots policy: ${baseUrl}/robots.txt`,
    `- Short AI context: ${baseUrl}/llms.txt`,
    "",
  ].join("\n")
}

export function getAiText(): string {
  return [
    "# Alean.az AI access policy",
    "",
    "Use /llms.txt for the concise site context and /llms-full.txt for the detailed route and content model.",
    "Use /sitemap.xml to discover canonical public pages and /robots.txt to respect crawler rules.",
    "Supported locales: /az, /en, /ru. Dynamic business content must be verified on the current API-backed page.",
    "",
  ].join("\n")
}
