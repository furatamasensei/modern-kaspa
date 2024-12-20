export default function PublicDonation() {
  return (
    <div className="container mx-auto py-32 lg:py-60 lg:pb-32">
      <div className="px-6 lg:px-0 max-w-4xl mx-auto space-y-8 text-center">
        <div className="text-4xl font-bold lg:text-6xl lg:leading-none">
          Public Donations Are Welcome
        </div>

        <div className="text-muted-foreground">
          We are a community-driven project, and we rely on donations to fund
          our development efforts. Your support helps us to continue building a
          better future for all.
        </div>
        <div>
          <div className="font-bold">Manual donations dev-fund-address</div>
          <a
            href="https://explorer.kaspa.org/addresses/kaspa:precqv0krj3r6uyyfa36ga7s0u9jct0v4wg8ctsfde2gkrsgwgw8jgxfzfc98"
            className="text-teal-400 hover:text-teal-600 transition-colors"
            style={{ overflowWrap: 'anywhere' }}
          >
            kaspa:precqv0krj3r6uyyfa36ga7s0u9jct0v4wg8ctsfde2gkrsgwgw8jgxfzfc98
          </a>
        </div>
        <div>
          <div className="font-bold">Mining dev-fund-address</div>
          <a
            href="https://explorer.kaspa.org/addresses/kaspa:pzhh76qc82wzduvsrd9xh4zde9qhp0xc8rl7qu2mvl2e42uvdqt75zrcgpm00"
            className="text-teal-400 hover:text-teal-600 transition-colors"
            style={{ overflowWrap: 'anywhere' }}
          >
            kaspa:pzhh76qc82wzduvsrd9xh4zde9qhp0xc8rl7qu2mvl2e42uvdqt75zrcgpm00
          </a>
        </div>
        <div className="text-muted-foreground text-sm">
          The wallet is managed by 4 members of the community (msutton, Tim, The
          SheepCat and demisrael) who were publicly voted in to become the
          Treasurers. This is a multi-signature wallet with a 2/4 signing
          formula, so it needs at least 2 of the Treasurers to sign the spending
          transaction for it to become commutable. All spendings are published
          in the #devfund channel and is performed according to the results of
          public votes in either #funding-pools or #votes channels
        </div>
      </div>
    </div>
  )
}
