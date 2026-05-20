"use client";

import { useState } from "react";
import {
  ChevronUp,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import products from "@/data/products/json/index.json";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      {/* Top Contact Bar */}
      <div className="hidden border-b border-white/10 bg-gradient-to-r from-[#041B44] to-[#0145a7] text-white md:block">
        <div className="mx-auto flex h-12 max-w-[1440px] items-center justify-between px-5 text-sm lg:px-8">
          {/* Left */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-white/90">
              <MapPin className="h-4 w-4" />
              <span>66 Export Drive, East Arm, NT 0822</span>
            </div>

            <div className="flex items-center gap-2 text-white/90">
              <Mail className="h-4 w-4" />
              <span>sales@motisan.com.au</span>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-2 font-medium text-white">
            <Phone className="h-4 w-4" />
            <span>1800MOTISAN (1800 668 472)</span>
          </div>
        </div>
      </div>

      {/* Mobile Contact Bar */}
      <div className="border-b border-white/10 bg-gradient-to-r from-[#041B44] to-[#0145a7] px-5 py-2 text-xs text-white md:hidden">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-hidden">
            <Phone className="h-3.5 w-3.5 min-w-[14px]" />
            <span className="truncate">1800 668 472</span>
          </div>

          <div className="flex items-center gap-2 overflow-hidden">
            <Mail className="h-3.5 w-3.5 min-w-[14px]" />
            <span className="truncate">sales@motisan.com.au</span>
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 lg:h-[96px] lg:px-8">
        <div>
          {/* <h1 className="text-3xl font-black text-[#0A2A66] lg:text-5xl">
            MOTISAN
          </h1> */}
          <Image
            src="/logo/logo.svg"
            alt="Motisan Logo"
            width={240}
            height={70}
            priority
          />
          <p className="hidden text-[10px] mt-2 tracking-[0.3em] text-gray-400 lg:block">
            MODULAR ACCESS. BUILT BETTER.
          </p>
        </div>

        <nav className="hidden items-center gap-12 lg:flex">
          <Link href="/">
            <button
              className="font-medium text-gray-700 transition hover:text-[rgb(10,42,102)] border-b-2

    border-transparent hover:border-[#0A2A66]"
            >
              home
            </button>
          </Link>
          <div className="group relative">
            <div className="flex justify-center items-center">
              <button className="font-medium text-gray-700 transition hover:text-[#0A2A66] border-b-2 border-transparent group-hover:border-[#0A2A66]">
                Products
              </button>
              <ChevronUp className="ml-2 h-4 w-4 transition duration-200 group-hover:rotate-180" />
            </div>

            <div className="invisible absolute left-1/2 top-12 z-50 w-[1050px] -translate-x-1/2 rounded-[32px] border border-gray-200 bg-white p-10 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="grid grid-cols-3 gap-10">
                <div>
                  <h3 className="mb-6 text-2xl font-bold text-[#0A2A66]">
                    Doors
                  </h3>

                  <div className="space-y-4">
                    {products.map((product) => (
                      <Link
                        key={product.slug}
                        href={`/products/${product.slug}`}
                      >
                        <div
                          key={product.slug}
                          className="rounded-2xl border border-gray-100 p-5 transition hover:bg-gray-50"
                        >
                          <div className="h-24 rounded-xl bg-gray-100"></div>

                          <h4 className="mt-4 text-lg font-semibold text-[#0A2A66]">
                            {product.name}
                          </h4>

                          <p className="mt-2 text-sm leading-6 text-gray-500">
                            {product.subtitle}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-6 text-2xl font-bold text-[#0A2A66]">
                    Windows
                  </h3>

                  <div className="space-y-4">
                    <div className="rounded-2xl border border-gray-100 p-5 transition hover:bg-gray-50">
                      <div className="h-24 rounded-xl bg-gray-100"></div>

                      <h4 className="mt-4 text-lg font-semibold text-[#0A2A66]">
                        Flush Window
                      </h4>

                      <p className="mt-2 text-sm leading-6 text-gray-500">
                        Cleanroom flush window systems
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-6 text-2xl font-bold text-[#0A2A66]">
                    Hardware
                  </h3>

                  <div className="space-y-4">
                    <div className="rounded-2xl border border-gray-100 p-5 transition hover:bg-gray-50">
                      <div className="h-24 rounded-xl bg-gray-100"></div>

                      <h4 className="mt-4 text-lg font-semibold text-[#0A2A66]">
                        Handles & Hinges
                      </h4>

                      <p className="mt-2 text-sm leading-6 text-gray-500">
                        Industrial hardware systems
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button className="font-medium text-gray-700 transition hover:text-[#0A2A66] border-b-2 border-transparent hover:border-[#0A2A66]">
            Services
          </button>

          <button className="font-medium text-gray-700 transition hover:text-[#0A2A66] border-b-2 border-transparent hover:border-[#0A2A66]">
            About
          </button>
          <button className="font-medium text-gray-700 transition hover:text-[#0A2A66] border-b-2 border-transparent hover:border-[#0A2A66]">
            Contact
          </button>
        </nav>

        <div className="hidden lg:block">
          <button className="rounded-[5px] bg-[#0145a7] hover:bg-[#0A2A66]  px-7 py-4 text-sm font-semibold text-white">
            Request Quote
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl border border-gray-200 p-3 lg:hidden"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="border-t border-gray-100 bg-white lg:hidden">
          <div className="space-y-5 px-5 py-6">
            <button className="block text-lg font-semibold text-[#0A2A66]">
              Home
            </button>

            <button className="block text-lg font-semibold text-[#0A2A66]">
              Products
            </button>

            <button className="block text-lg font-semibold text-[#0A2A66]">
              Industries
            </button>

            <button className="block text-lg font-semibold text-[#0A2A66]">
              Solutions
            </button>

            <button className="mt-4 w-full rounded-2xl bg-[#0A2A66] px-6 py-4 font-semibold text-white">
              Request Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
