// src/components/home/products-section/ProductCard.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ProductCardProps {
  name: string;
  category: string;
  subtitle: string;
  thumbnail: string;
}

export default function ProductCard({
  name,
  category,
  subtitle,
  thumbnail,
}: ProductCardProps) {

  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        group
        overflow-hidden
        rounded-[28px]
        border
        border-gray-200
        bg-white
      "
    >

      {/* image */}
      <div
        className="
          relative
          aspect-[4/3]
          overflow-hidden
          bg-[#f5f5f5]
        "
      >
        <Image
          src={thumbnail}
          alt={name}
          fill
          className="
            object-cover
            transition
            duration-500
            group-hover:scale-105
          "
        />
      </div>

      {/* content */}
      <div className="p-8">

        <p
          className="
            text-[12px]
            font-semibold
            uppercase
            tracking-[0.18em]
            text-[#0145a7]
          "
        >
          {category}
        </p>

        <h3
          className="
            mt-4
            text-[30px]
            font-bold
            leading-[1.1]
            tracking-tight
            text-[#0A2A66]
          "
        >
          {name}
        </h3>

        <p
          className="
            mt-5
            text-[16px]
            leading-8
            text-gray-500
          "
        >
          {subtitle}
        </p>

        <button
          className="
            mt-8
            text-[16px]
            font-semibold
            text-[#0145a7]
          "
        >
          View Details →
        </button>

      </div>

    </motion.div>
  );
}