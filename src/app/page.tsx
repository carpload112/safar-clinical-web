import PageShell from '@/components/PageShell'
import Hero from '@/components/home/Hero'
import Ticker from '@/components/home/Ticker'
import StatBand from '@/components/home/StatBand'
import MethodSection from '@/components/home/MethodSection'
import FeedSpecimen from '@/components/home/FeedSpecimen'
import Audiences from '@/components/home/Audiences'
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
      <MethodSection />
      <FeedSpecimen />
      <Audiences />
      <PullQuote />
      <PressSection />
      <FAQSection />
      <CtaBand />
    </PageShell>
  )
}
