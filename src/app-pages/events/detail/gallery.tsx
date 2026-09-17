import Image from "next/image"

const galleryImages = [
  "/events/detail/gallery-1.jpg",
  "/events/detail/gallery-2.jpg",
  "/events/detail/gallery-3.jpg",
  "/events/detail/gallery-4.jpg",
  "/events/detail/gallery-5.jpg",
  "/events/detail/gallery-6.jpg",
]

export function EventGallery() {
  return (
    <section data-node-id="259:320" className="bg-white px-6 py-16 sm:px-10 lg:px-20 lg:py-[100px]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-6">
        <h2 className="font-sans text-2xl font-bold leading-normal text-[#14141a] sm:text-[28px]">Qalereya</h2>
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="relative h-[260px] overflow-hidden rounded-2xl lg:h-[320px]"><Image src={galleryImages[0]} alt="" fill sizes="50vw" className="object-cover" /></div>
          <div className="grid gap-4"><div className="relative h-[152px] overflow-hidden rounded-xl"><Image src={galleryImages[1]} alt="" fill sizes="50vw" className="object-cover" /></div><div className="relative h-[152px] overflow-hidden rounded-xl"><Image src={galleryImages[2]} alt="" fill sizes="50vw" className="object-cover" /></div></div>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">{galleryImages.slice(3).map((image) => <div key={image} className="relative h-[220px] overflow-hidden rounded-xl"><Image src={image} alt="" fill sizes="33vw" className="object-cover" /></div>)}</div>
      </div>
    </section>
  )
}
