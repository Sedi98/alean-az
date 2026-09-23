import { defineRouting } from "next-intl/routing"

export const routing = defineRouting({
  // Keep this list in sync with the message files in /messages.
  locales: ["az", "en"],
  defaultLocale: "az",
  // Every language gets a stable, indexable URL and a separate SSG output.
  localePrefix: "always",
})

export type Locale = (typeof routing.locales)[number]
