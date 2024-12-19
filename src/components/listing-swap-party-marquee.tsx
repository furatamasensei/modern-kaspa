import Marquee from '@/components/ui/marquee'

const listings = [
  {
    link: 'https://www.kraken.com',
    img: '/images/listings/kraken-logo-web.webp',
    alt: 'Kraken',
  },
  {
    link: 'https://www.kucoin.com/',
    img: '/images/listings/kucoin-logo.webp',
    alt: 'KuCoin',
  },
  {
    link: 'https://www.mexc.com/exchange/KAS_USDT',
    img: '/images/listings/MEXC-White.webp',
    alt: 'MEXC',
  },
  {
    link: 'https://www.coinex.com/exchange/KAS-USDT',
    img: '/images/listings/coinEX-White.webp',
    alt: 'coinEX',
  },
  {
    link: 'https://www.gate.io/trade/KAS_USDT',
    img: '/images/listings/Kaspa-Gate.webp',
    alt: 'Gate.io',
  },
  {
    link: 'https://www.digifinex.com/en-ww/trade/USDT/KAS',
    img: '/images/listings/digifinexwhite.png.webp',
    alt: 'digifinexwhite',
  },
  {
    link: 'https://xeggex.com/',
    img: '/images/listings/xeggexwhite.png.webp',
    alt: 'Xeggex',
  },
  {
    link: 'https://uphold.com',
    img: '/images/listings/uphold-logo.webp',
    alt: 'Uphold',
  },
  {
    link: 'https://www.bydfi.com/en/spot/kas_usdt',
    img: '/images/listings/ByBit-Logo.webp',
    alt: 'ByBit',
  },
  {
    link: 'https://www.bitget.com',
    img: '/images/listings/Bitget-Logo-WHT.webp',
    alt: 'Bitget',
  },
  {
    link: 'https://www.lbank.info',
    img: '/images/listings/Lbank-Logo-WHT.webp',
    alt: 'LBank',
  },
  {
    link: 'https://www.bydfi.com/en-US/trade/spot/KASUSDT',
    img: '/images/listings/bydfi-logo-white.webp',
    alt: 'bydfi',
  },
  {
    link: 'https://calebandbrown.com',
    img: '/images/listings/CalebBrown.webp',
    alt: 'CalebBrown',
  },
  {
    link: 'http://www.btse.com',
    img: '/images/listings/BTSE-logo-WHT.webp',
    alt: 'BTSE',
  },
  {
    link: 'https://exchang.io',
    img: '/images/listings/Exchangio_logo_transparent_white.webp',
    alt: 'Exchangio',
  },
  {
    link: 'https://www.altcointrader.co.za/kas',
    img: '/images/listings/AltTrader-WHT.webp',
    alt: 'AltTrader',
  },
]

const swaps = [
  {
    link: 'https://stealthex.io',
    img: '/images/swaps/GKu7kH7asAA1crJ.webp',
    alt: 'StealthEX',
  },
  {
    link: 'https://changenow.io',
    img: '/images/swaps/changenow-logo-white.webp',
    alt: 'ChangeNOW',
  },
  {
    link: 'https://simpleswap.io',
    img: '/images/swaps/simpleswap-logo-web.webp',
    alt: 'Simple Swap',
  },
  {
    link: 'https://www.rocketx.exchange',
    img: '/images/swaps/RX-Coloured-Logo-white-web.webp',
    alt: 'RocketX',
  },
  {
    link: 'https://godex.io',
    img: '/images/swaps/godex.webp',
    alt: 'GODEX',
  },
  {
    link: 'https://dapp.chainge.finance',
    img: '/images/swaps/chainge-logo-web.webp',
    alt: 'Chainge',
  },
]

const thirdPartyWallets = [
  {
    link: 'https://chainge.finance',
    img: '/images/wallets/c20-logo-full-no-bg-in-white-2.svg',
    alt: 'Chainge',
  },
  {
    link: 'https://zelcore.io',
    img: '/images/wallets/zelcore-logo-web-e1724780892949.webp',
    alt: 'Zelcore',
  },
  {
    link: 'https://tangem.com',
    img: '/images/wallets/8C6E5891-2D18-4DF9-AC45-DBC2A088454F.webp',
    alt: 'Tangem',
  },
  {
    link: 'https://onekey.so',
    img: '/images/wallets/onekey_logotype_mono_white-e1685807641159.webp',
    alt: 'OneKey',
  },
  {
    link: 'https://www.okx.com/web3',
    img: '/images/wallets/OKX_Web3_Wordmark-Horizontal_White.webp',
    alt: 'OKX Web3',
  },
  {
    link: 'https://www.safepal.com',
    img: '/images/wallets/safepal-white-web.webp',
    alt: 'Safepal',
  },
  {
    link: 'https://walletnow.app',
    img: '/images/wallets/nowwallet.webp',
    alt: 'NOWWallet',
  },
  {
    link: 'https://wallet.coinex.com',
    img: '/images/wallets/coinwx-wallet.webp',
    alt: 'CoinEx Wallet',
  },
]

export default function ListingSwapPartyMarquee() {
  return (
    <div className="pt-32 space-y-6 lg:pt-60">
      <div className="px-6 lg:px-0 max-w-2xl mx-auto text-center space-y-4">
        <div className="text-4xl font-bold lg:text-6xl lg:leading-none">
          Listing, Swaps and 3rd Party Wallets
        </div>
        <div className="text-muted-foreground">
          Choose from these convenient options to buy, hold, and manage your KAS
          coins
        </div>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl">
        <Marquee pauseOnHover className="[--duration:40s]">
          {listings.map((listing) => (
            <a
              key={listing.link}
              href={listing.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center opacity-30 hover:opacity-100 transition-opacity duration-200"
            >
              <img
                src={listing.img}
                alt={listing.alt}
                className="h-16 w-32 object-contain"
              />
            </a>
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:40s]">
          {swaps.map((listing) => (
            <a
              key={listing.link}
              href={listing.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center opacity-30 hover:opacity-100 transition-opacity duration-200"
            >
              <img
                src={listing.img}
                alt={listing.alt}
                className="h-16 w-32 object-contain"
              />
            </a>
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:40s]">
          {thirdPartyWallets.map((listing) => (
            <a
              key={listing.link}
              href={listing.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center opacity-30 hover:opacity-100 transition-opacity duration-200"
            >
              <img
                src={listing.img}
                alt={listing.alt}
                className="h-16 w-32 object-contain"
              />
            </a>
          ))}
        </Marquee>
      </div>
    </div>
  )
}
