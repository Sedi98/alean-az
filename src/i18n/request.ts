import { hasLocale } from "next-intl"
import { getRequestConfig } from "next-intl/server"

import { routing } from "./routing"

export default getRequestConfig(async ({ requestLocale }) => {
  const requestedLocale = await requestLocale
  // The [locale] layout validates the URL. During metadata and static
  // rendering, next-intl can invoke this config without a request locale.
  const locale = hasLocale(routing.locales, requestedLocale)
    ? requestedLocale
    : routing.defaultLocale

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  }
})
