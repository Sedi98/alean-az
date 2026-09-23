"use client"

import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-white px-6 text-center text-[#2b2b63]">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#666673]">500</p>
      <h1 className="text-3xl font-semibold">Xəta baş verdi</h1>
      <p className="max-w-md text-base text-[#666673]">
        Sorğunu emal etmək mümkün olmadı. Bir qədər sonra yenidən cəhd edin.
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="rounded-full bg-[#4848a8] px-5 py-3 font-semibold text-white"
      >
        Yenidən yoxla
      </button>
    </main>
  )
}
