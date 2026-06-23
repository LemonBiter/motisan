import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ClipboardCheck,
  FileText,
  PackageCheck,
  PhoneCall,
} from "lucide-react";

const steps = [
  {
    title: "Discuss",
    text: "Share your project requirements, product needs and site conditions.",
    icon: PhoneCall,
  },
  {
    title: "Specify",
    text: "We help confirm product options, finishes, documents and quotation details.",
    icon: ClipboardCheck,
  },
  {
    title: "Supply",
    text: "Coordinate supply support for doors, accessories and protection materials.",
    icon: PackageCheck,
  },
];

export default function ProjectSupportSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <div className="relative min-h-[420px] overflow-hidden rounded-[5px] border border-gray-200 bg-[#f5f7fb]">
          <Image
            src="/img/design.jpg"
            alt="Project support"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06183a]/80 via-[#06183a]/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/70">
              Project Support
            </p>
            <h2 className="mt-3 max-w-[520px] text-4xl font-black leading-tight">
              Practical guidance before, during and after supply.
            </h2>
          </div>
        </div>

        <div className="flex flex-col justify-center">
                      {/* <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#c10230]"> */}

          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#c10230]">
            How We Help
          </p>
          <h2
            className="mt-4 max-w-[760px] text-4xl lg:text-5xl text-[52px]
              font-bold
              leading-[1]
              tracking-tight
              text-[#0A2A66]"
          >
            From product selection to project-ready supply.
          </h2>
          <p className="mt-6 max-w-[760px] text-lg leading-8 text-slate-600">
            Industrial buyers need clear specifications, reliable communication
            and fast access to documents. Our team helps reduce friction across
            the buying process.
          </p>

          <div className="mt-10 grid gap-5">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="grid grid-cols-[56px_1fr] gap-5 rounded-[5px] border border-gray-200 bg-white p-5 shadow-[0_12px_40px_rgba(6,24,58,0.04)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-[5px] bg-[#eef3fa] text-[#00347d]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">
                      Step 0{index + 1}
                    </p>
                    <h3 className="mt-2 text-xl font-black text-[#06183a]">
                      {step.title}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-600">{step.text}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-[5px] bg-[#00347d] px-8 py-4 font-semibold text-white transition hover:bg-[#06183a]"
            >
              View Services
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-[5px] border border-gray-300 bg-white px-8 py-4 font-semibold text-[#00347d] transition hover:border-[#00347d]"
            >
              Request a Quote
              <FileText className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
