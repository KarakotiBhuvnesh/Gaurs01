export default function Hero() {
  return (
    <section className="bg-primary text-white text-center px-6 py-20">
      <h1 className="text-4xl md:text-6xl font-bold">
        Studios Inside NCR’s Biggest Retail Destination
      </h1>
      <p className="mt-4 text-lg">
        Live Smart. Invest at NCR’s Next Growth Hub
      </p>
      <p className="mt-2">
        Gateway of Yamuna Expressway & Jewar Airport
      </p>
      <div className="mt-8 flex gap-4 justify-center flex-wrap">
        <button className="bg-gold px-6 py-3">Enquire Now</button>
        <button className="border px-6 py-3">Get Pricing</button>
      </div>
      <p className="mt-4 text-sm opacity-80">
        Limited inventory • Early-bird benefits available
      </p>
    </section>
  )
}