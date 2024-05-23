import CTA from '@/components/CTA'
import CenteredCTA from '@/components/CenteredCTA'
import FAQ from '@/components/FAQ'
import GradientWrapper from '@/components/GradientWrapper'
import Hero from '@/components/Hero'
import Pricing from '@/components/Pricing'

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
    </main>
  )
}
