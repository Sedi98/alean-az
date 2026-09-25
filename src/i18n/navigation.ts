import { createNavigation } from "next-intl/navigation"
import { createElement, type ComponentProps } from "react"

import { routing } from "./routing"
import { stripLocalePrefix } from "@/lib/routes"

const navigation = createNavigation(routing)
type LinkProps = ComponentProps<typeof navigation.Link>

function normalizeHref(href: LinkProps["href"]): LinkProps["href"] {
  if (typeof href === "string") return stripLocalePrefix(href)

  if (href && typeof href === "object" && "pathname" in href && typeof href.pathname === "string") {
    return { ...href, pathname: stripLocalePrefix(href.pathname) }
  }

  return href
}

export function Link({ href, ...props }: LinkProps) {
  return createElement(navigation.Link, { ...props, href: normalizeHref(href) })
}

export const { redirect, usePathname, useRouter, getPathname } = navigation
