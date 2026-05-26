"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductGallery({
  images,
  productName,
}: ProductGalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  return (
    <div className="border-l border-gray-200 bg-[#f8f9fa]">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((image: string) => (
            <div
              key={image}
              className="relative min-w-0 flex-[0_0_100%] aspect-[4/3]"
            >
              <Image
                src={image}
                alt={productName}
                fill
                className="object-contain px-20 py-0"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Thumbnails */}
      <div className="flex gap-4 overflow-x-auto border-t border-gray-200 px-5 py-5">
        {images.map((image, index) => (
          <button
            key={image}
            onClick={() => emblaApi?.scrollTo(index)}
            className="relative h-28 w-28 min-w-[112px] overflow-hidden rounded-xl border border-gray-200 bg-white"
          >
            <Image
              src={image}
              alt={productName}
              fill
              className="object-cover p-2"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
