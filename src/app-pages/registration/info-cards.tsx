import Image from "next/image"

export interface RegistrationInfoCard {
  label: string
  value: string
}

export function RegistrationInfoCards({ cards }: { cards: RegistrationInfoCard[] }) {
  return (
    <section data-node-id="279:316" className="bg-[#f7f7fa] px-6 py-12 sm:px-10 lg:px-20">
      <div className="mx-auto grid max-w-[1280px] gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <div
            key={card.label}
            className="flex min-w-0 flex-col items-start gap-2 overflow-hidden rounded-2xl bg-white p-6 shadow-[0_2px_12px_0_rgba(0,0,0,0.04)]"
          >
            <Image src="/registration/info-dot.svg" alt="" width={10} height={10} />
            <p className="font-sans text-[13px] font-medium leading-normal text-[#737380]">{card.label}</p>
            <p className="font-sans text-[15px] font-semibold leading-normal text-[#14141a]">{card.value}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
