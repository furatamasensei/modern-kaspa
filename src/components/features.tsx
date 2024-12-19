import {
  ExpandIcon,
  ListChecksIcon,
  NetworkIcon,
  ReplaceAllIcon,
  ShieldCheckIcon,
  ZapIcon,
} from 'lucide-react'
import ClientGlobe from './client-globe'
import { MagicCard } from './ui/magic-card'

export default function Features() {
  return (
    <div className="relative px-6 lg:px-0">
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="pt-32 lg:pt-60 pb-8 font-bold  capitalize text-4xl leading-none lg:text-7xl lg:leading-none">
            The world's first
            <div className="text-teal-400"> BlockDAG</div>
          </div>
          <div className="text-lg">
            A digital ledger enabling parallel blocks and instant transaction
            confirmation – built on a robust proof-of-work engine with rapid
            single-second block intervals. Developed to solve{' '}
            <a
              href="https://www.coinbase.com/learn/crypto-glossary/what-is-the-blockchain-trilemma#:~:text=The%20blockchain%20trilemma%20refers%20to,to%20achieve%20all%20three%20simultaneously."
              target="_blank"
              className="text-teal-400 underline hover:text-teal-500"
            >
              the Trilemma
            </a>{' '}
            in the usage of digital assets, enabling the following benefits
          </div>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <MagicCard>
                <div className="p-6 space-y-4">
                  <ZapIcon className="text-teal-400" />
                  <div className="text-xl font-medium">Faster Transactions</div>
                  <div className="text-sm leading-relaxed text-muted-foreground">
                    Kaspa’s blockDAG network generates multiple blocks every
                    second for posting transactions to the ledger. Combined with
                    fully confirmed transactions in 10 seconds, this makes Kaspa
                    ideal for everyday transactions.
                  </div>
                </div>
              </MagicCard>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <MagicCard>
                <div className="p-6 space-y-4">
                  <ListChecksIcon className="text-teal-400" />
                  <div className="text-xl font-medium">
                    Instant Confirmation
                  </div>
                  <div className="text-sm leading-relaxed text-muted-foreground">
                    Kaspa was designed to be hundreds of times faster than
                    Bitcoin, with each Kaspa Transaction visible to the network
                    in one second, and each transaction fully confirmed in 10
                    seconds on average.
                  </div>
                </div>
              </MagicCard>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <MagicCard>
                <div className="p-6 space-y-4">
                  <ExpandIcon className="text-teal-400" />
                  <div className="text-xl font-medium">Scalability</div>
                  <div className="text-sm leading-relaxed text-muted-foreground">
                    Kaspa solves the scalability problem with its ability to
                    generate and confirm multiple blocks per second. This comes
                    with no trade-off to security and decentralization as seen
                    with Proof-of-Stake networks.
                  </div>
                </div>
              </MagicCard>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <MagicCard>
                <div className="p-6 space-y-4">
                  <NetworkIcon className="text-teal-400" />
                  <div className="text-xl font-medium">
                    Efficient Proof-of-Work
                  </div>
                  <div className="text-sm leading-relaxed text-muted-foreground">
                    Overcoming the problem of blockchains, Kaspa processes all
                    blocks in parallel linking all side-chains. This leads to a
                    DAG structure that increases the formation of blocks per
                    second drastically, creating a blockDAG.
                  </div>
                </div>
              </MagicCard>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <MagicCard>
                <div className="p-6 space-y-4">
                  <ShieldCheckIcon className="text-teal-400" />
                  <div className="text-xl font-medium">Security</div>
                  <div className="text-sm leading-relaxed text-muted-foreground">
                    Kaspa harnesses an ultra secure block network with no
                    compromise to decentralization. Achieved with pure,
                    stake-less, proof-of-work combined with a revolutionary
                    GhostDAG consensus mechanism.
                  </div>
                </div>
              </MagicCard>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <MagicCard>
                <div className="p-6 space-y-4">
                  <ReplaceAllIcon className="text-teal-400" />
                  <div className="text-xl font-medium">
                    Parallel Block Processing
                  </div>
                  <div className="text-sm leading-relaxed text-muted-foreground">
                    Kaspa harnesses an ultra secure block network with no
                    compromise to decentralization. Achieved with pure,
                    stake-less, proof-of-work combined with a revolutionary
                    GhostDAG consensus mechanism.
                  </div>
                </div>
              </MagicCard>
            </div>
          </div>
        </div>
      </div>
      <ClientGlobe />
    </div>
  )
}
