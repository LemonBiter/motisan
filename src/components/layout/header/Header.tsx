"use client";

import { useState } from "react";
import {
  ChevronUp,
  MapPin,
  Mail,
  Phone,
  DoorOpen,
  Factory,
  ShieldPlus,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import products from "@/data/products/json/index.json";
import MenuItem from "@/components/product/MenuItem";

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
          <div className="group">
            <div className="flex items-center justify-center border-b-2 border-transparent pb-1 transition group-hover:border-[#0145a7]">
              <button className="font-medium text-gray-700 transition hover:text-[#0A2A66]">
                Products
              </button>

              <ChevronUp className="ml-2 h-4 w-4 rotate-180 transition duration-300 group-hover:rotate-0" />
            </div>

            {/* <div className="absolute left-1/2 top-[128px] z-50 w-screen max-h-[640px] max-w-[1440px]  -translate-x-1/2 overflow-scroll rounded-[4px] border border-gray-200 bg-white  shadow-[0_25px_80px_rgba(0,0,0,0.12)] transition-all duration-300 group-hover:visible group-hover:opacity-100"> */}
            <div className="invisible opacity-0 absolute left-1/2 top-[128px] z-50 w-screen max-w-[1440px]  -translate-x-1/2 overflow-hidden rounded-[4px] border border-gray-200 bg-white  shadow-[0_25px_80px_rgba(0,0,0,0.12)] transition-all duration-300 group-hover:visible group-hover:opacity-100">
              <div className="grid grid-cols-[350px_1fr_1fr_1fr_250px]">
                {/* Left Intro */}
                <div className="border-r border-gray-200 bg-[#fafafa] p-10 bg-[url('/img/popup-bg-2.png')] bg-contain bg-no-repeat bg-right-bottom">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0145a7]">
                    Our Products
                  </p>

                  <h2 className="mt-5 text-[21px] font-[600] leading-[1.1] tracking-tight text-[#000000]">
                    Quality products for insulated panel systems
                  </h2>

                  <div className="mt-8 h-[4px] w-16 rounded-full bg-[#0145a7]" />

                  <p className="mt-8 text-[15px] leading-2 text-gray-800">
                    Motisan supplies a comprehensive range of doors, windows,
                    protective materials and accessories for insulated panel
                    systems.
                  </p>

                  <p className="mt-6 text-[15px] font-bold text-[#000000]">
                    We supply. You build.
                  </p>

                  <div className="mt-10 overflow-hidden rounded-[20px]"></div>
                </div>

                {/* Doors */}

                <div className="border-r border-gray-200 px-3 py-10">
                  <div className="mb-8 flex items-center gap-4">
                    <DoorOpen size={30} color="#0A2A66" />

                    <h3 className="text-[18px] font-bold text-[#0A2A66]">
                      Metal Clad Doors
                    </h3>
                  </div>

                  <div className="space-y-5">
                    {products.map((product) => (
                      <MenuItem
                        key={product.slug}
                        slug={product.slug}
                        name={product.name}
                        subtitle={product.subtitle}
                        thumbnail={product.thumbnail}
                      />
                    ))}
                  </div>
                </div>
                <div className="border-r border-gray-200 px-3 py-10">
                  <div className="mb-8 flex items-center gap-4">
                    <Factory size={30} color="#0A2A66" />

                    <h3 className="text-[18px] font-bold text-[#0A2A66]">
                      Industries
                    </h3>
                  </div>

                  <div className="space-y-5">
                    {products.map((product) => (
                      <MenuItem
                        key={product.slug}
                        slug={product.slug}
                        name={product.name}
                        subtitle={product.subtitle}
                        thumbnail={product.thumbnail}
                      />
                    ))}
                  </div>
                </div>

                <div className="pl-3 pr-5 py-10">
                  <div className="mb-8 flex items-center gap-4">
                    <ShieldPlus size={30} color="#0A2A66" />

                    <h3 className="text-[18px] font-bold text-[#0A2A66]">
                      Panel Accessories
                    </h3>
                  </div>

                  <div className="space-y-5">
                    {products.map((product, index) => (
                      <MenuItem
                        key={product.slug}
                        slug={product.slug}
                        name={product.name}
                        subtitle={product.subtitle}
                        thumbnail={product.thumbnail}
                        lastOne={index === products.length - 1}
                      />
                    ))}
                  </div>
                </div>
                {/* Windows */}

                {/* Hardware */}
                {/* <div className=" p-10">
                  <div className="mb-8 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#0145a7]/20 bg-[#0145a7]/5">
                      <span className="text-xl text-[#0145a7]">🛠️</span>
                    </div>

                    <h3 className="text-[28px] font-bold text-[#0A2A66]">
                      Hardware
                    </h3>
                  </div>

                  <div className="space-y-4 text-[16px] text-gray-700">
                    <div className="flex items-center justify-between rounded-xl px-3 py-3 transition hover:bg-gray-50">
                      <span>Hinges</span>
                      <span>›</span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl px-3 py-3 transition hover:bg-gray-50">
                      <span>Locks</span>
                      <span>›</span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl px-3 py-3 transition hover:bg-gray-50">
                      <span>Handles</span>
                      <span>›</span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl px-3 py-3 transition hover:bg-gray-50">
                      <span>Door Hardware</span>
                      <span>›</span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl px-3 py-3 transition hover:bg-gray-50">
                      <span>Panel Accessories</span>
                      <span>›</span>
                    </div>
                  </div>
                </div> */}

                {/* Right CTA */}
                <div className="pr-2 py-5">
                  <div className="bg-[#eff3f9] rounded-2xl px-4 py-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0145a7]">
                      Need Help Finding
                    </p>

                    <h3 className="mt-5 text-[24px] font-[400] leading-[1.1] tracking-tight text-[#000000]">
                      The right solution for your project?
                    </h3>

                    <div className="mt-8 h-[4px] w-16 rounded-full bg-[#0145a7]" />

                    <div className="mt-10 space-y-8">
                      <div className="flex gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-200 bg-white text-2xl">
                          🎧
                        </div>

                        <div>
                          <h4 className="font-semibold text-[#0A2A66]">
                            Expert advice
                          </h4>

                          <p className="mt-2 text-sm leading-2 text-gray-500">
                            Our team is here to help choose the best solution.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-200 bg-white text-2xl">
                          🛡️
                        </div>

                        <div>
                          <h4 className="font-semibold text-[#0A2A66]">
                            Quality you can trust
                          </h4>

                          <p className="mt-2 text-sm leading-2 text-gray-500">
                            Built for Australian industrial environments.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-200 bg-white text-2xl">
                          🇦🇺
                        </div>

                        <div>
                          <h4 className="font-semibold text-[#0A2A66]">
                            Australia wide supply
                          </h4>

                          <p className="mt-2 text-sm leading-2 text-gray-500">
                            Reliable supply and support nationwide.
                          </p>
                        </div>
                      </div>
                    </div>

                    <button className="mt-8 ml-8 w-[80%] rounded-[5px] bg-[#0145a7] px-6 py-5 text-[16px] font-semibold text-white transition hover:bg-[#0A2A66]">
                      Talk to Sales →
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom Strip */}
              <div className="grid grid-cols-5 gap-8 bg-gradient-to-r from-[#041B44] to-[#0145a7] px-10 py-6 text-white">
                <div>
                  <h4 className="font-semibold">Australian Designed</h4>
                  <p className="mt-2 text-sm text-white/70">
                    Built for local conditions
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">Industry Focused</h4>
                  <p className="mt-2 text-sm text-white/70">
                    Specialists in insulated panel systems
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">Quality Products</h4>
                  <p className="mt-2 text-sm text-white/70">
                    Tested, certified and built to perform
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">National Supply</h4>
                  <p className="mt-2 text-sm text-white/70">
                    Fast, reliable delivery across Australia
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">Partner Approach</h4>
                  <p className="mt-2 text-sm text-white/70">
                    Working with you for long term success
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="group">
            <div className="flex items-center justify-center border-b-2 border-transparent pb-1 transition group-hover:border-[#0145a7]">
              <button className="font-medium text-gray-700 transition hover:text-[#0A2A66]">
                Industries
              </button>

              <ChevronUp className="ml-2 h-4 w-4 rotate-180 transition duration-300 group-hover:rotate-0" />
            </div>

            {/* <div className="absolute left-1/2 top-[128px] z-50 w-screen max-h-[640px] max-w-[1440px]  -translate-x-1/2 overflow-scroll rounded-[4px] border border-gray-200 bg-white  shadow-[0_25px_80px_rgba(0,0,0,0.12)] transition-all duration-300 group-hover:visible group-hover:opacity-100"> */}
            <div className="invisible opacity-0 absolute left-1/2 top-[128px] z-50 w-screen max-w-[1440px]  -translate-x-1/2 overflow-hidden rounded-[4px] border border-gray-200 bg-white  shadow-[0_25px_80px_rgba(0,0,0,0.12)] transition-all duration-300 group-hover:visible group-hover:opacity-100">
              <div className="grid grid-cols-[350px_1fr_1fr_1fr_250px]">
                {/* Left Intro */}
                <div className="border-r border-gray-200 bg-[#fafafa] p-10 bg-[url('/img/popup-bg-2.png')] bg-contain bg-no-repeat bg-right-bottom">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0145a7]">
                    Our Products
                  </p>

                  <h2 className="mt-5 text-[21px] font-[600] leading-[1.1] tracking-tight text-[#000000]">
                    Quality products for insulated panel systems
                  </h2>

                  <div className="mt-8 h-[4px] w-16 rounded-full bg-[#0145a7]" />

                  <p className="mt-8 text-[15px] leading-2 text-gray-800">
                    Motisan supplies a comprehensive range of doors, windows,
                    protective materials and accessories for insulated panel
                    systems.
                  </p>

                  <p className="mt-6 text-[15px] font-bold text-[#000000]">
                    We supply. You build.
                  </p>

                  <div className="mt-10 overflow-hidden rounded-[20px]"></div>
                </div>

                {/* Doors */}

                <div className="border-r border-gray-200 px-3 py-10">
                  <div className="mb-8 flex items-center gap-4">
                    <DoorOpen size={30} color="#0A2A66" />

                    <h3 className="text-[18px] font-bold text-[#0A2A66]">
                      Metal Clad Doors
                    </h3>
                  </div>

                  <div className="space-y-5">
                    {products.map((product) => (
                      <MenuItem
                        key={product.slug}
                        slug={product.slug}
                        name={product.name}
                        subtitle={product.subtitle}
                        thumbnail={product.thumbnail}
                      />
                    ))}
                  </div>
                </div>
                <div className="border-r border-gray-200 px-3 py-10">
                  <div className="mb-8 flex items-center gap-4">
                    <Factory size={30} color="#0A2A66" />

                    <h3 className="text-[18px] font-bold text-[#0A2A66]">
                      Industries
                    </h3>
                  </div>

                  <div className="space-y-5">
                    {products.map((product) => (
                      <MenuItem
                        key={product.slug}
                        slug={product.slug}
                        name={product.name}
                        subtitle={product.subtitle}
                        thumbnail={product.thumbnail}
                      />
                    ))}
                  </div>
                </div>

                <div className="pl-3 pr-5 py-10">
                  <div className="mb-8 flex items-center gap-4">
                    <ShieldPlus size={30} color="#0A2A66" />

                    <h3 className="text-[18px] font-bold text-[#0A2A66]">
                      Panel Accessories
                    </h3>
                  </div>

                  <div className="space-y-5">
                    {products.map((product, index) => (
                      <MenuItem
                        key={product.slug}
                        slug={product.slug}
                        name={product.name}
                        subtitle={product.subtitle}
                        thumbnail={product.thumbnail}
                        lastOne={index === products.length - 1}
                      />
                    ))}
                  </div>
                </div>
                {/* Windows */}

                {/* Hardware */}
                {/* <div className=" p-10">
                  <div className="mb-8 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#0145a7]/20 bg-[#0145a7]/5">
                      <span className="text-xl text-[#0145a7]">🛠️</span>
                    </div>

                    <h3 className="text-[28px] font-bold text-[#0A2A66]">
                      Hardware
                    </h3>
                  </div>

                  <div className="space-y-4 text-[16px] text-gray-700">
                    <div className="flex items-center justify-between rounded-xl px-3 py-3 transition hover:bg-gray-50">
                      <span>Hinges</span>
                      <span>›</span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl px-3 py-3 transition hover:bg-gray-50">
                      <span>Locks</span>
                      <span>›</span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl px-3 py-3 transition hover:bg-gray-50">
                      <span>Handles</span>
                      <span>›</span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl px-3 py-3 transition hover:bg-gray-50">
                      <span>Door Hardware</span>
                      <span>›</span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl px-3 py-3 transition hover:bg-gray-50">
                      <span>Panel Accessories</span>
                      <span>›</span>
                    </div>
                  </div>
                </div> */}

                {/* Right CTA */}
                <div className="pr-2 py-5">
                  <div className="bg-[#eff3f9] rounded-2xl px-4 py-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0145a7]">
                      Need Help Finding
                    </p>

                    <h3 className="mt-5 text-[24px] font-[400] leading-[1.1] tracking-tight text-[#000000]">
                      The right solution for your project?
                    </h3>

                    <div className="mt-8 h-[4px] w-16 rounded-full bg-[#0145a7]" />

                    <div className="mt-10 space-y-8">
                      <div className="flex gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-200 bg-white text-2xl">
                          🎧
                        </div>

                        <div>
                          <h4 className="font-semibold text-[#0A2A66]">
                            Expert advice
                          </h4>

                          <p className="mt-2 text-sm leading-2 text-gray-500">
                            Our team is here to help choose the best solution.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-200 bg-white text-2xl">
                          🛡️
                        </div>

                        <div>
                          <h4 className="font-semibold text-[#0A2A66]">
                            Quality you can trust
                          </h4>

                          <p className="mt-2 text-sm leading-2 text-gray-500">
                            Built for Australian industrial environments.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-200 bg-white text-2xl">
                          🇦🇺
                        </div>

                        <div>
                          <h4 className="font-semibold text-[#0A2A66]">
                            Australia wide supply
                          </h4>

                          <p className="mt-2 text-sm leading-2 text-gray-500">
                            Reliable supply and support nationwide.
                          </p>
                        </div>
                      </div>
                    </div>

                    <button className="mt-8 ml-8 w-[80%] rounded-[5px] bg-[#0145a7] px-6 py-5 text-[16px] font-semibold text-white transition hover:bg-[#0A2A66]">
                      Talk to Sales →
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom Strip */}
              <div className="grid grid-cols-5 gap-8 bg-gradient-to-r from-[#041B44] to-[#0145a7] px-10 py-6 text-white">
                <div>
                  <h4 className="font-semibold">Australian Designed</h4>
                  <p className="mt-2 text-sm text-white/70">
                    Built for local conditions
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">Industry Focused</h4>
                  <p className="mt-2 text-sm text-white/70">
                    Specialists in insulated panel systems
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">Quality Products</h4>
                  <p className="mt-2 text-sm text-white/70">
                    Tested, certified and built to perform
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">National Supply</h4>
                  <p className="mt-2 text-sm text-white/70">
                    Fast, reliable delivery across Australia
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">Partner Approach</h4>
                  <p className="mt-2 text-sm text-white/70">
                    Working with you for long term success
                  </p>
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
