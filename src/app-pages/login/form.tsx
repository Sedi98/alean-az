"use client"

import { Link } from "@/i18n/navigation"
import { useTranslations } from "next-intl"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type LoginValues = { email: string; password: string }

export function LoginForm() {
  const t = useTranslations("Common")
  const loginSchema = z.object({
    email: z.string().email(t("email")),
    password: z.string().min(1, t("password")),
  })
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
  })

  return (
    <section data-node-id="321:1029" className="bg-white px-6 py-14 sm:px-10 lg:px-20 lg:py-[72px]">
      <div className="mx-auto flex w-full max-w-[500px] flex-col items-center gap-10">
        <div className="flex w-full flex-col items-center gap-10">
          <p className="text-center font-sans text-sm leading-normal text-[#737380]">
            {t("loginInfo")}
          </p>

          <form id="login-form" onSubmit={handleSubmit(() => setSubmitted(true))} className="flex w-full flex-col gap-6" noValidate>
            <Field error={errors.email?.message}>
              <Input
                {...register("email")}
                type="email"
                placeholder={t("email")}
                aria-label={t("email")}
                aria-invalid={Boolean(errors.email)}
              />
            </Field>
            <Field error={errors.password?.message}>
              <Input
                {...register("password")}
                type="password"
                placeholder={t("password")}
                aria-label={t("password")}
                aria-invalid={Boolean(errors.password)}
              />
            </Field>
          </form>

          <button type="button" className="bg-gradient-to-r from-[#738cff] to-[#8059f2] bg-clip-text font-sans text-[13px] font-medium leading-normal text-transparent hover:opacity-80">
            {t("forgotPassword")}
          </button>
        </div>

        <div className="flex flex-col items-center gap-6">
          {submitted ? (
            <p role="status" className="h-12 px-4 py-3 font-sans text-sm text-green-700">{t("loginSent")}</p>
          ) : (
            <Button
              type="submit"
              form="login-form"
              className="h-12 rounded-full bg-[linear-gradient(99deg,#4848a8,#7e7eff)] px-4 font-sans text-base font-semibold text-white hover:opacity-90"
            >
              {t("loginButton")}
            </Button>
          )}

          <div className="flex w-full flex-col items-center gap-[18px]">
            <div className="flex w-full items-center gap-4 overflow-hidden">
              <span className="h-px flex-1 bg-black/[0.08]" />
              <span className="font-sans text-xs leading-normal text-[#80808c]">{t("or")}</span>
              <span className="h-px flex-1 bg-black/[0.08]" />
            </div>
            <Link
              href="/registration"
              className="bg-gradient-to-r from-[#738cff] to-[#8059f2] bg-clip-text font-sans text-[13px] font-medium leading-normal text-transparent hover:opacity-80"
            >
              {t("noAccount")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ children, error }: { children: React.ReactNode; error?: string }) {
  return (
    <div className="flex min-w-0 flex-col gap-1">
      {children}
      {error ? <span className="px-1 font-sans text-xs text-red-600">{error}</span> : null}
    </div>
  )
}
