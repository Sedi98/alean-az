"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import Image from "next/image"
import { useState } from "react"
import { useTranslations } from "next-intl"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { submitEventRegistration } from "@/app/[locale]/events/[slug]/registration/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import type { PublicEventDetail } from "@/features/services/events/types"
import type { ApiLanguage } from "@/features/services/http"

type RegistrationValues = { firstName: string; lastName: string; email: string; phone: string; company: string; position: string; participantsCount: string; country: string; message: string }

export function RegistrationForm({ event, locale }: { event: PublicEventDetail; locale: ApiLanguage }) {
  const t = useTranslations("Common")
  const registrationSchema = z.object({
    firstName: z.string().min(2, t("firstName")),
    lastName: z.string().min(2, t("lastName")),
    email: z.string().email(t("email")),
    phone: z.string().min(7, t("phone")),
    company: z.string().min(2, t("company")),
    position: z.string().min(2, t("position")),
    participantsCount: z.string().min(1, t("participantsCount")),
    country: z.string().min(1, t("country")),
    message: z.string().min(10, t("requestDescription")),
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const { register, handleSubmit, formState: { errors } } = useForm<RegistrationValues>({ resolver: zodResolver(registrationSchema) })
  const onSubmit = async (values: RegistrationValues) => {
    setIsSubmitting(true)
    setSubmitError(null)
    try {
      await submitEventRegistration(event.slug, values, locale)
      setSubmitted(true)
    } catch {
      setSubmitError(t("requestFailed"))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section data-node-id="316:495" className="bg-white px-6 py-16 sm:px-10 lg:px-20 lg:py-[100px]">
      <div className="mx-auto grid max-w-[1280px] gap-16 lg:grid-cols-[minmax(0,1fr)_380px]">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <div className="flex flex-col gap-6"><h2 className="font-sans text-[26px] font-bold text-[#14141a]">{t("registrationInfo")}</h2><p className="font-sans text-sm text-[#737380]">{t("registrationDescription")}</p></div>
          <div className="grid gap-6 sm:grid-cols-2">
            <Field error={errors.firstName?.message}><Input placeholder={t("firstName")} aria-label={t("firstName")} {...register("firstName")} /></Field>
            <Field error={errors.lastName?.message}><Input placeholder={t("lastName")} aria-label={t("lastName")} {...register("lastName")} /></Field>
            <Field error={errors.email?.message}><Input type="email" placeholder={t("email")} aria-label={t("email")} {...register("email")} /></Field>
            <Field error={errors.phone?.message}><Input placeholder={t("phone")} aria-label={t("phone")} {...register("phone")} /></Field>
            <Field error={errors.company?.message}><Input placeholder={t("company")} aria-label={t("company")} {...register("company")} /></Field>
            <Field error={errors.position?.message}><Input placeholder={t("position")} aria-label={t("position")} {...register("position")} /></Field>
            <Field error={errors.participantsCount?.message}><Select defaultValue="" aria-label={t("participantsCount")} {...register("participantsCount")}><option value="" disabled>{t("participantsCount")}</option><option value="1">1–10</option><option value="10">11–50</option><option value="50">50+</option></Select></Field>
            <Field error={errors.country?.message}><Select defaultValue="" aria-label={t("country")} {...register("country")}><option value="" disabled>{t("country")}</option><option value="Azerbaijan">Azerbaijan</option><option value="Turkey">Turkey</option><option value="Other">{t("other")}</option></Select></Field>
          </div>
          <Field error={errors.message?.message}><Textarea placeholder={t("requestDescription")} aria-label={t("requestDescription")} {...register("message")} /></Field>
          {submitError ? <p className="text-sm text-red-600">{submitError}</p> : null}
          {submitted ? <p role="status" className="text-sm text-green-700">{t("registrationAccepted")}</p> : <Button disabled={isSubmitting} type="submit" className="h-12 self-end rounded-full bg-[linear-gradient(109deg,#4848a8,#7e7eff)] px-4 font-sans text-base font-semibold text-white hover:opacity-90">{isSubmitting ? t("sending") : t("completeRegistration")}</Button>}
        </form>

        <aside className="overflow-hidden rounded-[20px] bg-[#0a0a0d] text-white">
          <div className="relative flex h-[180px] items-center justify-center bg-[#1f2433] font-sans text-xs text-[#666673]">{event.cover_image ? <Image src={event.cover_image} alt={event.title} fill sizes="380px" className="object-cover" /> : t("eventPhoto")}</div>
          <div className="flex flex-col gap-4 p-6"><h2 className="font-sans text-lg font-bold leading-[1.3]">{event.title}</h2><SummaryRow label={t("date")} value={event.date} /><SummaryRow label={t("time")} value={`${event.start_time}${event.end_time ? ` – ${event.end_time}` : ""}`} /><SummaryRow label={t("location")} value={event.venue} /><SummaryRow label={t("city")} value={event.city} /><SummaryRow label={t("price")} value={event.is_free ? t("free") : `${event.price ?? "—"} ${event.currency ?? ""}`.trim()} /></div>
        </aside>
      </div>
    </section>
  )
}

function Field({ children, error }: { children: React.ReactNode; error?: string }) { return <div className="flex min-w-0 flex-col gap-1">{children}{error ? <span className="font-sans text-xs text-red-600">{error}</span> : null}</div> }
function SummaryRow({ label, value }: { label: string; value: string }) { return <div className="flex items-center justify-between border-b border-white/[0.06] py-2.5 font-sans text-[13px]"><span className="text-[#737380]">{label}</span><span className="font-semibold text-white">{value}</span></div> }
