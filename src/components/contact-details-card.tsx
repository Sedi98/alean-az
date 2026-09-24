import type { Office } from "@/features/services/contact/types"
import { getTranslations } from "next-intl/server"

export async function ContactDetailsCard({ office }: { office: Office }) {
  const t = await getTranslations("Common")
  const details = [
    [t("phone"), office.phone],
    [t("email"), office.email],
    [t("address"), office.address],
    [t("workingHours"), office.working_hours ?? ""],
    [t("support"), office.support ?? ""],
  ]

  return (
    <aside data-node-id="501:851" className="w-full overflow-hidden rounded-[20px] bg-[#0a0a0d] lg:w-[400px] lg:shrink-0">
      <div data-node-id="501:853" className="flex h-[200px] items-center justify-center bg-[#1a1f2e]">
        <p className="font-sans text-center text-[13px] text-[#666673]">📍 {t("mapOfficeImage")}</p>
      </div>
      <div data-node-id="501:855" className="flex flex-col px-7 py-6">
        <h2 className="font-sans text-xl font-bold leading-normal text-white">ALEAN Tour Operator</h2>
        <div className="h-4" />
        {details.map(([label, value]) => (
          <div key={label} className="flex items-center justify-between gap-4 border-b border-white/[0.06] py-3 font-sans text-[13px] leading-normal">
            <span className="text-[#737380]">{label}</span>
            <span className="text-right font-semibold text-white">{value}</span>
          </div>
        ))}
      </div>
    </aside>
  )
}
