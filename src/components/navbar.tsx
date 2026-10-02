"use client"

import Image from "next/image"
import { useLocale, useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import type { Locale } from "@/i18n/routing"
import { stripLocalePrefix } from "@/lib/routes"
import type { PublicSite } from "@/features/services/site-settings/types"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Check, ChevronDown, X } from "lucide-react"
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

function LocalePopover({
  currentLocale,
  localeOrder,
  label,
  onChange,
  align = "end",
  compact = false,
}: {
  currentLocale: Locale
  localeOrder: Locale[]
  label: string
  onChange: (locale: Locale) => void
  align?: "start" | "center" | "end"
  compact?: boolean
}) {
  const [open, setOpen] = useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        aria-label={label}
        aria-haspopup="listbox"
        className={compact
          ? "inline-flex h-8 items-center rounded-sm p-1 font-[family-name:var(--font-hero-description)] text-base font-normal leading-6 text-[#e6e6e6] outline-none transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          : "inline-flex h-10 items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 font-[family-name:var(--font-hero-description)] text-sm font-semibold tracking-[0.08em] text-[#e6e6e6] outline-none backdrop-blur-md transition-colors hover:border-white/30 hover:bg-white/[0.14] focus-visible:border-white/50 focus-visible:ring-2 focus-visible:ring-white/30"}
      >
        {currentLocale.toUpperCase()}
        {compact ? null : <ChevronDown className={`size-4 text-white/70 transition-transform ${open ? "rotate-180" : ""}`} strokeWidth={2} aria-hidden="true" />}
      </PopoverTrigger>
      <PopoverContent align={align} className="min-w-32">
        <div role="listbox" aria-label={label} className="flex flex-col gap-0.5">
          {localeOrder.map((item) => {
            const isActive = item === currentLocale

            return (
              <button
                key={item}
                type="button"
                role="option"
                aria-selected={isActive}
                onClick={() => {
                  setOpen(false)
                  onChange(item)
                }}
                className="flex h-10 items-center justify-between gap-5 rounded-xl px-3 text-left font-sans text-sm font-semibold tracking-[0.08em] text-white/75 transition-colors hover:bg-white/10 hover:text-white focus-visible:bg-white/10 focus-visible:outline-none"
              >
                {item.toUpperCase()}
                {isActive ? <Check className="size-4 text-[#9ca8ff]" strokeWidth={2.5} aria-hidden="true" /> : null}
              </button>
            )
          })}
        </div>
      </PopoverContent>
    </Popover>
  )
}

export function Navbar({ site }: { site: PublicSite }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const locale = useLocale()
  const t = useTranslations("Navbar")
  const localeOrder: Locale[] = ["en", "az", "ru"]
  const currentLocale = localeOrder.includes(locale as Locale) ? (locale as Locale) : "en"
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
    <header className="navbar-desktop-gradient fixed inset-x-0 top-0 z-50 w-full bg-[#0a0a0d] px-5 py-1.5 text-[#e6e6e6] sm:px-5 xl:px-20 xl:py-6">
      <div className="relative z-[70] mx-auto flex min-h-11 w-full max-w-[1282px] items-center gap-8 xl:min-h-12">
        <Link href="/" aria-label={t("homeAria")} className="flex shrink-0 items-end gap-[1.1px] xl:gap-[1.4px]">
          {site.logo ? (
            <Image src={site.logo} alt={siteName} width={148} height={49} className="h-[38.42px] w-auto max-w-[118px] object-contain xl:h-[48.5px] xl:max-w-[148px]" priority />
          ) : (
            <>
              <span className="relative block h-[38.42px] w-[37.32px] overflow-hidden xl:h-[48.5px] xl:w-[47.1px]">
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
                className="h-[36.22px] w-[79.58px] object-contain xl:h-auto xl:w-[100.5px]"
                priority
              />
            </>
          )}
        </Link>

        <div className="hidden flex-1 items-center xl:flex">
          <nav aria-label={t("mainNavigation")} className="ml-[74px] flex flex-1 items-center justify-center gap-5">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-sm p-1 font-[family-name:var(--font-hero-description)] text-base font-normal leading-6 text-[#e6e6e6] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {t(item.key)}
            </Link>
          ))}
          </nav>
          <div className="ml-3 shrink-0">
            <LocalePopover currentLocale={currentLocale} localeOrder={localeOrder} label={t("language")} onChange={switchLocale} compact />
          </div>
        </div>

        <div className="hidden shrink-0 items-center xl:flex">
          <a
            href="http://www.alean-az.com/register_agency"
            className="inline-flex h-12 items-center justify-center rounded-full px-4 py-1 font-[family-name:var(--font-hero-description)] text-base font-medium leading-6 text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            style={{ backgroundImage: "linear-gradient(101.576deg, #7e7eff 0.935%, #4848a8 95.604%)" }}
          >
            {t("registration")}
          </a>
        </div>

        <button
          type="button"
          className="ml-auto inline-flex h-11 w-11 items-center justify-end rounded text-white transition-colors hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white xl:hidden"
          aria-label={isMenuOpen ? t("closeMenu") : t("openMenu")}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <X size={22} strokeWidth={1.8} />
          ) : (
            <span aria-hidden="true" className="flex h-4 w-[22px] flex-col justify-between">
              <span className="h-[2px] w-full rounded-full bg-white" />
              <span className="h-[2px] w-full rounded-full bg-white" />
              <span className="h-[2px] w-full rounded-full bg-white" />
            </span>
          )}
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
        className={`fixed right-0 top-0 z-[60] flex h-dvh w-[min(86vw,360px)] flex-col bg-[#0a0a0d] px-6 pb-8 pt-20 shadow-[-12px_0_40px_rgba(0,0,0,0.25)] transition-transform duration-300 ease-out sm:px-10 xl:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
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
          <div className="self-start">
            <LocalePopover currentLocale={currentLocale} localeOrder={localeOrder} label={t("language")} onChange={switchLocale} align="start" />
          </div>
          <a
            href="http://www.alean-az.com/register_agency"
            onClick={() => setIsMenuOpen(false)}
            className="inline-flex h-12 w-fit items-center justify-center rounded-full px-4 py-1 font-[family-name:var(--font-hero-description)] text-base font-medium leading-6 text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            style={{ backgroundImage: "linear-gradient(101.576deg, #7e7eff 0.935%, #4848a8 95.604%)" }}
          >
            {t("registration")}
          </a>
        </div>
      </aside>
    </header>
  )
}
