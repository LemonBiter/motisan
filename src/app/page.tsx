import Hero from "@/components/home/Hero";
import FeatureStrip from "@/components/home/FeatureStrip";
import ProductsSection from "@/components/home/products-section/ProductsSection";
import SolutionsSection from "@/components/home/SolutionIntroduction";
import ApplicationsSection from "@/components/home/ApplicationsSection";
import ProjectSupportSection from "@/components/home/ProjectSupportSection";

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
