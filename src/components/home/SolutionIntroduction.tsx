import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function SolutionsSection() {
  const features = [
    "Modular Design",
    "High-Efficiency Production",
    "Consistent Support",
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="flex justify-center relative overflow-hidden rounded-[8px]">
            <Image
              src="/img/homepage-solution.png"
              alt="Modular Solutions"
              width={800}
              height={1000}
              className="h-auto w-[80%] object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#c10230]">
              Comprehensive Solutions
            </p>

            <h2 className="mb-8 text-4xl font-bold leading-tight text-[#002D72] lg:text-6xl">
              Modular Solutions for
              <br />
              Projects of All Scales
            </h2>

            <p className="mb-10 text-lg leading-8 text-slate-600">
              At Motisan, we specialize in delivering innovative modular
              solutions that adapt to a wide range of project requirements.
              Our approach combines the efficiency of standardized production
              with the precision of expert engineering, ensuring high
              performance and cost-effectiveness across every stage of
              development.
            </p>

            <div className="mb-10 space-y-4">
              {features.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-lg text-slate-700"
                >
                  <CheckCircle2
                    size={22}
                    className="text-[#c10230]"
                  />

                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button className="rounded-[5px] bg-[#002D72] px-8 py-4 font-semibold text-white transition hover:bg-[#001F4D]">
              Learn More About Us →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}