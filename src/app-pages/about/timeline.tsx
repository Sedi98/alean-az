import Image from "next/image"

export interface TimelineEntry {
  year: string
  title: string
  description: string
  side: "left" | "right"
}

export interface TimelineSectionProps {
  title: string
  subtitle: string
  dotImage: string
  entries: TimelineEntry[]
}

export function TimelineSection({ title, subtitle, dotImage, entries }: TimelineSectionProps) {
  return (
    <section aria-labelledby="about-timeline-title" className="bg-[rgba(240,240,253,0.47)] px-6 pb-16 pt-14 sm:px-10 sm:pb-20 sm:pt-20 lg:px-20 lg:pb-[100px] lg:pt-20">
      <div className="mx-auto flex max-w-[900px] flex-col items-center gap-12">
        <div className="flex w-full flex-col items-center gap-4 text-center">
          <h2 id="about-timeline-title" className="font-sans text-3xl font-bold leading-[1.25] text-[#2b2b63] sm:text-4xl">{title}</h2>
          <p className="font-sans text-base leading-6 text-[#545454]">{subtitle}</p>
        </div>

        <ol className="relative flex w-full flex-col gap-6 pl-8 lg:block lg:h-[1477px] lg:pl-0">
          <div className="absolute bottom-0 left-3 top-0 w-0.5 bg-[#e5e5f2] lg:left-1/2 lg:-translate-x-1/2" />
          {entries.map((entry, index) => (
            <li key={`${entry.year}-${entry.title}`}><TimelineCard entry={entry} dotImage={dotImage} index={index} /></li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function TimelineCard({ entry, dotImage, index }: { entry: TimelineEntry; dotImage: string; index: number }) {
  return (
    <div
      className={`relative lg:absolute lg:top-[var(--timeline-top)] lg:w-[380px] ${entry.side === "left" ? "lg:left-[29px]" : "lg:left-[489px]"}`}
      style={{ "--timeline-top": `${[0, 260, 520, 757, 1040, 1277][index] ?? 0}px` } as React.CSSProperties}
    >
      <div className="rounded-2xl border border-[#d0d0f9] bg-[#f0f0fd] px-7 py-6">
        <p className="bg-gradient-to-r from-[#738cff] to-[#8059f2] bg-clip-text font-sans text-2xl font-bold leading-9 text-transparent">{entry.year}</p>
        <h3 className="mt-2.5 font-sans text-lg font-semibold leading-[1.5] text-[#2b2b63]">{entry.title}</h3>
        <p className="mt-2.5 font-sans text-sm leading-[1.65] text-[#545454]">{entry.description}</p>
      </div>
      <Image src={dotImage} alt="" width={14} height={14} className={`absolute top-7 z-10 hidden size-3.5 lg:block ${entry.side === "left" ? "-right-[48px]" : "-left-[46px]"}`} />
      <div className={`absolute top-[34px] z-0 hidden h-0.5 w-10 bg-[#d9d9eb] lg:block ${entry.side === "left" ? "-right-10" : "-left-10"}`} />
    </div>
  )
}
