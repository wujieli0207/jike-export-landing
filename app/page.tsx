import CTA from '@/components/CTA'
import CenteredCTA from '@/components/CenteredCTA'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import GradientWrapper from '@/components/GradientWrapper'
import Hero from '@/components/Hero'
import Pricing from '@/components/Pricing'
import Stats from '@/components/Stats'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      {/* <GradientWrapper className="pb-0 sm:my-16">
        <CenteredCTA />
        <Stats />
      </GradientWrapper>
      <CTA />*/}
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  )
}
