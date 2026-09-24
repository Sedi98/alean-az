import Image from "next/image"

export interface ServiceImage {
  image: string
  alt: string
}

export interface ServiceImageGalleryProps {
  images: ServiceImage[]
  firstImageClassName?: string
  singleImageClassName?: string
  restImageClassName?: string
  sizes?: string
}

export function ServiceImageGallery({
  images,
  firstImageClassName = "h-[280px]",
  singleImageClassName = "h-[360px] sm:h-[435px]",
  restImageClassName = "h-[168px]",
  sizes = "409px",
}: ServiceImageGalleryProps) {
  if (images.length === 0) return null

  const [firstImage, ...restImages] = images
  const firstImageClass = restImages.length === 0 ? singleImageClassName : firstImageClassName

  return (
    <div className="flex w-full flex-col items-center gap-[15px]">
      <div className={`relative w-full overflow-hidden rounded-2xl bg-[#ebebf0] ${firstImageClass}`}>
        <Image src={firstImage.image} alt={firstImage.alt} fill sizes={sizes} className="object-cover" />
      </div>
      {restImages.length > 0 ? (
        <div className="grid w-full grid-cols-2 gap-5">
          {restImages.map((image) => (
            <div key={image.image} className={`relative min-w-0 overflow-hidden rounded-xl bg-[#ebebf0] ${restImageClassName}`}>
              <Image src={image.image} alt={image.alt} fill sizes={sizes} className="object-cover" />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}
