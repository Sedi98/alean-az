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
    <footer aria-label={t("contact")} className="bg-[#180f2a] px-4 py-16 text-[#f0f0fd] sm:px-10 sm:py-20 lg:px-20 lg:py-[100px]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-12">
        <div className="flex flex-col gap-16 sm:gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-20">
          <div className="flex max-w-[381px] flex-col gap-11">
            <Link href="/" aria-label={t("homeAria")} className="flex items-end gap-0.5 self-start">
              {site.footer_logo ? (
                <Image src={site.footer_logo} alt={siteName} width={214} height={70} className="h-[55.87px] w-auto max-w-[182px] object-contain sm:h-[70px] sm:max-w-[214px]" priority />
              ) : (
                <>
                  <span className="relative block h-[59.26px] w-[57.56px] overflow-hidden sm:h-[70px] sm:w-[68px]">
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
                    className="h-[55.87px] w-[122.74px] object-contain sm:h-[66px] sm:w-[146px]"
                    priority
                  />
                </>
              )}
            </Link>
            <p className="hidden font-sans text-xl leading-[1.5] text-[#b0b0b0] sm:block">
              {site.tagline ?? t("fallbackTagline")}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-[18px] gap-y-8 sm:grid-cols-3 sm:gap-6 lg:gap-[25px]">
            <FooterColumn title={t("pages")} links={pageLinks.map(([key, href]) => [t(key), href])} />
            <FooterColumn title={t("services")} links={serviceLinks.map(([key, href]) => [t(key), href])} />
            <div className="col-span-2 flex w-[188px] flex-col gap-6 sm:col-span-1 sm:w-[188px]">
              <h2 className="font-[family-name:var(--font-hero-description)] text-2xl font-semibold leading-[1.5] sm:font-sans sm:text-xl">{site.footer_contact_title ?? t("contact")}</h2>
              <div className="flex flex-col gap-4 font-[family-name:var(--font-hero-description)] text-[22px] leading-[1.5] text-[#f0f0fd] sm:font-sans sm:text-lg">
                {site.address ? <p>{site.address}</p> : null}
                {site.phone ? <a href={`tel:${site.phone}`} className="hover:text-white/70">{site.phone}</a> : null}
                {site.email ? <a href={`mailto:${site.email}`} className="hover:text-white/70">{site.email}</a> : null}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between sm:border-t sm:border-white/[0.08] sm:pt-8">
          <p className="order-3 font-[family-name:var(--font-hero-description)] text-base leading-6 text-[#b0b0b0] sm:order-1 sm:font-sans">{site.copyright || t("copyright")}</p>
          <div className="order-1 flex flex-col items-start gap-8 sm:order-2 sm:items-center sm:gap-5">
            <p className="font-[family-name:var(--font-hero-description)] text-[23px] font-medium leading-normal text-[#80808c] sm:font-inter sm:text-[18px]">{site.footer_social_title ?? t("followUs")}</p>
            <div className="flex items-center gap-8 sm:gap-4">
              {site.social.map((social) => <SocialLink key={social.network} network={social.network} href={social.url} />)}
            </div>
          </div>
          <p className="order-2 font-[family-name:var(--font-hero-description)] text-xl leading-[1.5] text-[#b0b0b0] sm:hidden">
            {site.tagline ?? t("fallbackTagline")}
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, links }: { title: string; links: string[][] }) {
  return (
    <div className="flex flex-col gap-[34px] sm:w-[188px] sm:gap-6">
      <h2 className="font-[family-name:var(--font-hero-description)] text-2xl font-semibold leading-[1.5] sm:font-sans sm:text-xl">{title}</h2>
      <nav className="flex flex-col gap-[22px] font-[family-name:var(--font-hero-description)] text-[22px] leading-[1.5] sm:gap-4 sm:font-sans sm:text-lg">
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
    <a href={href} target="_blank" rel="noreferrer" aria-label={network} className={`flex size-[69px] items-center justify-center rounded-full border-[1.7px] border-white/20 font-inter font-bold text-white/70 transition-colors hover:border-white/60 hover:text-white sm:size-[53px] sm:border sm:text-[22px] ${network === "linkedin" ? "text-[27px]" : "text-[31px]"}`}>
      {network === "instagram" ? <Image src="/brand/instagram.svg" alt="" width={69} height={69} className="size-full sm:size-[53px]" /> : labels[network]}
    </a>
  )
}
