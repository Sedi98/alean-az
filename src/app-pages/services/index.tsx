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
import type { ServiceImage } from "./image-gallery"
import type { PublicService, ServicesOverview } from "@/features/services/services/types"

const fallbackImages = {
  aviation: ["/services/flight-ticket.jpg", "/services/flight-detail-1.jpg", "/services/flight-detail-2.jpg"],
  hotels: ["/services/hotels.jpg", "/services/hotels-detail-1.jpg", "/services/hotels-detail-2.jpg"],
  tours: ["/services/tours.jpg"],
  medical: ["/services/medical-tourism.jpg"],
  transfers: [
    "/services/transfers-vip.jpeg",
    "/services/transfers-minivans.jpeg",
    "/services/transfers-buses.jpeg",
    "/services/transfers-excursions.jpeg",
  ],
} as const

function getSection(sections: PublicService[], key: string) {
  return sections.find((section) => section.key === key)
}

function getCategory(section: PublicService) {
  return section.eyebrow || section.chip_label
}

function getImage(section: PublicService, index: number, fallback: string) {
  return section.images[index]?.image ?? fallback
}

function getImages(section: PublicService, fallbacks: readonly string[]): ServiceImage[] {
  if (section.images.length > 0) return section.images

  return fallbacks.map((image) => ({ image, alt: "" }))
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
          images={getImages(aviation, fallbackImages.aviation)}
        />
      ) : null}

      {tours ? (
        <ToursSection
          category={getCategory(tours)}
          icon={tours.icon}
          title={tours.title}
          description={tours.description}
          images={getImages(tours, fallbackImages.tours)}
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
          images={getImages(hotels, fallbackImages.hotels)}
        />
      ) : null}

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
          cards={transfers.cards.map((card, index) => ({
            image: card.image ?? getImage(transfers, index, fallbackImages.transfers[index] ?? fallbackImages.transfers[0]),
            alt: transfers.images[index]?.alt ?? card.title,
            title: card.title,
            description: card.description,
          }))}
        />
      ) : null}

      {corporate ? (
        <CorporateSection
          category={getCategory(corporate)}
          icon={corporate.icon}
          title={corporate.title}
          description={corporate.description}
          features={corporate.cards}
        />
      ) : null}

      {medical ? (
        <MedicalTourismSection
          category={getCategory(medical)}
          icon={medical.icon}
          title={medical.title}
          description={medical.description}
          images={getImages(medical, fallbackImages.medical)}
          features={medical.cards}
        />
      ) : null}

      {extras ? (
        <AdditionalServicesSection
          category={getCategory(extras)}
          title={extras.title}
          services={extras.tags.map((tag) => ({ title: tag.text }))}
        />
      ) : null}
    </main>
  )
}
