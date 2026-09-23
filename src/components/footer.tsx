import Image from "next/image"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"

const pageLinks = [
  ["Haqqımızda", "/about"],
  ["Xidmətlər", "/services"],
  ["Partnyorlar", "/partners"],
  ["Tədbirlər", "/events"],
  ["Xəbərlər", "/news"],
  // ["İstiqamətlər", "/destinations"],
  // ["Otellər", "/hotels"],
  ["Əlaqə", "/contact"],
]

const serviceLinks = [
  ["Aviabiletlər", "/services#air-tickets"],
  ["Sığorta", "/services#insurance"],
  ["Korporativ", "/services#corporate-travel"],
  ["Tibbi Turizm", "/services#medical-tourism"],
]

export function Footer() {
  const t = useTranslations("Footer")

  return (
    <footer className="bg-[#180f2a] px-6 py-16 text-[#f0f0fd] sm:px-10 sm:py-20 lg:px-20 lg:py-[100px]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-20">
          <div className="flex max-w-[381px] flex-col gap-11">
            <Link href="/" aria-label="Alean.az ana səhifə" className="flex items-end gap-0.5 self-start">
              <span className="relative block h-[70px] w-[68px] overflow-hidden">
                <Image
                  src="/brand/footer-mark.png"
                  alt=""
                  width={1440}
                  height={2048}
                  className="absolute left-0 top-[-40%] h-[178.6%] max-w-none w-[306.5%]"
                  priority
                />
              </span>
              <Image
                src="/brand/footer-wordmark.png"
                alt="Alean Turoperator"
                width={146}
                height={66}
                className="h-[66px] w-[146px] object-contain"
                priority
              />
            </Link>
            <p className="font-sans text-xl leading-[1.5] text-[#b0b0b0]">
              2006-cı ildən Azərbaycandan dünyaya açılan etibarlı səyahət tərəfdaşınız.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 sm:gap-6 lg:gap-[25px]">
            <FooterColumn title={t("pages")} links={pageLinks} />
            <FooterColumn title={t("services")} links={serviceLinks} />
            <div className="flex flex-col gap-6 sm:w-[188px]">
              <h2 className="font-sans text-xl font-semibold leading-[1.5]">{t("contact")}</h2>
              <div className="flex flex-col gap-4 font-sans text-lg leading-[1.5] text-[#f0f0fd]">
                <p>İzmir Plaza, Bakı</p>
                <a href="tel:+994772180770" className="hover:text-white/70">+994 77 218 0770</a>
                <a href="mailto:info@alean-az.com" className="hover:text-white/70">info@alean-az.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 border-t border-white/[0.08] pt-8 sm:flex-row sm:items-end sm:justify-between">
          <p className="font-sans text-base leading-6 text-[#b0b0b0]">{t("copyright")}</p>
          <div className="flex flex-col items-start gap-5 sm:items-center">
            <p className="font-inter text-[18px] font-medium text-[#80808c]">{t("followUs")}</p>
            <div className="flex items-center gap-4">
              <SocialLink label="f" href="#" />
              <Link href="#" aria-label="Instagram" className="flex size-[53px] items-center justify-center rounded-full border border-white/20 transition-colors hover:border-white/60">
                <Image src="/brand/instagram.svg" alt="" width={53} height={53} className="size-full" />
              </Link>
              <SocialLink label="in" href="#" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, links }: { title: string; links: string[][] }) {
  return (
    <div className="flex flex-col gap-6 sm:w-[188px]">
      <h2 className="font-sans text-xl font-semibold leading-[1.5]">{title}</h2>
      <nav className="flex flex-col gap-4 font-sans text-lg leading-[1.5]">
        {links.map(([label, href]) => <Link key={href} href={href} className="hover:text-white/70">{label}</Link>)}
      </nav>
    </div>
  )
}

function SocialLink({ label, href }: { label: string; href: string }) {
  return <Link href={href} aria-label={label === "f" ? "Facebook" : "LinkedIn"} className="flex size-[53px] items-center justify-center rounded-full border border-white/20 font-inter text-[22px] font-bold text-white/70 transition-colors hover:border-white/60 hover:text-white">{label}</Link>
}
