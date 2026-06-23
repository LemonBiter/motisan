"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  FileText,
  Headphones,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";

const capabilityItems = [
  {
    title: "Australian Designed",
    text: "Built for local conditions",
    icon: ShieldCheck,
  },
  {
    title: "Industry Focused",
    text: "Specialists in insulated panel systems",
    icon: Wrench,
  },
  {
    title: "National Supply",
    text: "Reliable support across Australia",
    icon: Truck,
  },
  {
    title: "Partner Approach",
    text: "Working with you for long term success",
    icon: Headphones,
  },
];

const heroStats = [
  "Insulated panel doors",
  "Industrial access solutions",
  "Project supply support",
];

const featuredProducts = [
  {
    name: "UniDoor",
    category: "Metal Clad Door",
    description:
      "Pre-hung insulated steel doorsets designed for cleanrooms, insulated panel rooms and industrial facilities.",
    image: "/images/products/unidoor/ArmourGreywithWindow.jpg",
    href: "/products/unidoor",
  },
  {
    name: "Insulated Sectional Door",
    category: "Industrial Door",
    description:
      "High-performance insulated sectional doors for commercial and industrial applications.",
    image: "/images/products/insulatedSectionalDoor/6.jpeg",
    href: "/products/insulated-sectional-door",
  },
  {
    name: "Metal Protective Film",
    category: "Protective Materials",
    description:
      "PE protective film engineered for sandwich panel and metal surface protection.",
    image: "/images/products/metalProtectiveFilm/metalProtectiveFilm.png",
    href: "/products/metal-protective-film",
  },
  {
    name: "Donga Door",
    category: "Cyclone Rated Door",
    description:
      "Cyclone rated steel door options for project sites and industrial applications.",
    image: "/images/products/dongaDoorOutswing/dongaDoorOutswing-3.jpg",
    href: "/products/donga-door-outswing",
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex(
      (current) =>
        (current - 1 + featuredProducts.length) % featuredProducts.length,
    );
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % featuredProducts.length);
  };

  return (
    <section className="bg-white">
      <div className="relative overflow-hidden border-b border-gray-200 bg-[#f5f7fb]">
        <Image
          src="/img/homepage-bg3.png"
          alt="Industrial insulated panel access system"
          fill
          priority
          className="object-cover object-center"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-white/45" /> */}
        {/* <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" /> */}

        <div className="relative mx-auto grid min-h-[620px] max-w-[1440px] items-center gap-10 px-5 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-20">
          <div className="max-w-[680px]">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-[#00347d]">
              Modular access. Built better.
            </p>

            <h1 className="text-5xl font-black leading-[0.96] tracking-tight text-[#00347d] sm:text-6xl lg:text-7xl">
              Enhancing a better insulated panel system.
            </h1>

            <p className="mt-7 max-w-[620px] text-lg leading-8 text-slate-700">
              Motisan supplies high-performance access products for insulated
              panel systems, helping projects improve installation efficiency,
              durability and long-term performance.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-[5px] hover:bg-[#0A2A66] px-8 py-4 font-semibold text-white transition bg-[#a90028]"
              >
                Request a Quote
                <FileText className="h-5 w-5" />
              </Link>

              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 rounded-[5px] border border-[#00347d] bg-white px-8 py-4 font-semibold text-[#00347d] transition hover:bg-[#00347d] hover:text-white"
              >
                View Products
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {heroStats.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-gray-200 bg-white/90 px-4 py-2 text-sm font-semibold text-[#06183a] shadow-[0_10px_30px_rgba(6,24,58,0.06)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[620px]">
              <div className="relative h-[520px] sm:h-[560px] lg:h-[520px]">
                {featuredProducts.map((product, index) => {
                  const offset =
                    (index - activeIndex + featuredProducts.length) %
                    featuredProducts.length;
                  const position =
                    offset === 0
                      ? "active"
                      : offset === 1
                        ? "next"
                        : offset === featuredProducts.length - 1
                          ? "previous"
                          : "hidden";

                  const positionClasses = {
                    active:
                      "z-30 translate-x-0 scale-100 opacity-100 blur-0",
                    previous:
                      "z-20 -translate-x-[18%] scale-[0.88] opacity-70 blur-[1px]",
                    next: "z-20 translate-x-[18%] scale-[0.88] opacity-70 blur-[1px]",
                    hidden: "z-10 translate-x-0 scale-75 opacity-0 pointer-events-none",
                  };

                  return (
                    <div
                      role="button"
                      tabIndex={0}
                      key={product.name}
                      onClick={() => setActiveIndex(index)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          setActiveIndex(index);
                        }
                      }}
                      className={`absolute left-1/2 top-1/2 w-[78%] max-w-[430px] -translate-x-1/2 -translate-y-1/2 text-left transition-all duration-500 ${positionClasses[position]}`}
                      aria-label={`Show ${product.name}`}
                    >
                      <ProductFeatureCard product={product} active={index === activeIndex} />
                    </div>
                  );
                })}
              </div>

              <div className="-mt-4 flex items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={goToPrevious}
                  aria-label="Previous product"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-[#00347d] shadow-[0_12px_30px_rgba(6,24,58,0.08)] transition hover:border-[#00347d]"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <div className="flex gap-2">
                  {featuredProducts.map((product, index) => (
                    <button
                      type="button"
                      key={product.name}
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Select ${product.name}`}
                      className={`h-2.5 rounded-full transition-all ${
                        activeIndex === index
                          ? "w-8 bg-[#00347d]"
                          : "w-2.5 bg-slate-300 hover:bg-slate-400"
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={goToNext}
                  aria-label="Next product"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-[#00347d] shadow-[0_12px_30px_rgba(6,24,58,0.08)] transition hover:border-[#00347d]"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto grid max-w-[1440px] gap-5 px-5 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
          {capabilityItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[5px] border border-[#00347d]/20 bg-white text-[#00347d]">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-[#06183a]">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProductFeatureCard({
  product,
  active,
}: {
  product: {
    name: string;
    category: string;
    description: string;
    image: string;
    href: string;
  };
  active: boolean;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[5px] border bg-white/90 p-5 shadow-[0_24px_90px_rgba(6,24,58,0.12)] backdrop-blur transition ${
        active ? "border-white/80" : "border-white/60"
      }`}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-[5px] bg-[#f5f7fb]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-500"
        />
      </div>

      <div className="mt-5">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#00347d]">
          {product.category}
        </p>
        <h2 className="mt-2 text-2xl font-black text-[#06183a]">
          {product.name}
        </h2>
        <p className="mt-3 min-h-[84px] leading-7 text-slate-600">
          {product.description}
        </p>

        {active ? (
          <Link
            href={product.href}
            className="mt-5 inline-flex items-center gap-2 font-semibold text-[#00347d] transition hover:translate-x-1"
          >
            View Details
            <ArrowRight className="h-4 w-4" />
          </Link>
        ) : (
          <span className="mt-5 inline-flex items-center gap-2 font-semibold text-[#00347d]">
            Select Product
            <ArrowRight className="h-4 w-4" />
          </span>
        )}
      </div>
    </div>
  );
}
