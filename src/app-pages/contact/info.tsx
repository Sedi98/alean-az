import { ContactInfoCard } from "@/components/contact-info-card"
import type { ContactInfoCardProps } from "@/components/contact-info-card"

const contactCards: ContactInfoCardProps[] = [
  { label: "Telefon", value: "+994 77 218 0770", description: "Həftənin 7 günü, 24 saat" },
  { label: "E-mail", value: "info@alean-az.com", description: "Cavab müddəti: 2 saat" },
  { label: "Ünvan", value: "İzmir Plaza, Bakı", description: "Bazar ertəsi — Cümə, 09:00–18:00" },
  { label: "WhatsApp", value: "+994 77 218 0770", description: "Sürətli cavab üçün" },
]

export function ContactInfoSection() {
  return (
    <section data-node-id="496:828" className="bg-white px-6 py-14 sm:px-10 lg:px-20">
      <div className="mx-auto grid max-w-[1280px] gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {contactCards.map((card) => (
          <ContactInfoCard key={card.label} {...card} />
        ))}
      </div>
    </section>
  )
}
