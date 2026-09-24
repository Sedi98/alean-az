import Image from "next/image"

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
  dotImage,
  storyImage,
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
        <div className="flex items-center gap-2.5">
          <Image src={dotImage} alt="" width={8} height={8} />
          <h2 id="about-mission-title" className="font-sans text-lg font-medium leading-[1.5] text-[#666673]">{label}</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,580px)_minmax(0,1fr)]">
          <article className="relative min-h-[558px] overflow-hidden rounded-[20px] bg-[#1a1f2e] text-white">
            <Image src={storyImage} alt="" fill sizes="(max-width: 1024px) 100vw, 580px" className="object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,20,0.1),rgba(10,10,20,0.45)_50%,rgba(10,10,20,0.85))]" />
            <div className="absolute inset-x-8 bottom-8 flex flex-col gap-6">
              <h2 className="font-sans text-xl font-semibold leading-[1.5]">{storyTitle}</h2>
              <div className="space-y-0 font-sans text-sm leading-[1.25] text-[#d1d1de]">
                <div dangerouslySetInnerHTML={{ __html: storyText }} />
              </div>
            </div>
          </article>

          <div className="flex min-h-[558px] flex-col gap-6">
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
    <article className={`flex flex-1 flex-col gap-3 overflow-hidden rounded-[20px] p-8 ${className}`}>
      <h2 className={`font-sans text-xl font-semibold leading-[1.5] ${titleClassName}`}>{title}</h2>
      <div className="space-y-0 font-sans text-sm leading-[1.25]">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </article>
  )
}
