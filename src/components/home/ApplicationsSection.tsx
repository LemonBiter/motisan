import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Factory,
  Snowflake,
  Sparkles,
} from "lucide-react";

const applications = [
  {
    title: "Cold Storage",
    description:
      "Access products for temperature-controlled rooms, cold storage facilities and insulated environments.",
    image: "/img/cold-storage.jpg",
    icon: Snowflake,
  },
  {
    title: "Cleanrooms",
    description:
      "Steel clad doors and accessories designed for controlled, hygienic and airtight spaces.",
    image: "/img/cleanrooms.jpg",
    icon: Sparkles,
  },
  {
    title: "Industrial Facilities",
    description:
      "Durable door systems and protection materials built for daily commercial and industrial operation.",
    image: "/img/modular-projects.jpg",
    icon: Factory,
  },
  {
    title: "Modular Projects",
    description:
      "Practical solutions for insulated panel rooms, steel frame buildings and repeatable project builds.",
    image: "/img/industrial-facilities.jpg",
    icon: Building2,
  },
];

export default function ApplicationsSection() {
  return (
    <section className="border-y border-gray-200 bg-[#f5f7fb] py-20">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#c10230]">
              Applications
            </p>
            <h2
              className="mt-4 max-w-[760px] text-4xl lg:text-5xl text-[52px]
              font-bold
              leading-[1]
              tracking-tight
              text-[#0A2A66]"
            >
              Built for demanding insulated panel environments.
            </h2>
          </div>

          <p className="max-w-[470px] text-base leading-8 text-slate-600">
            Motisan products support controlled environments, industrial access,
            modular construction and project sites where reliability matters.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {applications.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="group overflow-hidden rounded-[5px] border border-gray-200 bg-white shadow-[0_14px_45px_rgba(6,24,58,0.04)] transition hover:-translate-y-1 hover:border-[#00347d] hover:shadow-[0_20px_70px_rgba(6,24,58,0.08)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-white">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[5px] border border-[#00347d]/20 bg-[#eef3fa] text-[#00347d]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-2xl font-black text-[#06183a]">
                    {item.title}
                  </h3>
                  <p className="mt-4 min-h-[96px] leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* <div className="mt-10 flex justify-center">
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 rounded-[5px] bg-[#00347d] px-8 py-4 font-semibold text-white transition hover:bg-[#06183a]"
          >
            Explore Product Range
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div> */}
      </div>
    </section>
  );
}
