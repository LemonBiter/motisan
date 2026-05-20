import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-5 py-14 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-24  bg-[url('/img/homepage-bg.png')]
    bg-cover
    bg-center
    
    bg-no-repeat"
    >
      {/* bg-[position:85%_center] */}
      <div className="flex flex-col justify-center">
        <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-[#0c203b] sm:text-5xl lg:text-6xl">






          Motisan -Enhancing a better insulated panel system
        </h1>

        <p className="mt-6 max-w-[620px] text-lg leading-8 text-gray-600 lg:text-xl">
          We are committed to making the use of insulated panels more cost and
          labor-efficient, with a vision to grow and expand the market for
          insulated panels.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-[5px] bg-[#0145a7] hover:bg-[#0A2A66] px-8 py-5 font-semibold text-white flex items-center">
            View Our Products
            <ArrowRight className="ml-2 h-6 w-6" />
          </button>

          <button className="rounded-2xl border border-gray-300 bg-white px-8 py-5 font-semibold text-[#0A2A66]">
            Contact Us
          </button>
        </div>
      </div>

      {/* <div className="min-h-[320px] rounded-[32px] bg-gradient-to-br from-gray-100 to-gray-300 lg:min-h-[650px]"></div> */}
    </section>
  );
}
