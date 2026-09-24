"use client"

import { useEffect } from "react"
import { useTranslations } from "next-intl"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const t = useTranslations("Common")
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-white px-6 text-center text-[#2b2b63]">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#666673]">500</p>
      <h1 className="text-3xl font-semibold">{t("errorTitle")}</h1>
      <p className="max-w-md text-base text-[#666673]">
        {t("errorDescription")}
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="rounded-full bg-[#4848a8] px-5 py-3 font-semibold text-white"
      >
        {t("tryAgain")}
      </button>
    </main>
  )
}
