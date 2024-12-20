import GraphInspector from '@/components/graph-inspector'
import Logo from '@/components/logo'
import AnimatedShinyText from '@/components/ui/animated-shiny-text'
import DotPattern from '@/components/ui/dot-pattern'
import WordFadeIn from '@/components/ui/word-fade-in'
import { cn } from '@/lib/utils'
import { ArrowDownIcon } from 'lucide-react'

export default function Hero() {
  return (
    <div className="relative">
      <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-6 lg:px-0 pt-44 relative z-10">
          <div className="flex items-center justify-center mb-4">
            <Logo className="w-auto h-16 lg:h-24" />
          </div>
          <WordFadeIn
            words="The fastest, open-source, decentralized & fully scalable Layer-1 in the world."
            className="capitalize"
          />
          <div className="z-10 flex items-center justify-center my-10">
            <div
              className={cn(
                'group rounded-full border border-black/5 bg-zinc-100 text-base text-white transition-all ease-in dark:border-white/5 dark:bg-zinc-900 ',
              )}
            >
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out">
                <span className="capitalize">No Bullshit. See it Yourself</span>
                <ArrowDownIcon className="ml-2 h-4 w-4" />
              </AnimatedShinyText>
            </div>
          </div>
        </div>
        <div className="max-h-[400px]">
          <GraphInspector />
        </div>
        <DotPattern
          className={cn(
            '[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]',
          )}
        />
      </div>
      {/* <div className="absolute -z-20 -top-96 -right-96 size-[1000px] bg-[radial-gradient(circle,rgba(110,199,186,1)0%,rgba(110,199,186,0.7581626400560224)0%,rgba(9,9,11,0.3379945728291317)50%)]" /> */}
      {/* <div className="absolute -z-20 -bottom-80 left-[-40%] size-[1000px] bg-[radial-gradient(circle,rgba(110,199,186,1)0%,rgba(110,199,186,0.7581626400560224)0%,rgba(9,9,11,0.3379945728291317)50%)]" /> */}
    </div>
  )
}
