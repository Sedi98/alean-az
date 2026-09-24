"use client"

import { Link } from "@/i18n/navigation"
import { useTranslations } from "next-intl"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type RegistrationValues = { agencyName: string; licenseNumber: string; contactPerson: string; email: string; phone: string; password: string }

const fields: Array<{ name: keyof RegistrationValues; type?: string }> = [
  { name: "agencyName" },
  { name: "licenseNumber" },
  { name: "contactPerson" },
  { name: "email", type: "email" },
  { name: "phone", type: "tel" },
  { name: "password", type: "password" },
]

export function RegistrationForm() {
  const t = useTranslations("Common")
  const registrationSchema = z.object({
    agencyName: z.string().min(2, t("agencyName")),
    licenseNumber: z.string().min(2, t("licenseNumber")),
    contactPerson: z.string().min(2, t("contactPerson")),
    email: z.string().email(t("email")),
    phone: z.string().min(7, t("phone")),
    password: z.string().min(6, t("password")),
  })
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<RegistrationValues>({
    resolver: zodResolver(registrationSchema),
  })

  return (
    <section data-node-id="321:900" className="bg-white px-6 py-14 sm:px-10 lg:px-20 lg:py-[72px]">
      <div className="mx-auto flex w-full max-w-[1020px] flex-col items-center gap-10">
        <p className="text-center font-sans text-sm leading-normal text-[#737380]">
          {t("agencyNetwork")}
        </p>

        <form
          onSubmit={handleSubmit(() => setSubmitted(true))}
          className="flex w-full flex-col items-center gap-10"
          noValidate
        >
          <div className="grid w-full gap-6 sm:grid-cols-2 sm:gap-x-5">
            {fields.map((field) => (
              <div key={field.name} className="flex min-w-0 flex-col gap-1">
                <Input
                  {...register(field.name)}
                  type={field.type}
                  placeholder={t(field.name)}
                  aria-label={t(field.name)}
                  aria-invalid={Boolean(errors[field.name])}
                />
                {errors[field.name]?.message ? (
                  <span className="px-1 font-sans text-xs text-red-600">{errors[field.name]?.message}</span>
                ) : null}
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-[18px]">
            {submitted ? (
              <p role="status" className="h-12 px-4 py-3 font-sans text-sm text-green-700">{t("registrationAccepted")}</p>
            ) : (
              <Button
                type="submit"
                className="h-12 rounded-full bg-[linear-gradient(109deg,#4848a8,#7e7eff)] px-4 font-sans text-base font-semibold text-white hover:opacity-90"
              >
                {t("completeRegistration")}
              </Button>
            )}
            <Link
              href="/login"
              className="bg-gradient-to-r from-[#738cff] to-[#8059f2] bg-clip-text font-sans text-[13px] font-medium leading-normal text-transparent transition-opacity hover:opacity-80"
            >
              {t("hasAccount")}
            </Link>
          </div>
        </form>
      </div>
    </section>
  )
}
