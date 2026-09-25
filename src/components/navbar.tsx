"use client"

import Image from "next/image"
import { useLocale, useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import type { Locale } from "@/i18n/routing"
import { stripLocalePrefix } from "@/lib/routes"
import type { PublicSite } from "@/features/services/site-settings/types"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

const navigation = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "services", href: "/services" },
  { key: "partners", href: "/partners" },
  { key: "events", href: "/events" },
  { key: "news", href: "/news" },
  { key: "contact", href: "/contact" },
]

export function Navbar({ site }: { site: PublicSite }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const locale = useLocale()
  const t = useTranslations("Navbar")
  const localeOrder: Locale[] = ["az", "en", "ru"]
  const currentLocale = localeOrder.includes(locale as Locale) ? (locale as Locale) : "az"
  const siteName = site.site_name ?? "Alean Turoperator"

  function switchLocale(nextLocale: Locale) {
    if (nextLocale === locale) return
    const path = stripLocalePrefix(window.location.pathname)
    const search = window.location.search
    const hash = window.location.hash
    const localizedPath = path === "/" ? `/${nextLocale}` : `/${nextLocale}${path}`

    window.location.assign(`${localizedPath}${search}${hash}`)
  }

  useEffect(() => {
    if (!isMenuOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false)
    }

    document.addEventListener("keydown", closeOnEscape)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", closeOnEscape)
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full bg-[linear-gradient(180.7deg,#000_7.3%,rgba(0,0,0,0)_93.4%)] px-6 py-6 text-[#e6e6e6] sm:px-10 lg:px-20">
      <div className="relative z-[70] mx-auto flex min-h-12 max-w-[1282px] items-center justify-between gap-8">
        <Link href="/" aria-label={t("homeAria")} className="flex shrink-0 items-end gap-[1.4px]">
          {site.logo ? (
            <Image src={site.logo} alt={siteName} width={148} height={49} className="h-[48.5px] w-auto max-w-[148px] object-contain" priority />
          ) : (
            <>
              <span className="relative block h-[48.5px] w-[47.1px] overflow-hidden">
                <Image
                  src="/brand/alean-mark.png"
                  alt=""
                  width={1440}
                  height={2048}
                  className="absolute left-0 top-[-40%] h-[178.6%] max-w-none w-[306.5%]"
                  priority
                />
              </span>
              <Image
                src="/brand/alean-wordmark.png"
                alt={siteName}
                width={100}
                height={46}
                className="h-[45.7px] w-[100.5px] object-contain"
                priority
              />
            </>
          )}
        </Link>

        <nav aria-label={t("mainNavigation")} className="hidden flex-1 items-center justify-center gap-2 xl:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-sm p-1 font-sans text-[16px] leading-normal text-[#e6e6e6] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-4 xl:flex">
          <select
            value={currentLocale}
            aria-label={t("language")}
            onChange={(event) => switchLocale(event.target.value as Locale)}
            className="hidden cursor-pointer appearance-none border-0 bg-transparent p-1 font-semibold leading-6 text-[#e6e6e6] outline-none hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:block"
          >
            {localeOrder.map((item) => (
              <option key={item} value={item} className="bg-[#0a0a0d] text-white">
                {item.toUpperCase()}
              </option>
            ))}
          </select>
        </div>

        <button
          type="button"
          className="inline-flex size-12 items-center justify-center rounded-full border border-white/20 bg-white/[0.08] text-white transition-colors hover:bg-white/[0.14] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white xl:hidden"
          aria-label={isMenuOpen ? t("closeMenu") : t("openMenu")}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={22} strokeWidth={1.8} /> : <Menu size={22} strokeWidth={1.8} />}
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 xl:hidden ${isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
        aria-hidden="true"
        onClick={() => setIsMenuOpen(false)}
      />

      <aside
        id="mobile-navigation"
        aria-label={t("mobileNavigation")}
        className={`fixed right-0 top-0 z-[60] flex h-dvh w-[min(86vw,360px)] flex-col bg-[#0a0a0d] px-6 pb-8 pt-28 shadow-[-12px_0_40px_rgba(0,0,0,0.25)] transition-transform duration-300 ease-out sm:px-10 xl:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          type="button"
          className="absolute right-6 top-6 inline-flex size-12 items-center justify-center rounded-full border border-white/20 bg-white/[0.08] text-white transition-colors hover:bg-white/[0.14] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-10"
          aria-label={t("closeMenu")}
          onClick={() => setIsMenuOpen(false)}
        >
          <X size={22} strokeWidth={1.8} />
        </button>
        <nav className="flex flex-col gap-2" aria-label={t("mainNavigation")}>
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="border-b border-white/[0.08] py-3 font-sans text-lg leading-normal text-[#e6e6e6] transition-colors hover:text-white"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-5 border-t border-white/[0.08] pt-6">
          <label className="self-start">
            <span className="sr-only">{t("language")}</span>
            <select
              value={currentLocale}
              aria-label={t("language")}
              onChange={(event) => switchLocale(event.target.value as Locale)}
              className="cursor-pointer appearance-none border-0 bg-transparent p-1 font-sans text-base font-semibold leading-6 text-[#e6e6e6] outline-none transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {localeOrder.map((item) => (
                <option key={item} value={item} className="bg-[#0a0a0d] text-white">
                  {item.toUpperCase()}
                </option>
              ))}
            </select>
          </label>
        </div>
      </aside>
    </header>
  )
}
