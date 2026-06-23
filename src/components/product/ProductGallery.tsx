"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useState } from "react";
import { div } from "framer-motion/client";

interface ProductGalleryProps {
  images: { title: string; url: string; type: string; cover?: string }[];
  productName: string;
  colors?: string[];
}

export default function ProductGallery({
  images,
  productName,
  colors,
}: ProductGalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [current, setCurrent] = useState(0);

  const handleThumbnailClick = (index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
    }
    // console.log(colors[current]);
    setCurrent(index);
  };

  return (
    <div className="border-l border-gray-200 bg-[#f8f9fa]">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex lg:h-[500px]">
          {images.map((image, index) => {
            console.log(image);
            if (image.type === "video") {
              return (
                <div
                  key={index}
                  className="relative min-w-0 flex-[0_0_100%] aspect-[4/3]"
                >
                  <video
                    src={image.url}
                    controls
                    className="object-contain px-10 py-0 w-full h-full"
                  />
                  {!!colors?.length && (
                    <div className="w-full absolute bottom-[30px] flex justify-center">
                      {colors[index]}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <div
                key={index}
                className="relative min-w-0 flex-[0_0_100%] aspect-[4/3]"
              >
                <Image
                  src={image.url}
                  alt={productName}
                  fill
                  // loading="eager"
                  className="object-contain px-10 py-0"
                />
                {!!colors?.length && (
                  <div className="w-full absolute bottom-[30px] flex justify-center">
                    {colors[index]}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {/* <div className="flex justify-center text-1xl font-bold text-[#000000]">{current}</div> */}
      {/* Thumbnails */}
      <div className="flex flex-wrap justify-start gap-4  border-t border-gray-200 px-5 py-5">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`relative h-20 w-20 min-w-[82px] overflow-hidden rounded-[5px] border  ${current === index ? "border-[#0145a7]" : "border-gray-200"} bg-white`}
          >
            {image.type === "video" ? (
              <div>
                <Image
                  src={image.cover}
                  // key={index}
                  alt={productName}
                  fill
                  className="object-cover p-1"
                />
              </div>
            ) : (
              <Image
                src={image.url}
                // key={index}
                alt={productName}
                fill
                className="object-cover p-1"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
