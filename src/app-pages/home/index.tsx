import { AboutSection } from "./about"
import { HeroSection } from "./hero"
import { MiceSection } from "./mice"
import { NewsSection } from "./news"
import { PartnersSection } from "./partners"
import { ServicesSection } from "./services"
import type { PublicHome } from "@/features/services/home/types"
import type { PublicPartner } from "@/features/services/partners/types"

export default function HomePage({ home, partners }: { home: PublicHome; partners: PublicPartner[] }) {
  const serviceFallbackIcon = "/brand/icon-circle.svg"

  return (
    <main className="min-h-screen bg-white">
      <HeroSection
        image={home.hero.image ?? "/images/hero.webp"}
        title={home.hero.title}
        description={home.hero.subtitle}
        buttonText={home.hero.cta?.label ?? ""}
        url={home.hero.cta?.url ?? "/services"}
      />
      <AboutSection
        label={home.about.eyebrow}
        dotImage="/brand/section-dot.svg"
        title={home.about.headline}
        stats={[
          ...home.about.stats,
          ...(home.about.iata.logo
            ? [{ image: home.about.iata.logo, imageAlt: "IATA", label: home.about.iata.caption }]
            : []),
        ]}
      />
      <ServicesSection
        label={home.services.eyebrow}
        dotImage="/brand/section-dot.svg"
        services={home.services.items.map((service) => ({
          title: service.title,
          description: service.description,
          icon: service.icon ?? serviceFallbackIcon,
          iconAlt: service.title,
          href: service.cta?.url,
        }))}
      />
      <MiceSection
        label={home.events.eyebrow}
        dotImage="/brand/mice-dot.svg"
        title={home.events.title}
        description={home.events.subtitle}
        actionText={home.events.link_label}
        actionUrl="/events"
        note={home.events.note}
        cards={home.events.categories.map((category) => ({
          title: category.name,
          description: category.short_description ?? "",
          href: "/events?category=" + encodeURIComponent(category.slug),
        }))}
      />
      <NewsSection
        label={home.news.eyebrow}
        dotImage="/brand/section-dot.svg"
        title={home.news.title}
        description={home.news.subtitle}
        actionText={home.news.link_label}
        actionUrl="/news"
        cards={home.news.items.map((item) => ({
          title: item.title,
          description: item.summary ?? "",
          image: item.cover_image ?? "/news/news-1.jpeg",
          imageAlt: item.title,
          href: "/news/" + item.slug,
        }))}
      />
      <PartnersSection
        label={home.partners.eyebrow}
        dotImage="/brand/partners-dot.svg"
        actionText={home.partners.link_label}
        actionUrl="/partners"
        partners={partners}
      />
    </main>
  )
}
