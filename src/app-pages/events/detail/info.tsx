import Image from "next/image"

export interface EventInfoSectionProps {
  title: string
}

const rows = [
  ["Tarix", "15 Mart 2026"],
  ["Saat", "09:00 – 18:00"],
  ["Məkan", "Heydar Əliyev Mərkəzi"],
  ["Şəhər", "Bakı, Azərbaycan"],
  ["Kateqoriya", "Konfrans / Forum"],
  ["İştirakçı", "500+ gözlənilir"],
  ["Təşkilatçı", "ALEAN Tour Operator"],
  ["Dil", "Azərbaycan, İngilis, Rus"],
]

export function EventInfoSection({ title }: EventInfoSectionProps) {
  return (
    <section data-node-id="261:261" className="bg-[linear-gradient(136deg,#0a0a0f_8%,#180f2a_50%,#1f1a38_92%)] px-6 py-16 sm:px-10 lg:px-20 lg:py-20">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-12">
        <div className="flex flex-col gap-6">
          <h2 className="font-sans text-2xl font-bold leading-normal text-white sm:text-[30px]">{title}</h2>
          <div className="max-w-[1100px] space-y-4 font-sans text-[15px] leading-[1.8] text-[#8c8c99]">
            <p>Bakı Beynəlxalq Turizm Forumu 2026 — Azərbaycanın ən böyük turizm tədbirlərindən biridir. Forum çərçivəsində yerli və beynəlxalq turizm mütəxəssisləri, otel şəbəkələrinin nümayəndələri, aviasiya şirkətləri və hökumət rəsmiləri bir araya gələrək sektorun gələcəyini müzakirə edəcəklər.</p>
            <p>Tədbirdə 500+ iştirakçı, 50+ spiker və 30+ ölkədən nümayəndə gözlənilir. Əsas mövzular arasında davamlı turizm, rəqəmsal transformasiya, MICE potensialı və Azərbaycanın turizm strategiyası yer alır.</p>
            <p>Forum həmçinin B2B görüşlər, panel müzakirələr və networking sessiyaları ilə zəngindir.</p>
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
