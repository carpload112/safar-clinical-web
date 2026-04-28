import PageShell from '@/components/PageShell'
import Hero from '@/components/home/Hero'
import Ticker from '@/components/home/Ticker'
import StatBand from '@/components/home/StatBand'
import Integrations from '@/components/home/Integrations'
import MethodSection from '@/components/home/MethodSection'
import WhyThree from '@/components/home/WhyThree'
import FeedSpecimen from '@/components/home/FeedSpecimen'
import TherapeuticAreas from '@/components/home/TherapeuticAreas'
import Audiences from '@/components/home/Audiences'
import Testimonials from '@/components/home/Testimonials'
import PullQuote from '@/components/home/PullQuote'
import PressSection from '@/components/home/PressSection'
import FAQSection from '@/components/home/FAQSection'
import CtaBand from '@/components/CtaBand'

export default function HomePage() {
  return (
    <PageShell>
      <Hero />
      <Ticker />
      <StatBand />
      <Integrations />
      <MethodSection />
      <WhyThree />
      <FeedSpecimen />
      <TherapeuticAreas />
      <Audiences />
      <Testimonials />
      <PullQuote />
      <PressSection />
      <FAQSection />
      <CtaBand />
    </PageShell>
  )
}
