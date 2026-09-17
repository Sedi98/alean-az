export interface RegistrationHeroProps {
  breadcrumb: string
  title: string
  phone: string
  email: string
  note: string
}

export function RegistrationHero({ breadcrumb, title, phone, email, note }: RegistrationHeroProps) {
  return (
    <section
      data-node-id="280:1159"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#14141f_0%,#1f1a38_50%,#332661_100%)] px-6 pb-14 pt-28 sm:px-10 lg:px-20 lg:pb-[76px] lg:pt-[144px]"
    >
      <div className="mx-auto flex max-w-[1252px] flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
        <div className="w-full max-w-[609px]">
          <p className="font-sans text-[13px] leading-normal text-[#9999a6]">{breadcrumb}</p>
          <h1 className="mt-[21px] font-sans text-[42px] font-semibold leading-none text-white sm:text-[48px]">{title}</h1>
        </div>

        <div className="w-full max-w-[482px] text-left lg:pt-1 lg:text-right">
          <p className="font-sans text-base font-semibold leading-normal text-white">{phone}</p>
          <p className="mt-3 font-sans text-sm leading-normal text-[#80808c]">{email}</p>
          <p className="mt-3 font-sans text-[13px] leading-normal text-[#666673]">{note}</p>
        </div>
      </div>
    </section>
  )
}
