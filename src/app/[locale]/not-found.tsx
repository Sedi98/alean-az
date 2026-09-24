import { Link } from "@/i18n/navigation"
import { getTranslations } from "next-intl/server"

export default async function NotFound() {
  const t = await getTranslations("Common")
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-white px-6 text-center text-[#2b2b63]">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#666673]">404</p>
      <h1 className="text-3xl font-semibold">{t("notFoundTitle")}</h1>
      <p className="max-w-md text-base text-[#666673]">
        {t("notFoundDescription")}
      </p>
      <Link
        href="/"
        className="rounded-full bg-[#4848a8] px-5 py-3 font-semibold text-white"
      >
        {t("backHome")}
      </Link>
    </main>
  )
}
