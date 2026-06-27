"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import products from "@/data/products/json/index.json";
import { ChevronRight, LayoutGrid, List } from "lucide-react";
const categories = [
  { key: "All Products", value: "AllProducts" },
  { key: "Doors", value: "Doors" },
  { key: "Metal Clad Door", value: "MetalCladDoor" },
  { key: "Industries", value: "Industries" },
  { key: "Panel Protection & Accessories", value: "PanelAccessory" },
];

// export const metadata = {
//   title: "Products",
//   description:
//     "Explore Motisan's range of insulated panel doors, cold room doors, freezer doors and modular building products.",
// };
// const products = [
//   {
//     name: "UniDoor",
//     category: "Doors",
//     image: "/images/products/unidoor/ArmourGrey.jpg",
//     description: "Versatile metal clad doors for multiple applications.",
//   },
//   {
//     name: "Donga Door (Outswing)",
//     category: "Doors",
//     image: "/images/products/donga-door-outswing/hero.png",
//     description: "Outward opening door solution for project sites.",
//   },
//   {
//     name: "Donga Door (Inswing)",
//     category: "Doors",
//     image: "/images/products/donga-door-inswing/hero.png",
//     description: "Inward opening door solution for project sites.",
//   },
// ];

export default function CategoryPage() {
  const [activeCategory, setActiveCategory] = useState("AllProducts");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "AllProducts") return products;

    return products.filter(
      (product) =>
        product.category === activeCategory || product.type === activeCategory,
    );
  }, [activeCategory]);

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative h-[420px] overflow-hidden">
        <Image
          src="/img/category-bg4.png"
          alt=""
          fill
          className="object-cover"
        />

        <div className="absolute inset-0" />

        <div className="relative mx-auto flex h-full max-w-[1440px] items-center lg:pl-20 sm:pl-6">
          <div className="max-w-[500px]">
            <h1 className="mb-4 text-6xl font-bold text-[#002D72]">Products</h1>

            <p className="text-xl text-slate-700">
              High-quality doors, windows and materials engineered for insulated
              panel systems.
            </p>
          </div>
        </div>
      </section>

      {/* BREADCRUMB */}
      {/* breadcrumb */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-5 lg:px-10">
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <Link href="/">Home</Link>

            <ChevronRight className="h-4 w-4" />

            <Link href="/products">Products</Link>

            <ChevronRight className="h-4 w-4" />

            {/* <ChevronRight className="h-4 w-4" /> */}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-[1440px] px-6 py-10">
        <div className="flex gap-10">
          {/* FILTER */}
          <aside className="hidden w-[280px] shrink-0 rounded-2xl border bg-white p-6 lg:block">
            <h3 className="mb-8 text-lg font-semibold">Filter by</h3>

            <div className="space-y-4">
              <label className="flex gap-3">
                <input type="checkbox" />
                Doors
              </label>

              <label className="flex gap-3">
                <input type="checkbox" />
                Windows
              </label>

              <label className="flex gap-3">
                <input type="checkbox" />
                Hardware
              </label>

              <label className="flex gap-3">
                <input type="checkbox" />
                Protective Materials
              </label>
            </div>
          </aside>

          {/* RIGHT */}
          <div className="min-w-0 flex-1">
            {/* CATEGORY NAV */}
            <div className="mb-10 flex flex-wrap gap-4">
              {categories.map((item) => (
                <button
                  key={item.key}
                  onClick={() => setActiveCategory(item.value)}
                  className={`rounded-full px-8 py-4 text-sm font-semibold transition ${
                    activeCategory === item.key
                      ? "bg-[#002D72] text-white"
                      : "border border-gray-200 bg-white hover:border-[#002D72]"
                  }`}
                >
                  {item.key}
                </button>
              ))}
            </div>

            {/* TOP BAR */}
            <div className="mb-8 flex items-center justify-between">
              <p className="text-slate-500">
                Showing {filteredProducts.length} products
              </p>

              <div className="flex items-center gap-3">
                <select className="rounded-xl border px-4 py-3">
                  <option>Featured</option>
                </select>

                <button
                  onClick={() => setViewMode("grid")}
                  className={`rounded-lg border p-3 ${
                    viewMode === "grid"
                      ? "border-[#002D72] text-[#002D72]"
                      : "border-gray-200 text-gray-400"
                  }`}
                >
                  <LayoutGrid size={18} />
                </button>

                <button
                  onClick={() => setViewMode("list")}
                  className={`rounded-lg border p-3 ${
                    viewMode === "list"
                      ? "border-[#002D72] text-[#002D72]"
                      : "border-gray-200 text-gray-400"
                  }`}
                >
                  <List size={18} />
                </button>
              </div>
            </div>

            {/* PRODUCT GRID */}
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4"
                  : "flex flex-col gap-4"
              }
            >
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.name}
                  product={product}
                  viewMode={viewMode}
                />
              ))}
            </div>

            {/* PAGINATION */}
            <div className="mt-12 flex justify-center gap-3">
              <button className="h-10 w-10 rounded border">1</button>
              <button className="h-10 w-10 rounded border">2</button>
              <button className="h-10 w-10 rounded border">3</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const ProductCard = ({ product, viewMode }) => {
  return (
    <article
      key={product.name}
      className={`overflow-hidden rounded-[5px] border bg-white hover:border-[#002D72] ${
        viewMode === "list" ? "flex" : ""
      }`}
    >
      <div
        className={`relative ${
          viewMode === "list" ? "h-[220px] w-[320px] shrink-0" : "aspect-[4/3]"
        }`}
      >
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

          <a className="font-medium text-[#002D72]" href={`/products/${product.slug}`} rel="noopener noreferrer">View Details →</a>
        {/* <button className="font-medium text-[#002D72]">View Details →</button> */}
      </div>
    </article>
  );
};
