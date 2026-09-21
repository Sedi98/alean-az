import Image from "next/image"

export interface ContactInfoCardProps {
  label: string
  value: string
  description: string
}

export function ContactInfoCard({ label, value, description }: ContactInfoCardProps) {
  return (
    <article
      data-node-id="496:829"
      className="flex min-w-0 flex-col items-start gap-3 overflow-hidden rounded-[20px] bg-[#f7f7fa] p-7 shadow-[0_2px_12px_0_rgba(0,0,0,0.03)]"
    >
      <Image src="/registration/info-dot.svg" alt="" width={10} height={10} />
      <p className="font-sans text-[13px] font-medium leading-normal text-[#737380]">{label}</p>
      <p className="font-sans text-lg font-bold leading-normal text-[#14141a]">{value}</p>
      <p className="font-sans text-xs leading-normal text-[#80808c]">{description}</p>
    </article>
  )
}
