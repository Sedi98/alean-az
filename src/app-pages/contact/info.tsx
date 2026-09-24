import { ContactInfoCard } from "@/components/contact-info-card"
import { getTranslations } from "next-intl/server"
import type { Channel } from "@/features/services/contact/types"

export async function ContactInfoSection({ channels }: { channels: Channel[] }) {
  const t = await getTranslations("Common")
  return (
    <section data-node-id="496:828" aria-labelledby="contact-channels-title" className="bg-white px-6 py-14 sm:px-10 lg:px-20">
      <h2 id="contact-channels-title" className="sr-only">{t("contact")}</h2>
      <div className="mx-auto grid max-w-[1280px] gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {channels.map((channel) => (
          <ContactInfoCard
            key={channel.type}
            label={channel.label}
            value={channel.value}
            description={channel.note ?? ""}
          />
        ))}
      </div>
    </section>
  )
}
