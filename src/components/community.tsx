import CommunityMarquee from './community-marquee'

export default function Community() {
  return (
    <>
      <div className="container mx-auto px-8 lg:px-0">
        <div className="max-w-5xl pt-32 pb-16 lg:pt-60 space-y-6 leading-snug">
          <div className="font-bold  capitalize text-4xl leading-none lg:text-7xl lg:leading-none">
            Built by industry pioneers,
            <span className="text-emerald-300"> led by the people.</span>
          </div>
          <div className="text-xl">
            Kaspa is a community project –{' '}
            <i className="text-emerald-300 italic underline font-medium">
              completely open source with no central governance – following in
              the ethos of coins like Bitcoin
            </i>
            . The coin was fair-launched without pre-mining or any other
            pre-allocation of coins. Read all the in-depth details on the
            Features page.
          </div>
        </div>
      </div>
      <CommunityMarquee />
    </>
  )
}
