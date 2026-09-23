import { ContactInfoCard } from "@/components/contact-info-card"
import type { Channel } from "@/features/services/contact/types"

export function ContactInfoSection({ channels }: { channels: Channel[] }) {
  return (
    <section data-node-id="496:828" className="bg-white px-6 py-14 sm:px-10 lg:px-20">
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
