"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { submitContactForm } from "@/app/[locale]/contact/actions"
import { ContactDetailsCard } from "@/components/contact-details-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import type { FormInfo, Office } from "@/features/services/contact/types"

const contactSchema = z.object({
  firstName: z.string().min(2, "Adınızı daxil edin"),
  lastName: z.string().min(2, "Soyadınızı daxil edin"),
  email: z.string().email("Düzgün e-mail daxil edin"),
  phone: z.string().min(7, "Telefon nömrəsini daxil edin"),
  company: z.string().min(2, "Şirkət / təşkilat adını daxil edin"),
  subject: z.string().min(1, "Mövzu seçin"),
  message: z.string().min(10, "Sorğunuzu daha ətraflı yazın"),
})

type ContactValues = z.infer<typeof contactSchema>

const fields: Array<{ name: "firstName" | "lastName" | "email" | "phone" | "company"; placeholder: string; type?: string }> = [
  { name: "firstName", placeholder: "Ad" },
  { name: "lastName", placeholder: "Soyad" },
  { name: "email", placeholder: "E-mail", type: "email" },
  { name: "phone", placeholder: "Telefon", type: "tel" },
  { name: "company", placeholder: "Şirkət / Təşkilat" },
]

export function ContactFormSection({
  form,
  office,
}: {
  form: FormInfo
  office: Office
}) {
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
      setSubmitError("Sorğu göndərilərkən xəta baş verdi. Bir qədər sonra yenidən cəhd edin.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section data-node-id="501:827" className="bg-white px-6 pb-20 pt-[72px] sm:px-10 lg:px-20">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start gap-12 lg:flex-row lg:gap-12">
        <div data-node-id="501:828" className="flex min-w-0 flex-1 flex-col gap-6">
          <div className="flex flex-col gap-6">
            <h2 className="font-sans text-[32px] font-bold leading-normal text-[#14141a]">{form.title ?? "Bizə yazın"}</h2>
            <p className="font-sans text-sm leading-normal text-[#737380]">{form.subtitle ?? "Aşağıdakı formu doldurun, ən qısa zamanda sizinlə əlaqə saxlayacağıq."}</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
              {fields.map((field) => (
                <div key={field.name} className="flex min-w-0 flex-col gap-1">
                  <Input
                    {...register(field.name)}
                    type={field.type}
                    placeholder={field.placeholder}
                    aria-label={field.placeholder}
                    aria-invalid={Boolean(errors[field.name])}
                  />
                  {errors[field.name]?.message ? <span className="px-1 font-sans text-xs text-red-600">{errors[field.name]?.message}</span> : null}
                </div>
              ))}
              <div className="flex min-w-0 flex-col gap-1">
                <Select {...register("subject")} defaultValue="" aria-label="Mövzu" aria-invalid={Boolean(errors.subject)}>
                  <option value="" disabled>Mövzu</option>
                  <option value="fərdi səyahət">Fərdi səyahət</option>
                  <option value="korporativ səyahət">Korporativ səyahət</option>
                  <option value="əməkdaşlıq">Əməkdaşlıq</option>
                  <option value="digər">Digər</option>
                </Select>
                {errors.subject?.message ? <span className="px-1 font-sans text-xs text-red-600">{errors.subject.message}</span> : null}
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <Textarea
                {...register("message")}
                placeholder="Sorğunun təsviri — tarix, şəxs sayı, büdcə"
                aria-label="Sorğunun təsviri"
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message?.message ? <span className="px-1 font-sans text-xs text-red-600">{errors.message.message}</span> : null}
            </div>

            <div className="flex min-h-12 items-center justify-end gap-4">
              {submitError ? <p className="text-sm text-red-600">{submitError}</p> : null}
              {submitted ? (
                <p className="px-4 py-3 font-sans text-sm text-green-700">Sorğunuz qəbul edildi.</p>
              ) : (
                <Button disabled={isSubmitting} type="submit" className="h-12 rounded-full bg-gradient-to-r from-[#738cff] to-[#8059f2] px-9 font-sans text-[15px] font-semibold text-white shadow-[0_6px_20px_0_rgba(115,115,242,0.15)] hover:opacity-90">
                  {isSubmitting ? "Göndərilir..." : "Göndər"}
                </Button>
              )}
            </div>
          </form>
        </div>

        <ContactDetailsCard office={office} />
      </div>
    </section>
  )
}
