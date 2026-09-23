"use client"

import { Link } from "@/i18n/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const loginSchema = z.object({
  email: z.string().email("Düzgün e-mail daxil edin"),
  password: z.string().min(1, "Şifrəni daxil edin"),
})

type LoginValues = z.infer<typeof loginSchema>

export function LoginForm() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
  })

  return (
    <section data-node-id="321:1029" className="bg-white px-6 py-14 sm:px-10 lg:px-20 lg:py-[72px]">
      <div className="mx-auto flex w-full max-w-[500px] flex-col items-center gap-10">
        <div className="flex w-full flex-col items-center gap-10">
          <p className="text-center font-sans text-sm leading-normal text-[#737380]">
            Agent kabinetinə daxil olun
          </p>

          <form id="login-form" onSubmit={handleSubmit(() => setSubmitted(true))} className="flex w-full flex-col gap-6" noValidate>
            <Field error={errors.email?.message}>
              <Input
                {...register("email")}
                type="email"
                placeholder="E-mail"
                aria-label="E-mail"
                aria-invalid={Boolean(errors.email)}
              />
            </Field>
            <Field error={errors.password?.message}>
              <Input
                {...register("password")}
                type="password"
                placeholder="Şifrə"
                aria-label="Şifrə"
                aria-invalid={Boolean(errors.password)}
              />
            </Field>
          </form>

          <button type="button" className="bg-gradient-to-r from-[#738cff] to-[#8059f2] bg-clip-text font-sans text-[13px] font-medium leading-normal text-transparent hover:opacity-80">
            Şifrəni unutmusunuz?
          </button>
        </div>

        <div className="flex flex-col items-center gap-6">
          {submitted ? (
            <p className="h-12 px-4 py-3 font-sans text-sm text-green-700">Giriş məlumatları göndərildi.</p>
          ) : (
            <Button
              type="submit"
              form="login-form"
              className="h-12 rounded-full bg-[linear-gradient(99deg,#4848a8,#7e7eff)] px-4 font-sans text-base font-semibold text-white hover:opacity-90"
            >
              Giriş et
            </Button>
          )}

          <div className="flex w-full flex-col items-center gap-[18px]">
            <div className="flex w-full items-center gap-4 overflow-hidden">
              <span className="h-px flex-1 bg-black/[0.08]" />
              <span className="font-sans text-xs leading-normal text-[#80808c]">və ya</span>
              <span className="h-px flex-1 bg-black/[0.08]" />
            </div>
            <Link
              href="/registration"
              className="bg-gradient-to-r from-[#738cff] to-[#8059f2] bg-clip-text font-sans text-[13px] font-medium leading-normal text-transparent hover:opacity-80"
            >
              Hesabınız yoxdur? Qeydiyyatdan keçin →
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
