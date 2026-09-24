import Image from "next/image"
import { useTranslations } from "next-intl"
import type { PublicEventDetail } from "@/features/services/events/types"

export interface EventInfoSectionProps {
  title: string
  event: PublicEventDetail
}

export function EventInfoSection({ title, event }: EventInfoSectionProps) {
  const t = useTranslations("Common")
  const rows = [
    [t("date"), event.date],
    [t("time"), `${event.start_time}${event.end_time ? ` – ${event.end_time}` : ""}`],
    [t("location"), event.venue],
    [t("city"), event.city],
    [t("category"), event.category.display_name],
    [t("participants"), event.expected_participants ? `${event.expected_participants}+` : "—"],
    [t("organizer"), event.organizer ?? "—"],
    [t("language"), event.event_languages.join(", ") || "—"],
    [t("price"), event.is_free ? t("free") : `${event.price ?? "—"} ${event.currency ?? ""}`.trim()],
    [t("remainingSeats"), event.seats_left === null ? "—" : String(event.seats_left)],
  ]

  return (
    <section data-node-id="261:261" className="bg-[linear-gradient(136deg,#0a0a0f_8%,#180f2a_50%,#1f1a38_92%)] px-6 py-16 sm:px-10 lg:px-20 lg:py-20">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-12">
        <div className="flex flex-col gap-6">
          <h2 className="font-sans text-2xl font-bold leading-normal text-white sm:text-[30px]">{title}</h2>
          <div className="max-w-[1100px] space-y-4 font-sans text-[15px] leading-[1.8] text-[#8c8c99]">
            {event.description?.split(/\n{2,}/).filter(Boolean).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
        <div className="grid gap-3 lg:grid-cols-2 lg:gap-x-10">
          {rows.map(([label, value], index) => (
            <div key={label} className={`flex items-center justify-between rounded-xl border border-[#383882] px-5 py-4 ${index % 2 === 0 ? "bg-white/[0.04]" : "bg-white/[0.02]"}`}>
              <div className="flex items-center gap-2.5">
                <Image src="/events/detail/info-dot.svg" alt="" width={8} height={8} />
                <span className="font-sans text-[13px] text-[#737380]">{label}</span>
              </div>
              <span className="text-right font-sans text-[13px] font-semibold text-white">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
