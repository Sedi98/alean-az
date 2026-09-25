"use server"

import { createContactMessage } from "@/features/services/contact/api"
import type { ApiLanguage } from "@/features/services/http"
import type { ContactMessageCreateResponse } from "@/features/services/contact/types"

export interface ContactFormInput {
  firstName: string
  lastName?: string
  email: string
  phone?: string
  company?: string
  subject?: string
  message: string
}

export async function submitContactForm(
  input: ContactFormInput,
  lang: ApiLanguage,
): Promise<ContactMessageCreateResponse> {
  return createContactMessage(
    {
      first_name: input.firstName,
      last_name: input.lastName,
      email: input.email,
      phone: input.phone,
      company: input.company,
      subject: input.subject,
      message: input.message,
    },
    { lang },
  )
}
