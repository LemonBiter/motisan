import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  DraftingCompass,
  FileText,
  Headphones,
  PackageCheck,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Motisan",
  description:
    "Motisan service support for insulated panel access projects, including design advice, sales consultation and installation coordination.",
};

const serviceCards = [
  {
    title: "Design Service",
    category: "PROJECT PLANNING",
    subtitle: "Tailored solutions from concept to creation",
    description:
      "We help review project requirements, site constraints and product options so the final solution is practical, compliant and easy to install.",
    image: "/img/design.jpg",
    icon: DraftingCompass,
    points: [
      "Product configuration advice",
      "Specification and application review",
      "Modular solution planning",
    ],
  },
  {
    title: "Sales Service",
    category: "CONSULTATION",
    subtitle: "Clear communication and transparent quoting",
    description:
      "Our sales team supports enquiries from first conversation to quotation with straightforward recommendations and reliable project communication.",
    image: "/img/sales.jpg",
    icon: Headphones,
    points: [
      "Product selection support",
      "Quotation coordination",
      "Responsive follow-up",
    ],
  },
  {
    title: "Installation Service",
    category: "SITE SUPPORT",
    subtitle: "Installation guidance and after-sales support",
    description:
      "We provide documentation and practical support to help installers achieve correct fit, reliable operation and long-term product performance.",
    image: "/img/repair.jpg",
    icon: Wrench,
    points: [
      "Installation document support",
      "Site requirement coordination",
      "Maintenance and after-sales advice",
    ],
  },
];

const processSteps = [
  {
    title: "Consult",
    text: "Share drawings, product requirements or site conditions.",
    icon: ClipboardCheck,
  },
  {
    title: "Specify",
    text: "Confirm product options, sizes, finishes and documentation.",
    icon: FileText,
  },
  {
    title: "Supply",
    text: "Coordinate quotation, lead time and project delivery support.",
    icon: PackageCheck,
  },
];

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

export default function ServicesPage() {
  return (
    <main className="bg-white text-[#06183a]">
      <section className="relative overflow-hidden border-b border-gray-200 bg-[#f5f7fb]">
        <Image
          src="/img/category-bg4.png"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-white/50" />

        <div className="relative mx-auto min-h-[390px] max-w-[1440px] px-5 py-16 lg:px-10 lg:py-20">
          <div className="max-w-[680px]">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-[#00347d]">
              Services
            </p>
            <h1 className="text-5xl font-black leading-[0.98] text-[#06183a] lg:text-7xl">
              Service solutions for insulated panel projects.
            </h1>
            <p className="mt-6 max-w-[560px] text-lg leading-8 text-slate-700">
              Practical support from early product advice through to quotation,
              supply and installation guidance.
            </p>
          </div>

          <div className="mt-12 grid gap-5 border-t border-gray-200 pt-8 sm:grid-cols-2 lg:grid-cols-4">
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

      <section className="mx-auto max-w-[1440px] px-5 py-14 lg:px-10 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[360px_1fr]">
          <aside className="h-fit rounded-[5px] border border-gray-200 bg-white p-6 shadow-[0_16px_50px_rgba(6,24,58,0.06)]">
            <div className="mb-7 flex items-center justify-between">
              <h2 className="text-xl font-black text-[#06183a]">Service by</h2>
              <Link
                href="/contact"
                className="text-sm font-bold text-[#00347d] hover:underline"
              >
                Contact us
              </Link>
            </div>

            <div className="space-y-4">
              {serviceCards.map((service) => {
                const Icon = service.icon;
                return (
                  <a
                    key={service.title}
                    href={`#${service.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="flex items-center gap-4 rounded-[5px] border border-gray-200 bg-[#fafbfc] p-4 transition hover:border-[#00347d]"
                  >
                    <Icon className="h-5 w-5 text-[#00347d]" />
                    <span className="font-semibold text-[#06183a]">
                      {service.title}
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="mt-8 rounded-[5px] bg-[#06183a] p-5 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
                Need assistance?
              </p>
              <h3 className="mt-3 text-2xl font-black">
                Talk to our project team.
              </h3>
              <Link
                href="/contact"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-[5px] bg-[#c10230] px-5 py-4 font-semibold text-white transition hover:bg-[#a90028]"
              >
                Request a Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>

          <div>
            <div className="mb-9">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#00347d]">
                Service Details
              </p>
              <h2 className="mt-4 max-w-[760px] text-4xl font-black leading-tight text-[#06183a] lg:text-5xl">
                Comprehensive service solutions tailored to your needs.
              </h2>
              <p className="mt-5 max-w-[860px] text-lg leading-8 text-slate-600">
                Every project deserves careful attention, clear communication
                and dependable support. Motisan helps builders, contractors and
                project teams turn access requirements into practical product
                solutions.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.title}
                    className="rounded-[5px] border border-gray-200 bg-white p-6 shadow-[0_12px_40px_rgba(6,24,58,0.05)]"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-[5px] bg-[#eef3fa] text-[#00347d]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-sm font-black text-slate-300">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-5 text-xl font-black text-[#06183a]">
                      {step.title}
                    </h3>
                    <p className="mt-3 leading-7 text-slate-600">
                      {step.text}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 grid gap-6">
              {serviceCards.map((service) => {
                const Icon = service.icon;
                return (
                  <article
                    id={service.title.toLowerCase().replace(/\s+/g, "-")}
                    key={service.title}
                    className="grid overflow-hidden rounded-[5px] border border-gray-200 bg-white shadow-[0_18px_60px_rgba(6,24,58,0.06)] lg:grid-cols-[320px_1fr]"
                  >
                    <div className="relative min-h-[260px] border-b border-gray-200 bg-[#f7f8fa] lg:border-b-0 lg:border-r">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="p-6 lg:p-8">
                      <div className="flex flex-wrap items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-[5px] bg-[#00347d] text-white">
                          <Icon className="h-6 w-6" />
                        </div>
                        <p className="text-xs font-black uppercase tracking-[0.14em] text-[#00347d]">
                          {service.category}
                        </p>
                      </div>

                      <h3 className="mt-6 text-3xl font-black text-[#06183a]">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-lg font-bold text-[#06183a]">
                        {service.subtitle}
                      </p>
                      <p className="mt-5 max-w-[760px] leading-8 text-slate-600">
                        {service.description}
                      </p>

                      <div className="mt-7 grid gap-3 sm:grid-cols-3">
                        {service.points.map((point) => (
                          <div
                            key={point}
                            className="flex items-start gap-3 rounded-[5px] border border-gray-200 bg-[#fafbfc] p-4"
                          >
                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#00347d]" />
                            <span className="text-sm font-semibold leading-6 text-slate-700">
                              {point}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-[#f5f7fb]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-5 py-12 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#00347d]">
              Ready to start?
            </p>
            <h2 className="mt-3 text-3xl font-black text-[#06183a]">
              Send us your project details.
            </h2>
            <p className="mt-3 max-w-[620px] leading-7 text-slate-600">
              Our team can help with product selection, quotation and
              documentation for your next insulated panel project.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-[5px] bg-[#c10230] px-8 py-4 font-semibold text-white transition hover:bg-[#a90028]"
          >
            Make an Appointment
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
