import Header from '@/components/Header'
import HeroSlider from '@/components/HeroSlider'
import HowItWorks from '@/components/HowItWorks'
import Features from '@/components/Features'
import LiveDemo from '@/components/LiveDemo'
import WhyChooseUs from '@/components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSlider />
      <HowItWorks />
      <Features />
      <LiveDemo />
      <WhyChooseUs />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  )
}