import { cn } from '@/lib/utils'
import Marquee from './ui/marquee'
import CommunityMarqueeCard from './community-marquee-card'

const images = [
  '/images/2024-05-15-12.14.14-1.webp',
  '/images/2024-05-16-09.15.03-1.webp',
  '/images/2024-07-04-11.22.53.webp',
  '/images/2024-07-04-11.22.59.webp',
  '/images/ambassadors-warsaw-1.webp',
  '/images/cheering-Shai-On.webp',
  '/images/GaDPEa1b0AEUGiP.webp',
  '/images/GKfCiwabsAAUdg2.webp',
  '/images/GKu7kH7asAA1crJ.webp',
  '/images/GSaXFn5WwAAzC0Q.webp',
  '/images/IMG_5596.webp',
  '/images/photo_2024-04-09-20.30.36.webp',
  '/images/photo_2024-04-09-20.40.12.webp',
  '/images/YAN0687.webp',
  '/images/YAN0736.webp',
  '/images/YAN0771.webp',
  '/images/YAN0851.webp',
]

const firstRow = images.slice(0, images.length / 2)
const secondRow = images.slice(images.length / 2)

export default function CommunityMarquee() {
  return (
    <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:50s]">
        {firstRow.map((img) => (
          <CommunityMarqueeCard key={img} img={img} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:50s]">
        {secondRow.map((img) => (
          <CommunityMarqueeCard key={img} img={img} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background" />
    </div>
  )
}
