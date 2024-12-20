import NumberTicker from '@/components/ui/number-ticker'
import ShineBorder from '@/components/ui/shine-border'
import {
  BlocksIcon,
  Building2,
  ChartNoAxesCombinedIcon,
  CoinsIcon,
  FuelIcon,
  HashIcon,
  PanelTopDashed,
  Rotate3DIcon,
  SliceIcon,
  TrophyIcon,
} from 'lucide-react'
import Link from 'next/link'
import { Card, CardContent } from './ui/card'

export default async function NetworkStats() {
  const api = 'https://api.kaspa.org/info'
  const headers = { accept: 'application/json' }

  const [
    hashRate,
    price,
    halving,
    feeEstimate,
    blockReward,
    coinSupply,
    marketCap,
  ] = await Promise.all([
    fetch(`${api}/hashrate`, { headers }).then((e) => e.json()),
    fetch(`${api}/price`, { headers }).then((e) => e.json()),
    fetch(`${api}/halving`, { headers }).then((e) => e.json()),
    fetch(`${api}/fee-estimate`, { headers }).then((e) => e.json()),
    fetch(`${api}/blockreward`, { headers }).then((e) => e.json()),
    fetch(`${api}/coinsupply`, { headers }).then((e) => e.json()),
    fetch(`${api}/marketcap`, { headers }).then((e) => e.json()),
  ])

  /**
   * Converts a number to a human-readable unit, handling both small and large values.
   * @param {number} number - The input number.
   * @returns {string} - The formatted value with the appropriate unit.
   */
  function convertToReadableUnit(num: string | number) {
    if (typeof num === 'string') {
      num = parseFloat(num)
    }

    num = Math.round((num *= 1e12))

    const units = [
      { value: 1e-6, name: 'MicroHash' },
      { value: 1e-3, name: 'MilliHash' },
      { value: 1, name: 'UnitHash' },
      { value: 1e3, name: 'ThousandHash' },
      { value: 1e6, name: 'MillionHash' },
      { value: 1e9, name: 'BillionHash' },
      { value: 1e12, name: 'TrillionHash' },
      { value: 1e15, name: 'QuadrillionHash' },
      { value: 1e18, name: 'ExaHash' },
      { value: 1e21, name: 'ZettaHash' },
      { value: 1e24, name: 'YottaHash' },
      { value: 1e27, name: 'RonnaHash' },
      { value: 1e30, name: 'QueccaHash' },
    ]

    // Handle values less than 1 (i.e., lower than "Unit")
    if (num < 1) {
      for (let i = 0; i < units.length; i++) {
        if (num >= units[i].value) {
          const convertedValue = num / units[i].value
          return `${convertedValue.toFixed(2)} ${units[i].name}`
        }
      }
    }

    // Handle values greater than or equal to 1 (i.e., from "Unit" and up)
    for (let i = units.length - 1; i >= 0; i--) {
      if (num >= units[i].value) {
        const convertedValue = num / units[i].value
        return `${convertedValue.toFixed(2)} ${units[i].name}`
      }
    }

    return `${num.toFixed(2)} (Unscaled)` // Fallback for extremely small values
  }

  return (
    <div className="relative">
      <div className="container mx-auto px-6 pt-32 lg:px-0 lg:py-60 lg:pb-0 space-y-6 relative">
        <div className="lg:px-0 container mx-auto space-y-4">
          <div className="text-4xl font-bold lg:text-5xl lg:leading-none text-center lg:text-left">
            Network <span className="text-teal-400">Stats</span>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-12">
            <ShineBorder
              className="p-0 w-full overflow-hidden"
              color={['#2CD4BF']}
            >
              <Card className="w-full h-full">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center space-x-4">
                      <ChartNoAxesCombinedIcon className="text-teal-400" />
                      <div className="text-xl">Hash Rate</div>
                    </div>
                    <div className="text-2xl text-teal-400">
                      {convertToReadableUnit(hashRate.hashrate)}
                      <span className="text-sm text-muted-foreground">
                        {' '}
                        / second
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ShineBorder>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <Card className="relative">
              <CardContent className="p-6">
                <div className="h-[150px] flex flex-col justify-between">
                  <div className="flex items-center space-x-4">
                    <FuelIcon className="text-teal-400" />
                    <div className="text-xl">Priority Gas Fee</div>
                  </div>
                  <div className="flex justify-end">
                    <div className="text-right space-y-1">
                      <div className="text-2xl md:text-3xl">
                        <NumberTicker
                          value={
                            ((feeEstimate.priorityBucket.feerate ?? 0) * 2036) /
                            100_000_000
                          }
                          decimalPlaces={8}
                        />
                        KAS
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Last update {new Date().toUTCString()}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <Card className="relative">
              <CardContent className="p-6">
                <div className="h-[150px] flex flex-col justify-between">
                  <div className="flex items-center space-x-4">
                    <HashIcon className="text-teal-400" />
                    <div className="text-xl">Hash Algorithm</div>
                  </div>
                  <div className="flex justify-end">
                    <div className="text-right space-y-1">
                      <div className="text-2xl md:text-3xl">kHeavyHash</div>
                      <a
                        href="https://arxiv.org/pdf/1911.05193.pdf"
                        className="block text-sm text-muted-foreground text-teal-400 hover:text-teal-500 transition-colors"
                      >
                        Learn more
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <Card className="relative">
              <CardContent className="p-6">
                <div className="h-[150px] flex flex-col justify-between">
                  <div className="flex items-center space-x-4">
                    <Building2 className="text-teal-400" />
                    <div className="text-xl">Consensus</div>
                  </div>
                  <div className="flex justify-end">
                    <div className="text-right space-y-1">
                      <div className="text-2xl md:text-3xl">
                        Proof of Work
                        <br />
                        BlockDAG
                      </div>
                      <Link
                        href="/features/#block-dag"
                        className="block text-sm text-muted-foreground text-teal-400 hover:text-teal-500 transition-colors"
                      >
                        Learn more
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <Card className="relative">
              <CardContent className="p-6">
                <div className="h-[150px] flex flex-col justify-between">
                  <div className="flex items-center space-x-4">
                    <BlocksIcon className="text-teal-400" />
                    <div className="text-xl">Block Reward</div>
                  </div>
                  <div className="flex justify-end">
                    <div className="text-right space-y-1">
                      <div className="text-2xl md:text-3xl">
                        <NumberTicker value={blockReward.blockreward} />
                        KAS
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Last update {new Date().toUTCString()}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <Card className="relative">
              <CardContent className="p-6">
                <div className="h-[150px] flex flex-col justify-between">
                  <div className="flex items-center space-x-4">
                    <SliceIcon className="text-teal-400" />
                    <div className="text-xl">Next Reduction (Halving)</div>
                  </div>
                  <div className="flex justify-end">
                    <div className="text-right space-y-1">
                      <div className="text-2xl md:text-3xl">
                        <NumberTicker value={halving.nextHalvingAmount} />
                        KAS
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Effective at {halving.nextHalvingDate}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <Card className="relative">
              <CardContent className="p-6">
                <div className="h-[150px] flex flex-col justify-between">
                  <div className="flex items-center space-x-4">
                    <CoinsIcon className="text-teal-400" />
                    <div className="text-xl">Coin Price</div>
                  </div>
                  <div className="flex justify-end">
                    <div className="text-right space-y-1">
                      <div className="text-2xl md:text-3xl">
                        $<NumberTicker value={price.price} decimalPlaces={5} />
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Last update {new Date().toUTCString()}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <Card className="relative">
              <CardContent className="p-6">
                <div className="h-[150px] flex flex-col justify-between">
                  <div className="flex items-center space-x-4">
                    <PanelTopDashed className="text-teal-400" />
                    <div className="text-xl">Max Supply</div>
                  </div>
                  <div className="flex justify-end">
                    <div className="text-right space-y-1">
                      <div className="text-xl md:text-2xl">
                        <NumberTicker value={coinSupply.maxSupply} />
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Last update {new Date().toUTCString()}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <Card className="relative">
              <CardContent className="p-6">
                <div className="h-[150px] flex flex-col justify-between">
                  <div className="flex items-center space-x-4">
                    <Rotate3DIcon className="text-teal-400" />
                    <div className="text-xl">Circulating Supply</div>
                  </div>
                  <div className="flex justify-end">
                    <div className="text-right space-y-1">
                      <div className="text-xl md:text-2xl">
                        <NumberTicker value={coinSupply.circulatingSupply} />
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Last update {new Date().toUTCString()}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <Card className="relative">
              <CardContent className="p-6">
                <div className="h-[150px] flex flex-col justify-between">
                  <div className="flex items-center space-x-4">
                    <TrophyIcon className="text-teal-400" />
                    <div className="text-xl">Market Cap</div>
                  </div>
                  <div className="flex justify-end">
                    <div className="text-right space-y-1">
                      <div className="text-2xl">
                        $<NumberTicker value={marketCap.marketcap} />
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Last update {new Date().toUTCString()}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="absolute -z-10 -bottom-80 left-[-40%] size-[1000px] bg-[radial-gradient(circle,rgba(110,199,186,1)0%,rgba(110,199,186,0.7581626400560224)0%,rgba(9,9,11,0.3379945728291317)50%)]" />
      <div className="absolute -z-10 top-10 lg:-bottom-80 right-[-40%] size-[1000px] bg-[radial-gradient(circle,rgba(110,199,186,1)0%,rgba(110,199,186,0.7581626400560224)0%,rgba(9,9,11,0.3379945728291317)50%)]" />
    </div>
  )
}
