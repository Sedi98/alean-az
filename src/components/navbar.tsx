import Image from "next/image"
import Link from "next/link"

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
  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full bg-[linear-gradient(180.7deg,#000_7.3%,rgba(0,0,0,0)_93.4%)] px-6 py-6 text-[#e6e6e6] sm:px-10 lg:px-20">
      <div className="mx-auto flex min-h-12 max-w-[1282px] items-center justify-between gap-8">
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

        <div className="flex shrink-0 items-center gap-4">
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
      </div>
    </header>
  )
}
