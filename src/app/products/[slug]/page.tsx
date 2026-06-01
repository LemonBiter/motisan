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
} from "lucide-react";

import productList from "@/data/products/json/index.json";
import ProductGallery from "@/components/product/ProductGallery";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  try {
    const product = await import(`@/data/products/json/${slug}.json`).then(
      (mod) => mod.default,
    );

    return {
      title: product.seo?.title || product.name,
      description: product.seo?.description || product.description,
      keywords: product.seo?.keywords || [],
    };
  } catch (error) {
    return {
      title: "Product Not Found",
    };
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let product;
  try {
    product = await import(`@/data/products/json/${slug}.json`).then(
      (mod) => mod.default,
    );
  } catch (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        {slug} not found
      </div>
    );
  }
  // const product = await import(`@/data/products/json/${slug}.json`).then((mod) => mod.default);

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        product not found
      </div>
    );
  }

  return (
    <main className="bg-white">
      {/* breadcrumb */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-5 lg:px-10">
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <Link href="/">Home</Link>

            <ChevronRight className="h-4 w-4" />

            <Link href="/products">Products</Link>

            <ChevronRight className="h-4 w-4" />

            <span>{product.category}</span>

            <ChevronRight className="h-4 w-4" />

            <span className="font-medium text-[#0A2A66]">{product.name}</span>
          </div>
        </div>
      </section>

      {/* hero */}
      <section className="bg-white border-b border-gray-200">
        {/* lg:grid-cols-[0.9fr_1.1fr] */}
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 lg:grid-cols-2">
          {/* left */}
          <div className="flex flex-col justify-start px-5 py-12 lg:px-10 lg:py-20 bg-[#fafafa]">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              {product.category}
            </p>

            <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight text-[#0A2A66] lg:text-7xl">
              {product.name}
            </h1>

            <h2 className="mt-6 max-w-[500px] text-2xl font-semibold leading-snug text-gray-800">
              {product.subtitle}
            </h2>

            <p className="mt-6 max-w-[560px] text-base leading-8 text-gray-600">
              {product.shortDescription}
            </p>

            {/* buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button className="rounded-xl bg-[#0145a7] px-8 py-4 font-semibold text-white transition hover:bg-[#0A2A66]">
                Request Quote
              </button>

              <button className="flex items-center justify-center gap-2 rounded-xl border border-[#0A2A66] px-8 py-4 font-semibold text-[#0A2A66] transition hover:bg-[#0A2A66] hover:text-white">
                Download Datasheet
                <Download className="h-5 w-5" />
              </button>
            </div>

            {/* icons */}
            <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              <div className="flex flex-col items-center text-center">
                <ShieldCheck className="h-8 w-8 text-[#0A2A66]" />

                <p className="mt-3 text-sm font-medium text-gray-700">
                  Australian Engineered
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <Accessibility className="h-8 w-8 text-[#0A2A66]" />

                <p className="mt-3 text-sm font-medium text-gray-700">
                  DDA Compatible
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <Wrench className="h-8 w-8 text-[#0A2A66]" />

                <p className="mt-3 text-sm font-medium text-gray-700">
                  Pre-hung Installation
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <Factory className="h-8 w-8 text-[#0A2A66]" />

                <p className="mt-3 text-sm font-medium text-gray-700">
                  Built for Performance
                </p>
              </div>
            </div>
          </div>

          <ProductGallery images={product.gallery} productName={product.name} />
        </div>
      </section>

      {/* content */}
      <section className="mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-[1fr_500px] gap-[150px] px-5 py-16 lg:px-20 bg-white">
        <div>
          {/* features */}
          <div className="rounded-3xl border border-gray-200 bg-[#f8f9fa] p-8">
            <h3 className="text-2xl font-bold text-[#0A2A66]">Key Features</h3>

            <div className="mt-8 space-y-5">
              {product.features?.map(
                (feature: { content: string; explain: string }) => (
                  // <div key={feature.content} className="flex items-start gap-4">
                  <div key={feature.content} className="">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-[#0145a7]" />
                    <div className="w-[85%]">
                      <h1 className="leading-7 font-medium text-[#0A2A66]">
                        {feature.content}
                      </h1>
                      <span className="leading-7 text-sm text-gray-700">
                        {feature.explain}
                      </span>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#0A2A66]">Description</h3>

            <p className="mt-8 leading-8 text-gray-700">
              {product.longDescription}
            </p>
          </div>
          <div>
            <h3 className="text-2xl pt-8 font-bold text-[#0A2A66]">
              Why Choose Motisan Steel Clad door?
            </h3>

            <p className="mt-8 leading-8 text-gray-700">{product.whyChoose}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 pb-16 lg:px-10">
        {/* downloads */}
        <div className="mt-12 rounded-3xl border border-gray-200 bg-[#fafafa] p-8">
          <h3 className="text-2xl font-bold text-[#0A2A66]">File Downloads</h3>

          <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
            {product.downloads?.map(
              (
                file: {
                  title: string;
                  file: string;
                },
                index: number,
              ) => (
                <a
                  key={index}
                  href={file.file}
                  className="flex items-center justify-between rounded-2xl border border-gray-200 p-5 transition hover:bg-white"
                >
                  <div>
                    <p className="font-semibold text-[#0A2A66]">{file.title}</p>

                    <p className="mt-1 text-sm text-gray-500">PDF Download</p>
                  </div>

                  <Download className="h-5 w-5 text-[#0A2A66]" />
                </a>
              ),
            )}
          </div>
        </div>

        {/* related */}
        <div className="mt-12">
          <h3 className="text-3xl font-black text-[#0A2A66]">
            Related Products
          </h3>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {productList.slice(0, 3).map((item) => (
              <Link
                key={item.slug}
                href={`/products/${item.slug}`}
                className="group overflow-hidden rounded-3xl border border-gray-200 bg-white"
              >
                <div className="relative aspect-[1.4/1] overflow-hidden">
                  <Image
                    src={item.thumbnail}
                    alt={item.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h4 className="text-2xl font-bold text-[#0A2A66]">
                    {item.name}
                  </h4>

                  <p className="mt-3 leading-7 text-gray-600">
                    {item.subtitle}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
