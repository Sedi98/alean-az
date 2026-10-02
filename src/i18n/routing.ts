import { defineRouting } from "next-intl/routing"

export const routing = defineRouting({
  // Keep this list in sync with the message files in /messages.
  locales: ["en", "az", "ru"],
  defaultLocale: "en",
  // The default locale must not be overridden by the browser language.
  localeDetection: false,
  // Every language gets a stable, indexable URL and a separate SSG output.
  localePrefix: "always",
})

export type Locale = (typeof routing.locales)[number]
