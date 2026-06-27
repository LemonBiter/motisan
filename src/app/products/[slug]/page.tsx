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
import ProductComingSoon from "../comingSoonPage";
import { COMING_SOON_PRODUCTS } from "@/app/const";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    const product = await import(`@/data/products/json/${slug}.json`).then(
      (mod) => mod.default,
    );

    return {
      title: product.seo?.title || product.name,

      description: product.seo?.description || product.shortDescription,

      keywords: product.seo?.keywords || [],

      alternates: {
        canonical: `https://motisan.com.au/products/${slug}`,
      },

      openGraph: {
        title: product.seo?.title || product.name,

        description: product.seo?.description || product.shortDescription,

        url: `https://motisan.com.au/products/${slug}`,

        images: [
          {
            url: product.heroImage || product.gallery?.[0],
          },
        ],
      },
    };
  } catch {
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
    if (COMING_SOON_PRODUCTS.includes(slug)) {
      throw new Error("Product is coming soon");
    }
    product = await import(`@/data/products/json/${slug}.json`).then(
      (mod) => mod.default,
    );
    if (!product) {
      throw new Error("Cannot find product data");
    }
  } catch (error) {
    return <ProductComingSoon />;
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
      <section className="border-b border-gray-200 bg-[#fafafa]">
        {/* lg:grid-cols-[0.9fr_1.1fr] */}
        {/*  */}
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 max-w-[1440px] ">
          {/* left */}
          <div className="flex flex-col justify-between px-5 py-12 lg:px-10 lg:py-15 ">
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

              <a
                href="#downloads"
                className="flex items-center justify-center gap-2 rounded-xl border border-[#0A2A66] px-8 py-4 font-semibold text-[#0A2A66] transition hover:bg-[#0A2A66] hover:text-white"
              >
                Download Datasheet
                <Download className="h-5 w-5" />
              </a>
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

          <ProductGallery
            colors={product.colours}
            images={product.gallery}
            productName={product.name}
          />
        </div>
      </section>

      {/* content */}
      <section className="mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-[1fr_500px] gap-[150px] px-5 py-16 lg:px-20 bg-white">
        <div>
          <div>
            <h3 className="text-2xl font-bold text-[#0A2A66]">Description</h3>

            <p className="my-8 leading-8 text-gray-700">
              {product.longDescription}
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#0A2A66] mb-8">
              Specifications
            </h3>
            <table className="w-full border-collapse border border-gray-300">
              <tbody>
                {Object.entries(product?.specifications || {}).map(
                  ([label, value]: [string, string]) => (
                    <tr key={label}>
                      <td className="border border-gray-300 px-4 py-2 font-medium text-gray-800">
                        {label}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-gray-700">
                        {value}
                      </td>
                    </tr>
                  ),
                )}
              </tbody>
            </table>
          </div>
          <div>
            <h3 className="text-2xl pt-8 font-bold text-[#0A2A66]">
              Why Choose Motisan Steel Clad door?
            </h3>

            <p className="mt-8 leading-8 text-gray-700">{product.whyChoose}</p>
          </div>
        </div>
        {/* features */}
        <div className="rounded-3xl border border-gray-200 bg-[#f8f9fa] p-8">
          <h3 className="text-2xl font-bold text-[#0A2A66]">Key Features</h3>

          <div className="mt-8 space-y-5">
            {product.features?.map(
              (feature: { content: string; explain: string }) => (
                <div key={feature.content} className="flex items-start gap-4">
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
      </section>

      <section className="mx-auto max-w-[1440px] px-5 pb-16 lg:px-10">
        {/* downloads */}
        <div
          id="downloads"
          className="mt-12 scroll-mt-32 rounded-3xl border border-gray-200 bg-[#fafafa] p-8"
        >
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
                  download
                  className="flex items-center justify-between rounded-2xl border border-gray-200 p-5 transition hover:bg-white"
                >
                  <Image
                    src="/logo/file-pdf-color-red-icon.webp"
                    alt={file.title}
                    width={40}
                    height={40}
                  />
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
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0145a7]">
                Explore more
              </p>
              <h3 className="mt-3 text-3xl font-black text-[#0A2A66]">
                Related Products
              </h3>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 font-semibold text-[#002D72] transition hover:translate-x-1"
            >
              View All Products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {productList
              .filter((item) => item.slug !== product.slug)
              .slice(0, 4)
              .map((item) => (
                <Link
                  key={item.slug}
                  href={`/products/${item.slug}`}
                  className="group overflow-hidden rounded-[5px] border border-gray-200 bg-white transition hover:-translate-y-1 hover:border-[#002D72] hover:shadow-[0_18px_60px_rgba(6,24,58,0.08)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#f5f7fb]">
                    <Image
                      src={item.thumbnail || "/logo/unknown-img.png"}
                      alt={item.name}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                      {item.category}
                    </p>

                    <h4 className="mb-3 text-xl font-semibold text-[#06183a]">
                      {item.name}
                    </h4>

                    <p className="mb-6 min-h-[48px] text-sm leading-6 text-slate-600">
                      {item.subtitle}
                    </p>

                    <span className="inline-flex items-center gap-2 font-semibold text-[#002D72] transition group-hover:translate-x-1">
                      View Details
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
