"use client";

import { useState } from "react";

import products from "@/data/products/json/index.json";
import Image from "next/image";
import Link from "next/link";

import { ArrowRight, Grid2x2 } from "lucide-react";

const categories = [
  { key: "All Products", value: "AllProducts" },
  { key: "Doors", value: "Doors" },
  { key: "Metal Clad Door", value: "MetalCladDoor" },
  { key: "Industries", value: "Industries" },
  { key: "Panel Protection & Accessories", value: "PanelAccessory" },
];

export default function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState("AllProducts");

  const filteredProducts =
    activeCategory === "AllProducts"
      ? products
      : products.filter(
          (product) =>
            product.category === activeCategory ||
            product.type === activeCategory,
        );
  console.log(activeCategory, filteredProducts);
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
            Discover our carefully curated range of high-quality products,
            designed to meet your needs with innovation and craftsmanship.
          </p>
        </div>
        <section className="mx-auto max-w-[1440px] px-6 py-10">
          <div className="flex gap-10">
            {/* FILTER */}

            {/* RIGHT */}
            <div className="min-w-0 flex-1">
              {/* CATEGORY NAV */}
              <div className="mb-10 flex flex-wrap justify-center gap-4">
                {categories.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => setActiveCategory(item.value)}
                    className={`rounded-full px-8 py-4 text-sm font-semibold transition ${
                      activeCategory === item.value
                        ? "bg-[#002D72] text-white"
                        : "border border-gray-200 bg-white hover:border-[#002D72]"
                    }`}
                  >
                    {item.key}
                  </button>
                ))}
              </div>

              {/* PRODUCT GRID */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
                {filteredProducts.slice(0, 3).map((product) => (
                  <ProductCard key={product.name} product={product} />
                ))}
                <Link
                  href="/products"
                  className="

    group

    flex flex-col items-center justify-center

    rounded-[5px]

    border-2 border-dashed border-slate-200

    bg-white

    p-8

    text-center

    transition-all

    hover:border-[#002D72]

    hover:bg-slate-50

  "
                >
                  <div
                    className="

      mb-6

      flex h-20 w-20 items-center justify-center

      rounded-full

      bg-slate-100

      transition-all

      group-hover:bg-[#002D72]/10

    "
                  >
                    <Grid2x2 size={36} className="text-[#002D72]" />
                  </div>

                  <h3 className="mb-3 text-2xl font-normal text-[#0A214A]">
                    View More Products
                  </h3>

                  <p className="mb-8 max-w-[240px] text-slate-500">
                    Explore our complete range of access solutions.
                  </p>

                  <ArrowRight
                    size={30}
                    className="

      text-[#002D72]

      transition-transform

      group-hover:translate-x-2

    "
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* filters */}
        {/* <div className="mt-14 flex flex-wrap items-center justify-center gap-5">

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

        </div> */}

        {/* grid */}
        {/* <div
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
        </div> */}
      </div>
    </section>
  );
}

const ProductCard = ({ product }) => {
  return (
    <article
      key={product.name}
      className="overflow-hidden rounded-[5px] border bg-white hover:border-[#002D72] hover:pointer-events-auto"
    >
      <div className="relative aspect-[4/3]">
        <Image
          src={product.thumbnail || "/logo/unknown-img.png"}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <p className="mb-2 text-xs uppercase tracking-wide text-slate-400">
          {product.category}
        </p>

        <h3 className="mb-3 text-xl font-semibold">{product.name}</h3>

        <p className="mb-6 text-sm text-slate-600">{product.subtitle}</p>

        <a
          className="font-medium text-[#002D72]"
          href={`/products/${product.slug}`}
          rel="noopener noreferrer"
        >
          View Details →
        </a>
        {/* <button className="font-medium text-[#002D72]">View Details →</button> */}
      </div>
    </article>
  );
};
