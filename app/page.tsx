import { TopBanner } from '@/components/top-banner'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Protocol } from '@/components/protocol'
import { CustomCeremony } from '@/components/custom-ceremony'
import { WhoHires } from '@/components/who-hires'
import { Gallery } from '@/components/gallery'
import { Team } from '@/components/team'
import { Recruitment } from '@/components/recruitment'
import { Testimonials } from '@/components/testimonials'
import { Faq } from '@/components/faq'
import { Policies } from '@/components/policies'
import { NotIncluded } from '@/components/not-included'
import { QuoteCta } from '@/components/quote-cta'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppFloat } from '@/components/whatsapp-float'

export default function Page() {
  return (
    <>
      <TopBanner />
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Services />
        <Protocol />
        <CustomCeremony />
        <WhoHires />
        <Gallery />
        <Team />
        <Recruitment />
        <Testimonials />
        <Faq />
        <Policies />
        <NotIncluded />
        <QuoteCta />
        <Contact />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  )
}
