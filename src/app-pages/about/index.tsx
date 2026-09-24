import { AboutHero } from "./hero"
import { getTranslations } from "next-intl/server"
import { AboutContent } from "./content"
import { IataSection } from "./iata"
import { MissionVisionSection } from "./mission"
import { WhyAleanSection } from "./why-alean"
import { TimelineSection } from "./timeline"
import { PartnersSection } from "@/app-pages/home/partners"
import type { PublicAbout } from "@/features/services/about/types"
import type { PublicPartner } from "@/features/services/partners/types"

export default async function AboutPage({ about, partners }: { about: PublicAbout; partners: PublicPartner[] }) {
  const t = await getTranslations("Common")
  return (
    <main className="min-h-screen bg-white">
      <AboutHero image="/about-hero.png" breadcrumb={`${t("home")} / ${t("about")}`} title={t("about")} />
      <AboutContent
        label={about.who.eyebrow}
        dotImage="/about/about-dot.svg"
        title={about.who.headline}
        columns={[about.who.intro_left, about.who.intro_right]}
        stats={about.stats}
        decorativeImageTop="/about/image-about-bg.png"
        decorativeImageBottom="/about/image-about-bg-bottom.png"
      />
      <IataSection
        logo={about.iata.logo ?? "/about/iata-section.png"}
        title={about.iata.title}
        description={about.iata.description}
        benefits={about.iata.features.map((feature) => feature.text)}
      />
      <MissionVisionSection
        label={about.mission.eyebrow}
        dotImage="/about/about-dot.svg"
        storyImage={about.story.image ?? "/about/mission-story.png"}
        storyTitle={about.story.title}
        storyText={about.story.text}
        missionTitle={about.mission.title}
        missionText={about.mission.text}
        visionTitle={about.vision.title}
        visionText={about.vision.text}
      />
      <WhyAleanSection
        label={about.why.eyebrow}
        dotImage="/about/why/dot.svg"
        title={about.why.title}
        description={about.why.subtitle}
        cards={about.why.values}
      />
      <TimelineSection
        title={about.timeline.title}
        subtitle={about.timeline.subtitle}
        dotImage="/about/timeline-dot.svg"
        entries={about.timeline.items.map((item, index) => ({
          year: String(item.year),
          title: item.title,
          description: item.description ?? "",
          side: index % 2 === 0 ? "left" : "right",
        }))}
      />
      <PartnersSection
        label={t("partnersLabel")}
        dotImage="/brand/partners-dot.svg"
        partners={partners}
      />
    </main>
  )
}
