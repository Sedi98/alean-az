"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import Image from "next/image"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { submitEventRegistration } from "@/app/[locale]/events/[slug]/registration/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import type { PublicEventDetail } from "@/features/services/events/types"

const registrationSchema = z.object({
  firstName: z.string().min(2, "Adınızı daxil edin"),
  lastName: z.string().min(2, "Soyadınızı daxil edin"),
  email: z.string().email("Düzgün e-mail daxil edin"),
  phone: z.string().min(7, "Telefon nömrəsini daxil edin"),
  company: z.string().min(2, "Şirkət / təşkilat adını daxil edin"),
  position: z.string().min(2, "Vəzifənizi daxil edin"),
  participantsCount: z.string().min(1, "İştirakçı sayını seçin"),
  country: z.string().min(1, "Ölkə seçin"),
  message: z.string().min(10, "Sorğunu daha ətraflı yazın"),
})

type RegistrationValues = z.infer<typeof registrationSchema>

export function RegistrationForm({ event }: { event: PublicEventDetail }) {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const { register, handleSubmit, formState: { errors } } = useForm<RegistrationValues>({ resolver: zodResolver(registrationSchema) })
  const onSubmit = async (values: RegistrationValues) => {
    setIsSubmitting(true)
    setSubmitError(null)
    try {
      await submitEventRegistration(event.slug, values)
      setSubmitted(true)
    } catch {
      setSubmitError("Qeydiyyat göndərilərkən xəta baş verdi. Bir qədər sonra yenidən cəhd edin.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section data-node-id="316:495" className="bg-white px-6 py-16 sm:px-10 lg:px-20 lg:py-[100px]">
      <div className="mx-auto grid max-w-[1280px] gap-16 lg:grid-cols-[minmax(0,1fr)_380px]">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <div className="flex flex-col gap-6"><h2 className="font-sans text-[26px] font-bold text-[#14141a]">Qeydiyyat məlumatları</h2><p className="font-sans text-sm text-[#737380]">Aşağıdakı formu doldurun, təsdiq e-mailı alacaqsınız.</p></div>
          <div className="grid gap-6 sm:grid-cols-2">
            <Field error={errors.firstName?.message}><Input placeholder="Ad" {...register("firstName")} /></Field>
            <Field error={errors.lastName?.message}><Input placeholder="Soyad" {...register("lastName")} /></Field>
            <Field error={errors.email?.message}><Input type="email" placeholder="E-mail" {...register("email")} /></Field>
            <Field error={errors.phone?.message}><Input placeholder="Telefon" {...register("phone")} /></Field>
            <Field error={errors.company?.message}><Input placeholder="Şirkət / Təşkilat" {...register("company")} /></Field>
            <Field error={errors.position?.message}><Input placeholder="Vəzifə" {...register("position")} /></Field>
            <Field error={errors.participantsCount?.message}><Select defaultValue="" {...register("participantsCount")}><option value="" disabled>İştirakçı sayı</option><option value="1">1–10</option><option value="10">11–50</option><option value="50">50+</option></Select></Field>
            <Field error={errors.country?.message}><Select defaultValue="" {...register("country")}><option value="" disabled>Ölkə</option><option value="Azerbaijan">Azərbaycan</option><option value="Turkey">Türkiyə</option><option value="Other">Digər</option></Select></Field>
          </div>
          <Field error={errors.message?.message}><Textarea placeholder="Sorğunun təsviri — tarix, şəxs sayı, büdcə" {...register("message")} /></Field>
          {submitError ? <p className="text-sm text-red-600">{submitError}</p> : null}
          {submitted ? <p className="text-sm text-green-700">Qeydiyyatınız qəbul edildi.</p> : <Button disabled={isSubmitting} type="submit" className="h-12 self-end rounded-full bg-[linear-gradient(109deg,#4848a8,#7e7eff)] px-4 font-sans text-base font-semibold text-white hover:opacity-90">{isSubmitting ? "Göndərilir..." : "Qeydiyyatı tamamla"}</Button>}
        </form>

        <aside className="overflow-hidden rounded-[20px] bg-[#0a0a0d] text-white">
          <div className="relative flex h-[180px] items-center justify-center bg-[#1f2433] font-sans text-xs text-[#666673]">{event.cover_image ? <Image src={event.cover_image} alt={event.title} fill sizes="380px" className="object-cover" /> : "Tədbir şəkli"}</div>
          <div className="flex flex-col gap-4 p-6"><h2 className="font-sans text-lg font-bold leading-[1.3]">{event.title}</h2><SummaryRow label="Tarix" value={event.date} /><SummaryRow label="Saat" value={`${event.start_time}${event.end_time ? ` – ${event.end_time}` : ""}`} /><SummaryRow label="Məkan" value={event.venue} /><SummaryRow label="Şəhər" value={event.city} /><SummaryRow label="Qiymət" value={event.is_free ? "Pulsuz" : `${event.price ?? "—"} ${event.currency ?? ""}`.trim()} /></div>
        </aside>
      </div>
    </section>
  )
}

function Field({ children, error }: { children: React.ReactNode; error?: string }) { return <div className="flex min-w-0 flex-col gap-1">{children}{error ? <span className="font-sans text-xs text-red-600">{error}</span> : null}</div> }
function SummaryRow({ label, value }: { label: string; value: string }) { return <div className="flex items-center justify-between border-b border-white/[0.06] py-2.5 font-sans text-[13px]"><span className="text-[#737380]">{label}</span><span className="font-semibold text-white">{value}</span></div> }
