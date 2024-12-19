import Community from '@/components/community'
import Features from '@/components/features'
import Hero from '@/components/hero'
import ListingSwapPartyMarquee from '@/components/listing-swap-party-marquee'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { UserIcon } from 'lucide-react'

export default function Home() {
  return (
    <div>
      <Hero />
      <Community />
      <Features />
      <ListingSwapPartyMarquee />
      <div className="container mx-auto py-60">
        <div className="px-6 lg:px-0 container mx-auto space-y-4 text-center">
          <div className="text-4xl font-bold lg:text-6xl lg:leading-none">
            Join The Movement
          </div>
          <div className="text-muted-foreground">
            Many people has found a place to start their journey with KAS.
            Wouldn't you like to be one of them?
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-16 px-6 lg:px-0">
          {[...Array(20)].map((e) => (
            <Card key={e}>
              <CardContent className="p-2.5">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarFallback>
                      <UserIcon className="size-4 text-muted-foreground" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div>User Name</div>
                    <div className="text-sm text-teal-400">Indonesia</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
