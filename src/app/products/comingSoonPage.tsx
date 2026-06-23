import Link from "next/link";
import { ArrowLeft, ArrowRight, ShieldCheck, Wrench, Clock3 } from "lucide-react";

export default function ProductComingSoon() {
  return (
    <section className="px-20 py-10 relative overflow-hidden bg-white">
      {/* Background */}
      <div
        className="absolute inset-0 lg:bg-contain bg-cover bg-right bg-no-repeat bg-[url('/img/homepage-bg.png')]" 
      />

      {/* Left Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/20" />

      <div className="relative mx-auto flex min-h-[700px] max-w-[1440px] items-center px-6 lg:px-12">
        <div className="max-w-[520px]">
          <h1 className="mb-4 text-6xl font-bold leading-[1.05] text-[#002D72]">
            This product
            <br />
            page is coming
            <br />
            soon.
          </h1>

          <p className="mb-10 text-xl leading-relaxed text-slate-600">
            We're working hard to bring you detailed information,
            specifications and application guidance for this product.
          </p>

          <div className="mb-10 space-y-5">
            <div className="flex items-center gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                <Clock3 className="h-7 w-7 text-[#002D72]" />
              </div>

              <div>
        
                <p className="text-slate-600">
                  High-quality solutions <br/> built for performance
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                <ShieldCheck className="h-7 w-7 text-[#002D72]" />
              </div>

              <div>

                <p className="text-slate-600">
                   Engineered for durability <br/> and reliability
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                <Wrench className="h-7 w-7 text-[#002D72]" />
              </div>

              <div>
                <p className="text-slate-600">
                   Designed to meet<br/> your project needs
                </p>
             
              </div>
            </div>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-3 rounded-lg bg-[#002D72] px-8 py-4 text-white transition hover:bg-[#001f4f]"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to all products
          </Link>

          <div className="mt-14">
            <p className="mb-2 text-xl text-slate-700">
              Need help finding the right solution?
            </p>

            <p className="mb-6 text-slate-500">
              Our team is here to help.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-semibold text-[#0056d6]"
            >
              Contact us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}