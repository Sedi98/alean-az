"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

const navigation = [
  { label: "Ana səhifə", href: "/" },
  { label: "Haqqımızda", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Partnyorlar", href: "/partners" },
  { label: "Tədbirlər", href: "/events" },
  { label: "Xəbərlər", href: "/news" },
  { label: "Əlaqə", href: "/elaqe" },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
        <Link href="/" aria-label="Alean.az ana səhifə" className="flex shrink-0 items-end gap-[1.4px]">
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
            alt="Alean Turoperator"
            width={100}
            height={46}
            className="h-[45.7px] w-[100.5px] object-contain"
            priority
          />
        </Link>

        <nav aria-label="Əsas naviqasiya" className="hidden flex-1 items-center justify-center gap-2 xl:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-sm p-1 font-sans text-[16px] leading-normal text-[#e6e6e6] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-4 xl:flex">
          <button
            type="button"
            className="hidden p-1 font-semibold leading-6 text-[#e6e6e6] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:block"
            aria-label="Dil: Azərbaycan dili"
          >
            AZ
          </button>
          <Link
            href="/registration"
            className="inline-flex h-12 items-center justify-center rounded-full bg-[linear-gradient(101.6deg,#4848a8_0.9%,#7e7eff_95.6%)] px-4 py-1 font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Qeydiyyat
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex size-12 items-center justify-center rounded-full border border-white/20 bg-white/[0.08] text-white transition-colors hover:bg-white/[0.14] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white xl:hidden"
          aria-label={isMenuOpen ? "Menyunu bağla" : "Menyunu aç"}
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
        aria-label="Mobil naviqasiya"
        className={`fixed right-0 top-0 z-[60] flex h-dvh w-[min(86vw,360px)] flex-col bg-[#0a0a0d] px-6 pb-8 pt-28 shadow-[-12px_0_40px_rgba(0,0,0,0.25)] transition-transform duration-300 ease-out sm:px-10 xl:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          type="button"
          className="absolute right-6 top-6 inline-flex size-12 items-center justify-center rounded-full border border-white/20 bg-white/[0.08] text-white transition-colors hover:bg-white/[0.14] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-10"
          aria-label="Menyunu bağla"
          onClick={() => setIsMenuOpen(false)}
        >
          <X size={22} strokeWidth={1.8} />
        </button>
        <nav className="flex flex-col gap-2" aria-label="Mobil əsas naviqasiya">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="border-b border-white/[0.08] py-3 font-sans text-lg leading-normal text-[#e6e6e6] transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-5 border-t border-white/[0.08] pt-6">
          <button
            type="button"
            className="self-start p-1 font-sans text-base font-semibold leading-6 text-[#e6e6e6] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label="Dil: Azərbaycan dili"
          >
            AZ
          </button>
          <Link
            href="/registration"
            onClick={() => setIsMenuOpen(false)}
            className="inline-flex h-12 items-center justify-center rounded-full bg-[linear-gradient(101.6deg,#4848a8_0.9%,#7e7eff_95.6%)] px-4 py-1 font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Qeydiyyat
          </Link>
        </div>
      </aside>
    </header>
  )
}
