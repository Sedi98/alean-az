import { EventsHero } from "./hero"
import { EventsGrid } from "./grid"
import { events } from "./data"
import { PartnersSection } from "@/app-pages/home/partners"

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-white">
      <EventsHero
        breadcrumb="Ana səhifə  /  Tədbirlər"
        title="Tədbirlər"
        cards={[
          { title: "Konfrans", description: "Zal, texniki təchizat, qeydiyyat, tərcümə." },
          { title: "Sərgi", description: "Stend logistikası, delegasiya, B2B görüşlər." },
          { title: "Korporativ tədbir", description: "Yığıncaq, təqdimat, təlim proqramları." },
          { title: "Təşviq səyahəti", description: "Komanda proqramları və tematik marşrutlar." },
        ]}
      />
      <EventsGrid events={events} />
      <PartnersSection
        label="ÇALIŞDIĞIMIZ OTEL ŞƏBƏKƏLƏRİ"
        dotImage="/brand/partners-dot.svg"
        actionText="Hamısına bax"
        actionUrl="/partners"
        partners={[
          { name: "Hilton Hotels & Resorts", image: "/partners/hilton.png", width: 116, height: 88 },
          { name: "Marriott", image: "/partners/marriott.png", width: 126, height: 99 },
          { name: "Four Seasons Hotels and Resorts", image: "/partners/four-seasons.png", width: 206, height: 116 },
          { name: "Hyatt", image: "/partners/hyatt.png", width: 196, height: 110 },
        ]}
      />
    </main>
  )
}
