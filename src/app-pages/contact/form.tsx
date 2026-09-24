"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { submitContactForm } from "@/app/[locale]/contact/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import type { FormInfo } from "@/features/services/contact/types"

type ContactValues = { firstName: string; lastName: string; email: string; phone: string; company: string; subject: string; message: string }

export function ContactFormSection({
  form,
  details,
}: {
  form: FormInfo
  details: React.ReactNode
}) {
  const t = useTranslations("Common")
  const contactSchema = z.object({
    firstName: z.string().min(2, t("firstName")),
    lastName: z.string().min(2, t("lastName")),
    email: z.string().email(t("email")),
    phone: z.string().min(7, t("phone")),
    company: z.string().min(2, t("company")),
    subject: z.string().min(1, t("subject")),
    message: z.string().min(10, t("requestDescription")),
  })
  const fields: Array<{ name: "firstName" | "lastName" | "email" | "phone" | "company"; key: "firstName" | "lastName" | "email" | "phone" | "company"; type?: string }> = [
    { name: "firstName", key: "firstName" },
    { name: "lastName", key: "lastName" },
    { name: "email", key: "email", type: "email" },
    { name: "phone", key: "phone", type: "tel" },
    { name: "company", key: "company" },
  ]
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const { register, handleSubmit, formState: { errors } } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
  })
  const onSubmit = async (values: ContactValues) => {
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      await submitContactForm(values)
      setSubmitted(true)
    } catch {
      setSubmitError(t("requestFailed"))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section data-node-id="501:827" className="bg-white px-6 pb-20 pt-[72px] sm:px-10 lg:px-20">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start gap-12 lg:flex-row lg:gap-12">
        <div data-node-id="501:828" className="flex min-w-0 flex-1 flex-col gap-6">
          <div className="flex flex-col gap-6">
            <h2 className="font-sans text-[32px] font-bold leading-normal text-[#14141a]">{form.title ?? t("writeToUs")}</h2>
            <p className="font-sans text-sm leading-normal text-[#737380]">{form.subtitle ?? t("contactDescription")}</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
              {fields.map((field) => (
                <div key={field.name} className="flex min-w-0 flex-col gap-1">
                  <Input
                    {...register(field.name)}
                    type={field.type}
                    placeholder={t(field.key)}
                    aria-label={t(field.key)}
                    aria-invalid={Boolean(errors[field.name])}
                  />
                  {errors[field.name]?.message ? <span className="px-1 font-sans text-xs text-red-600">{errors[field.name]?.message}</span> : null}
                </div>
              ))}
              <div className="flex min-w-0 flex-col gap-1">
                <Select {...register("subject")} defaultValue="" aria-label={t("subject")} aria-invalid={Boolean(errors.subject)}>
                  <option value="" disabled>{t("subject")}</option>
                  <option value="individual">{t("individualTravel")}</option>
                  <option value="corporate">{t("corporateTravel")}</option>
                  <option value="cooperation">{t("cooperation")}</option>
                  <option value="other">{t("other")}</option>
                </Select>
                {errors.subject?.message ? <span className="px-1 font-sans text-xs text-red-600">{errors.subject.message}</span> : null}
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <Textarea
                {...register("message")}
                placeholder={t("requestDescription")}
                aria-label={t("requestDescription")}
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message?.message ? <span className="px-1 font-sans text-xs text-red-600">{errors.message.message}</span> : null}
            </div>

            <div className="flex min-h-12 items-center justify-end gap-4">
              {submitError ? <p className="text-sm text-red-600">{submitError}</p> : null}
              {submitted ? (
                <p role="status" className="px-4 py-3 font-sans text-sm text-green-700">{t("requestAccepted")}</p>
              ) : (
                <Button disabled={isSubmitting} type="submit" className="h-12 rounded-full bg-gradient-to-r from-[#738cff] to-[#8059f2] px-9 font-sans text-[15px] font-semibold text-white shadow-[0_6px_20px_0_rgba(115,115,242,0.15)] hover:opacity-90">
                  {isSubmitting ? t("sending") : t("send")}
                </Button>
              )}
            </div>
          </form>
        </div>

        {details}
      </div>
    </section>
  )
}
