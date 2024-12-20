import IconDiscord from '@/components/icon-discord'
import IconFacebook from '@/components/icon-facebook'
import IconGithub from '@/components/icon-github'
import IconInstagram from '@/components/icon-instagram'
import IconLinkedIn from '@/components/icon-linkedin'
import IconReddit from '@/components/icon-reddit'
import IconTelegram from '@/components/icon-telegram'
import IconTwitterX from '@/components/icon-twitter-x'
import IconYoutube from '@/components/icon-youtube'
import { Card, CardContent } from '@/components/ui/card'
import { MagicCard } from '@/components/ui/magic-card'
import Ripple from '@/components/ui/ripple'

export default function Socials() {
  return (
    <div className="container mx-auto pt-32 lg:py-60 lg:pb-0">
      <div className="px-6 lg:px-0 max-w-2xl space-y-4 text-center md:text-left">
        <div className="text-4xl font-bold lg:text-6xl lg:leading-none">
          Join The Community
        </div>
        <div className="text-muted-foreground">
          We are a growing community and are always looking for enthusiastic
          people to join the project. If you are a coder, marketer, vlogger,
          community manager, enthusiast, or anything else join the Kaspa
          Community and say, “hi!”
        </div>
      </div>
      <div className="relative before:absolute before:-z-10 before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:size-[1000px] before:bg-[radial-gradient(circle,rgba(110,199,186,1)0%,rgba(110,199,186,0.7581626400560224)0%,rgba(9,9,11,0.3379945728291317)50%)]">
        <div className="grid grid-cols-12 gap-2 mt-6">
          <div className="col-span-2 space-y-2">
            <a
              href="https://twitter.com/KaspaCurrency"
              target="_blank"
              className="block"
            >
              <MagicCard className="h-[100px] flex items-center justify-center rounded-l-none lg:rounded-l-lg">
                <IconTwitterX className="size-6 lg:size-8" />
              </MagicCard>
            </a>
            <a
              href="https://www.reddit.com/r/Kaspa"
              target="_blank"
              className="block"
            >
              <MagicCard className="h-[100px] flex items-center justify-center rounded-l-none lg:rounded-l-lg">
                <IconReddit className="size-8 lg:size-12" />
              </MagicCard>
            </a>
            <a
              href="https://t.me/Kaspaenglish"
              target="_blank"
              className="block"
            >
              <MagicCard className="h-[100px] flex items-center justify-center rounded-l-none lg:rounded-l-lg">
                <IconTelegram className="size-8 lg:size-12" />
              </MagicCard>
            </a>
            <a
              href="https://www.instagram.com/kaspa_currency"
              target="_blank"
              className="block"
            >
              <MagicCard className="h-[100px] flex items-center justify-center rounded-l-none lg:rounded-l-lg">
                <IconInstagram className="size-8 lg:size-12" />
              </MagicCard>
            </a>
          </div>
          <div className="col-span-8">
            <a href="https://discord.gg/kaspa" target="_blank">
              <Card className="h-full relative">
                <CardContent className="p-0 overflow-hidden h-full">
                  <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-xl border bg-background md:shadow-xl">
                    <div className="z-10 whitespace-pre-wrap ">
                      <IconDiscord className="size-24 lg:size-24" />
                    </div>
                    <Ripple />
                  </div>
                </CardContent>
                <div className="absolute left-10 bottom-10">
                  <div>Discord</div>
                  <div className="text-muted-foreground">
                    https://discord.gg/kaspa
                  </div>
                </div>
              </Card>
            </a>
          </div>
          <div className="col-span-2 space-y-2">
            <a
              href="https://www.facebook.com/KaspaCurrency"
              target="_blank"
              className="block"
            >
              <MagicCard className="h-[100px] flex items-center justify-center rounded-r-none lg:rounded-r-lg">
                <IconFacebook className="size-8 lg:size-12" />
              </MagicCard>
            </a>
            <a
              href="https://www.linkedin.com/company/kaspa-currency"
              target="_blank"
              className="block"
            >
              <MagicCard className="h-[100px] flex items-center justify-center rounded-r-none lg:rounded-r-lg">
                <IconLinkedIn className="size-8 lg:size-12" />
              </MagicCard>
            </a>
            <a
              href="https://github.com/kaspanet"
              target="_blank"
              className="block"
            >
              <MagicCard className="h-[100px] flex items-center justify-center rounded-r-none lg:rounded-r-lg">
                <IconGithub className="size-8 lg:size-12" />
              </MagicCard>
            </a>
            <a
              href="https://www.youtube.com/channel/UCsnbLKm_lpCUj63_HPW17og"
              target="_blank"
              className="block"
            >
              <MagicCard className="h-[100px] flex items-center justify-center rounded-r-none lg:rounded-r-lg">
                <IconYoutube className="size-8 lg:size-12" />
              </MagicCard>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
