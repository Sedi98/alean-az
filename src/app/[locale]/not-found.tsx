import { Link } from "@/i18n/navigation"

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-white px-6 text-center text-[#2b2b63]">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#666673]">404</p>
      <h1 className="text-3xl font-semibold">Səhifə tapılmadı</h1>
      <p className="max-w-md text-base text-[#666673]">
        Axtardığınız səhifə mövcud deyil.
      </p>
      <Link
        href="/"
        className="rounded-full bg-[#4848a8] px-5 py-3 font-semibold text-white"
      >
        Ana səhifəyə qayıt
      </Link>
    </main>
  )
}
