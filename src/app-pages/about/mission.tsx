import Image from "next/image"
import { SectionLabel } from "@/components/section-label"

export interface MissionVisionSectionProps {
  label: string
  dotImage: string
  storyImage: string
  storyTitle: string
  storyText: string
  missionTitle: string
  missionText: string
  visionTitle: string
  visionText: string
}

export function MissionVisionSection({
  label,
  storyTitle,
  storyText,
  missionTitle,
  missionText,
  visionTitle,
  visionText,
}: MissionVisionSectionProps) {
  return (
    <section aria-labelledby="about-mission-title" className="bg-white px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-[100px]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-12">
        <SectionLabel id="about-mission-title">{label}</SectionLabel>

        <div className="grid gap-6 xl:grid-cols-[minmax(0,580px)_minmax(0,1fr)] xl:gap-12">
          <article className="relative min-h-[900px] overflow-hidden rounded-[20px] bg-[#390660] text-white sm:min-h-[714px] xl:h-[714px] xl:min-h-0">
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[226px] overflow-hidden">
              <Image src="/about/mission-story-illustration.svg" alt="" width={580} height={226} className="absolute inset-x-0 bottom-0 h-[226px] w-full object-cover" />
            </div>
            <div className="relative z-10 flex flex-col gap-[18px] px-8 pb-[290px] pt-12 sm:px-[33px] sm:pt-[87px]">
              <h2 className="font-[family-name:var(--font-hero-description)] text-xl font-semibold leading-[1.5]">{storyTitle}</h2>
              <div className="space-y-0 font-[family-name:var(--font-hero-description)] text-base leading-[1.5] text-[#f0f0fd]">
                <div dangerouslySetInnerHTML={{ __html: storyText }} />
              </div>
            </div>
          </article>

          <div className="flex min-h-[714px] flex-col gap-[18px]">
            <InfoCard title={missionTitle} html={missionText} className="bg-[#f0f0fd] text-[#4848a8]" titleClassName="text-[#2b2b63]" />
            <InfoCard title={visionTitle} html={visionText} className="bg-[#6666ec] text-[#d0d0f9]" titleClassName="text-white" />
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoCard({ title, html, className, titleClassName }: { title: string; html: string; className: string; titleClassName: string }) {
  return (
    <article className={`flex flex-1 flex-col gap-[14px] overflow-hidden rounded-[20px] p-8 ${className}`}>
      <h2 className={`font-[family-name:var(--font-hero-description)] text-xl font-semibold leading-[1.5] ${titleClassName}`}>{title}</h2>
      <div className="space-y-0 font-[family-name:var(--font-hero-description)] text-base leading-[1.5]">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </article>
  )
}
