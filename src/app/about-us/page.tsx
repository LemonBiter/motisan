// src/app/products/[slug]/page.tsx

import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Download,
  ShieldCheck,
  Accessibility,
  Wrench,
  Factory,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Clock3,
} from "lucide-react";

import productList from "@/data/products/json/index.json";
import ProductGallery from "@/components/product/ProductGallery";
import { COMING_SOON_PRODUCTS } from "@/app/const";


export default async function AboutUs() {
 

  return (
      <main className="bg-white"> <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
              <div className="grid items-center gap-12 lg:grid-cols-2">

                {/* Content */}
                <div>
              
      
                  <h2 className="mb-8 text-4xl font-bold leading-tight text-[#002D72] lg:text-6xl">
                    Who We Are
                  </h2>
      
                  <p className="mb-10 text-lg leading-8 text-slate-600">
                    Motisan Pty Ltd is an Australian-owned company dedicated to pioneering high-quality, innovative products. Our name, “Motisan,” embodies our commitment to excellence in modular and artisanal craftsmanship, establishing us as industry leaders. We integrate modular thinking across our entire product lifecycle—from initial design and local manufacturing to seamless installation—ensuring reliable, user-friendly solutions.

Driven by our commitment to innovation, we continuously strive to provide our clients with cutting-edge solutions. We take great pride in our unwavering dedication to excellence, always aiming to not only meet but exceed our clients’ expectations with every product delivery.


                  </p>
      
              
                </div>
                {/* Image */}
                <div className="flex justify-center relative overflow-hidden rounded-[8px]">
                  <Image
                    src="/img/about-us.jpg"
                    alt="Modular Solutions"
                    width={800}
                    height={1000}
                    className="h-auto w-[80%] object-cover"
                  />
                </div>
      
                
              </div>
            </div></main>
  );
}
