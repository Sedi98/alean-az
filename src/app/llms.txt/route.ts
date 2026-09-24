import { getLlmsText } from "@/lib/ai-content"

export const revalidate = 120

export function GET() {
  return new Response(getLlmsText(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=120, s-maxage=120, stale-while-revalidate=600",
    },
  })
}
