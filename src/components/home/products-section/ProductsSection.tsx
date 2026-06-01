"use client";

import { useState } from "react";

import ProductCard from "./ProductCard";
import products from "@/data/products/json/index.json";

// const products = [
//   {
//     category: "Doors",
//     title: "Insulated Sectional Door",
//     description:
//       "High-performance insulated sectional doors for industrial environments.",
//     image:
//       "/images/products/sectional-door.jpg",
//   },

//   {
//     category: "Doors",
//     title: "UniDoor",
//     description:
//       "Versatile steel hinged doors designed for modular buildings.",
//     image:
//       "/images/products/unidoor.jpg",
//   },

//   {
//     category: "Windows",
//     title: "Flush Window",
//     description:
//       "Cleanroom flush window systems for insulated panel applications.",
//     image:
//       "/images/products/window.jpg",
//   },

//   {
//     category: "Protective Materials",
//     title: "Protective Film",
//     description:
//       "Premium protection materials for insulated panel systems.",
//     image:
//       "/images/products/film.jpg",
//   },
// ];

export default function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState("All Products");

  const filteredProducts =
    activeCategory === "All Products"
      ? products
      : products.filter(
          (product) => product.category === activeCategory
        );

  return (
    <section className="bg-[#fafafa] py-28">

      <div className="mx-auto max-w-[1440px] px-5 lg:px-8">

        {/* heading */}
        <div className="mx-auto max-w-[900px] text-center">

          <h2
            className="
              text-[52px]
              font-bold
              leading-[1]
              tracking-tight
              text-[#0A2A66]
            "
          >
            Explore our range of products
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-[720px]
              text-[18px]
              leading-8
              text-gray-500
            "
          >
            Discover our carefully curated range of
            high-quality products, designed to meet your
            needs with innovation and craftsmanship.
          </p>

        </div>

        {/* filters */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-5">

          <button
            onClick={() => setActiveCategory("All Products")}
            className={`
              flex
              items-center
              gap-3
              rounded-full
              px-10
              py-5
              text-[18px]
              transition-all
              ${
                activeCategory === "All Products"
                  ? "bg-[#002D72] font-semibold text-white shadow-[0_10px_30px_rgba(0,45,114,0.18)]"
                  : "border border-[#E3E8EF] bg-white font-medium text-[#0A2A66]"
              }
            `}
          >
            All Products
          </button>

          <button
            onClick={() => setActiveCategory("Doors")}
            className={`
              flex
              items-center
              gap-3
              rounded-full
              px-10
              py-5
              text-[18px]
              transition-all
              ${
                activeCategory === "Doors"
                  ? "bg-[#002D72] font-semibold text-white shadow-[0_10px_30px_rgba(0,45,114,0.18)]"
                  : "border border-[#E3E8EF] bg-white font-medium text-[#0A2A66]"
              }
            `}
          >
            🚪 Doors
          </button>

          <button
            onClick={() => setActiveCategory("Windows")}
            className={`
              flex
              items-center
              gap-3
              rounded-full
              px-10
              py-5
              text-[18px]
              transition-all
              ${
                activeCategory === "Windows"
                  ? "bg-[#002D72] font-semibold text-white shadow-[0_10px_30px_rgba(0,45,114,0.18)]"
                  : "border border-[#E3E8EF] bg-white font-medium text-[#0A2A66]"
              }
            `}
          >
            🪟 Windows
          </button>

          <button
            className="
              flex
              items-center
              gap-3
              rounded-full
              border
              border-[#E3E8EF]
              bg-white
              px-10
              py-5
              text-[18px]
              font-medium
              text-[#0A2A66]
              transition-all
              hover:border-[#C7D2E0]
            "
          >
            🛠️ Hardware & Accessories
          </button>

          <button
            onClick={() => setActiveCategory("Protective Materials")}
            className={`
              flex
              items-center
              gap-3
              rounded-full
              px-10
              py-5
              text-[18px]
              transition-all
              ${
                activeCategory === "Protective Materials"
                  ? "bg-[#002D72] font-semibold text-white shadow-[0_10px_30px_rgba(0,45,114,0.18)]"
                  : "border border-[#E3E8EF] bg-white font-medium text-[#0A2A66]"
              }
            `}
          >
            🛡️ Protective Materials
          </button>

          <button
            className="
              flex
              items-center
              gap-3
              rounded-full
              border
              border-[#E3E8EF]
              bg-white
              px-10
              py-5
              text-[18px]
              font-medium
              text-[#0A2A66]
              transition-all
              hover:border-[#C7D2E0]
            "
          >
            📦 Custom / OEM Solutions
          </button>

        </div>

        {/* grid */}
        <div
          className="
            mt-16
            grid
            gap-8
            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.name}
              {...product}
            />
          ))}
        </div>

      </div>

    </section>
  );
}