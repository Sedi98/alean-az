"use server"

import { registerForEvent } from "@/features/services/events/api"
import type { ApiLanguage } from "@/features/services/http"
import type { RegistrationCreateResponse } from "@/features/services/events/types"

export interface EventRegistrationFormInput {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  position: string
  participantsCount: string
  country: string
  message: string
}

export async function submitEventRegistration(
  slug: string,
  input: EventRegistrationFormInput,
  lang: ApiLanguage,
): Promise<RegistrationCreateResponse> {
  return registerForEvent(slug, {
    first_name: input.firstName,
    last_name: input.lastName,
    email: input.email,
    phone: input.phone,
    company: input.company,
    position: input.position,
    participants_count: Number(input.participantsCount),
    country: input.country,
    message: input.message,
  }, { lang })
}
