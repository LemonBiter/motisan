
import Hero from '@/components/home/Hero'
import FeatureStrip from '@/components/home/FeatureStrip'
import ProductsSection from '@/components/home/products-section/ProductsSection'

export default function HomePage(){
  return(
    <main>
      <Hero />
      <ProductsSection />
      <FeatureStrip />
    </main>
  )
}
