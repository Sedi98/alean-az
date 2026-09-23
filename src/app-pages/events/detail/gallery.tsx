import Image from "next/image"

import type { PublicGallery } from "@/features/services/events/types"

export function EventGallery({ gallery }: { gallery: PublicGallery[] }) {
  if (!gallery.length) return null

  const images = [...gallery].sort((first, second) => (first.order ?? 0) - (second.order ?? 0))

  return (
    <section data-node-id="259:320" className="bg-white px-6 py-16 sm:px-10 lg:px-20 lg:py-[100px]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-6">
        <h2 className="font-sans text-2xl font-bold leading-normal text-[#14141a] sm:text-[28px]">Qalereya</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((item) => <div key={item.id} className="relative h-[220px] overflow-hidden rounded-xl"><Image src={item.image} alt={item.alt ?? ""} fill sizes="33vw" className="object-cover" /></div>)}
        </div>
      </div>
    </section>
  )
}
