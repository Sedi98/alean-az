import { AdditionalServicesSection } from "./additional"
import { getTranslations } from "next-intl/server"
import { CorporateSection } from "./corporate"
import { FlightsSection } from "./flights"
import { HotelsSection } from "./hotels"
import { InsuranceSection } from "./insurance"
import { MedicalTourismSection } from "./medical-tourism"
import { ServicesFilters } from "./filters"
import { ServicesHero } from "./hero"
import { ToursSection } from "./tours"
import { TransfersSection } from "./transfers"
import type { PublicService, ServicesOverview } from "@/features/services/services/types"

function getSection(sections: PublicService[], key: string) {
  return sections.find((section) => section.key === key)
}

function getCategory(section: PublicService) {
  return section.eyebrow || section.chip_label
}

export default async function ServicesPage({ services }: { services: ServicesOverview }) {
  const t = await getTranslations("Common")
  const aviation = getSection(services.sections, "aviation")
  const tours = getSection(services.sections, "tours")
  const hotels = getSection(services.sections, "hotels")
  const insurance = getSection(services.sections, "insurance")
  const transfers = getSection(services.sections, "transfers")
  const corporate = getSection(services.sections, "corporate")
  const medical = getSection(services.sections, "medical")
  const extras = getSection(services.sections, "extras")

  return (
    <main className="min-h-screen bg-white">
      <ServicesHero
        breadcrumb={`${t("home")} / ${t("services")}`}
        eyebrow={services.page?.eyebrow ?? t("servicesPageEyebrow")}
        title={services.page?.title ?? t("servicesPageTitle")}
        description={services.page?.subtitle ?? ""}
        metadata={t("trustLine")}
      />
      <ServicesFilters filters={services.chips} />

      {aviation ? (
        <FlightsSection
          category={getCategory(aviation)}
          icon={aviation.icon}
          title={aviation.title}
          description={[aviation.description]}
          features={aviation.cards}
        />
      ) : null}

      {tours ? (
        <ToursSection
          category={getCategory(tours)}
          icon={tours.icon}
          title={tours.title}
          description={tours.description}
          categories={tours.tags.map((tag) => tag.text)}
        />
      ) : null}

      {hotels ? (
        <HotelsSection
          category={getCategory(hotels)}
          icon={hotels.icon}
          title={hotels.title}
          description={hotels.description}
          features={hotels.cards}
        />
      ) : null}

      {insurance || transfers ? (
        <div className="bg-gradient-to-b from-[#332661] via-[#1f1a38] via-1/2 to-[#14141f]">
          {insurance ? (
            <InsuranceSection
              category={getCategory(insurance)}
              icon={insurance.icon}
              title={insurance.title}
              description={[insurance.description]}
              features={insurance.tags.map((tag) => ({ title: tag.text }))}
            />
          ) : null}

          {transfers ? (
            <TransfersSection
              category={getCategory(transfers)}
              title={transfers.title}
              description={transfers.description}
              ctaText={transfers.cta?.label}
              ctaUrl={transfers.cta?.url}
              icon={transfers.icon ?? "/services/transfers-icon.svg"}
              cards={transfers.cards.map((card) => ({
                title: card.title,
                description: card.description,
              }))}
            />
          ) : null}
        </div>
      ) : null}

      {medical ? (
        <MedicalTourismSection
          category={getCategory(medical)}
          icon={medical.icon}
          title={medical.title}
          description={medical.description}
          features={medical.cards}
        />
      ) : null}

      {corporate || extras ? (
        <div className="border border-[rgba(255,255,255,0.05)] bg-gradient-to-b from-[#14141f] via-[#1f1a38] via-1/2 to-[#332661] px-6 py-16 sm:px-10 lg:px-20 lg:py-[100px]">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-[60px]">
            {corporate ? (
              <CorporateSection
                category={getCategory(corporate)}
                icon={corporate.icon}
                title={corporate.title}
                description={corporate.description}
                features={corporate.cards}
              />
            ) : null}

            {extras ? (
              <AdditionalServicesSection
                category={getCategory(extras)}
                title={extras.title}
                services={extras.tags.map((tag) => ({ title: tag.text }))}
              />
            ) : null}
          </div>
        </div>
      ) : null}
    </main>
  )
}
