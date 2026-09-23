import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

import { Link } from "@/i18n/navigation"
import { cn } from "cn"

interface PaginationProps {
  pathname: string
  page: number
  totalPages: number
  searchParams?: Record<string, string | undefined>
}

function getItems(page: number, totalPages: number): Array<number | "ellipsis-left" | "ellipsis-right"> {
  if (totalPages <= 7) return Array.from({ length: totalPages }, (_, index) => index + 1)

  const items: Array<number | "ellipsis-left" | "ellipsis-right"> = [1]

  if (page > 4) items.push("ellipsis-left")

  const start = Math.max(2, page - 1)
  const end = Math.min(totalPages - 1, page + 1)
  for (let value = start; value <= end; value += 1) items.push(value)

  if (page < totalPages - 3) items.push("ellipsis-right")
  items.push(totalPages)

  return items
}

function getHref(pathname: string, page: number, searchParams: Record<string, string | undefined>) {
  const params = new URLSearchParams()
  Object.entries(searchParams).forEach(([key, value]) => {
    if (value && key !== "page") params.set(key, value)
  })
  params.set("page", String(page))
  return `${pathname}?${params.toString()}`
}

function PaginationLink({
  href,
  active = false,
  children,
  className,
  ...props
}: React.ComponentProps<typeof Link> & { active?: boolean }) {
  return (
    <Link
      aria-current={active ? "page" : undefined}
      className={cn(
        "inline-flex size-9 items-center justify-center rounded-md border border-transparent text-sm font-medium text-[#4848a8] transition-colors hover:border-[#d0d0f9] hover:bg-[#f0f0fd]",
        active && "border-[#4848a8] bg-[#4848a8] text-white hover:border-[#4848a8] hover:bg-[#4848a8] hover:text-white",
        className,
      )}
      href={href}
      {...props}
    >
      {children}
    </Link>
  )
}

export function Pagination({ pathname, page, totalPages, searchParams = {} }: PaginationProps) {
  if (totalPages <= 1) return null

  const previousHref = getHref(pathname, page - 1, searchParams)
  const nextHref = getHref(pathname, page + 1, searchParams)

  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-1 py-10">
      <PaginationLink
        href={previousHref}
        aria-label="Əvvəlki səhifə"
        aria-disabled={page === 1}
        tabIndex={page === 1 ? -1 : undefined}
        className={page === 1 ? "pointer-events-none opacity-40" : undefined}
      >
        <ChevronLeft className="size-4" />
      </PaginationLink>
      {getItems(page, totalPages).map((item) =>
        typeof item === "number" ? (
          <PaginationLink key={item} href={getHref(pathname, item, searchParams)} active={item === page}>
            {item}
          </PaginationLink>
        ) : (
          <span key={item} aria-hidden="true" className="inline-flex size-9 items-center justify-center text-[#80808c]">
            <MoreHorizontal className="size-4" />
          </span>
        ),
      )}
      <PaginationLink
        href={nextHref}
        aria-label="Növbəti səhifə"
        aria-disabled={page === totalPages}
        tabIndex={page === totalPages ? -1 : undefined}
        className={page === totalPages ? "pointer-events-none opacity-40" : undefined}
      >
        <ChevronRight className="size-4" />
      </PaginationLink>
    </nav>
  )
}
