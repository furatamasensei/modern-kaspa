import Community from '@/components/community'
import Features from '@/components/features'
import Footer from '@/components/footer'
import Hero from '@/components/hero'

import ListingSwapPartyMarquee from '@/components/listing-swap-party-marquee'
import { MainNav } from '@/components/main-nav'
import NetworkStats from '@/components/network-stats'
import PublicDonation from '@/components/public-donation'
import Socials from '@/components/socials'

export default async function Home() {
  return (
    <div className="overflow-x-hidden">
      <MainNav />
      <Hero />
      <Community />
      <Features />
      <NetworkStats />
      <ListingSwapPartyMarquee />
      <Socials />
      <PublicDonation />
      <Footer />
    </div>
  )
}
