import Hero from "@/components/home/Hero";
import FeatureStrip from "@/components/home/FeatureStrip";
import ProductsSection from "@/components/home/products-section/ProductsSection";
import SolutionsSection from "@/components/home/SolutionIntroduction";
import ApplicationsSection from "@/components/home/ApplicationsSection";
import ProjectSupportSection from "@/components/home/ProjectSupportSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Insulated Panel Doors & Modular Building Solutions",

  description:
    "Motisan Pty Ltd is an Australian-owned supplier of insulated panel doors, modular building solutions, cold room doors, freezer doors and industrial access products for commercial and industrial applications.",

  keywords: [
    "Motisan",

    "Insulated Panel Doors",

    "Cold Room Door",

    "Freezer Door",

    "Industrial Door",

    "Steel Clad Door",

    "Rapid Door",

    "Modular Building",

    "Australia",
  ],
};
export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProductsSection />
      <ApplicationsSection />
      <ProjectSupportSection />
      <SolutionsSection />
      <FeatureStrip />
    </main>
  );
}
