import Image from "next/image"
import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import type { Network, PublicSite } from "@/features/services/site-settings/types"

const pageLinks = [
  ["pageAbout", "/about"],
  ["pageServices", "/services"],
  ["pagePartners", "/partners"],
  ["pageEvents", "/events"],
  ["pageNews", "/news"],
  // ["İstiqamətlər", "/destinations"],
  // ["Otellər", "/hotels"],
  ["pageContact", "/contact"],
]

const serviceLinks = [
  ["serviceFlights", "/services#aviation"],
  ["serviceInsurance", "/services#insurance"],
  ["serviceCorporate", "/services#corporate"],
  ["serviceMedical", "/services#medical"],
]

export async function Footer({ site }: { site: PublicSite }) {
  const t = await getTranslations("Footer")
  const siteName = site.site_name ?? "Alean Turoperator"

  return (
    <footer aria-label={t("contact")} className="bg-[#180f2a] px-6 py-16 text-[#f0f0fd] sm:px-10 sm:py-20 lg:px-20 lg:py-[100px]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-20">
          <div className="flex max-w-[381px] flex-col gap-11">
            <Link href="/" aria-label={t("homeAria")} className="flex items-end gap-0.5 self-start">
              {site.footer_logo ? (
                <Image src={site.footer_logo} alt={siteName} width={214} height={70} className="h-[70px] w-auto max-w-[214px] object-contain" priority />
              ) : (
                <>
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
                    alt={siteName}
                    width={146}
                    height={66}
                    className="h-[66px] w-[146px] object-contain"
                    priority
                  />
                </>
              )}
            </Link>
            <p className="font-sans text-xl leading-[1.5] text-[#b0b0b0]">
              {site.tagline ?? t("fallbackTagline")}
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 sm:gap-6 lg:gap-[25px]">
            <FooterColumn title={t("pages")} links={pageLinks.map(([key, href]) => [t(key), href])} />
            <FooterColumn title={t("services")} links={serviceLinks.map(([key, href]) => [t(key), href])} />
            <div className="flex flex-col gap-6 sm:w-[188px]">
              <h2 className="font-sans text-xl font-semibold leading-[1.5]">{site.footer_contact_title ?? t("contact")}</h2>
              <div className="flex flex-col gap-4 font-sans text-lg leading-[1.5] text-[#f0f0fd]">
                {site.address ? <p>{site.address}</p> : null}
                {site.phone ? <a href={`tel:${site.phone}`} className="hover:text-white/70">{site.phone}</a> : null}
                {site.email ? <a href={`mailto:${site.email}`} className="hover:text-white/70">{site.email}</a> : null}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 border-t border-white/[0.08] pt-8 sm:flex-row sm:items-end sm:justify-between">
          <p className="font-sans text-base leading-6 text-[#b0b0b0]">{site.copyright || t("copyright")}</p>
          <div className="flex flex-col items-start gap-5 sm:items-center">
            <p className="font-inter text-[18px] font-medium text-[#80808c]">{site.footer_social_title ?? t("followUs")}</p>
            <div className="flex items-center gap-4">
              {site.social.map((social) => <SocialLink key={social.network} network={social.network} href={social.url} />)}
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

function SocialLink({ network, href }: { network: Network; href: string }) {
  const labels: Record<Network, string> = {
    facebook: "f",
    instagram: "instagram",
    linkedin: "in",
    youtube: "yt",
    telegram: "tg",
    tiktok: "tt",
    x: "𝕏",
    whatsapp: "wa",
  }

  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={network} className="flex size-[53px] items-center justify-center rounded-full border border-white/20 font-inter text-[22px] font-bold text-white/70 transition-colors hover:border-white/60 hover:text-white">
      {network === "instagram" ? <Image src="/brand/instagram.svg" alt="" width={53} height={53} className="size-full" /> : labels[network]}
    </a>
  )
}
