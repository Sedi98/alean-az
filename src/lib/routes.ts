const localeSegments = new Set(["az", "en", "ru"])

export function stripLocalePrefix(pathname: string): string {
  let path = pathname.startsWith("/") ? pathname : `/${pathname}`

  while (true) {
    const match = path.match(/^\/(az|en|ru)(?=\/|$)/)
    if (!match || !localeSegments.has(match[1])) break
    path = path.slice(match[0].length) || "/"
  }

  return path.startsWith("/") ? path : `/${path}`
}

export function normalizeSlug(slug: string): string {
  return stripLocalePrefix(slug).replace(/^\/+/, "")
}

