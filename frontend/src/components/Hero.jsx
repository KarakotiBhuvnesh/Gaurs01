export default function Hero() {
  return (
    <section
        id="overview"
        className="relative min-h-[120vh] flex items-center justify-center text-white pt-[var(--navbar-height)]"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 text-center px-4 max-w-3xl pt-20 md:pt-24">

        <h1 className="text-3xl md:text-6xl font-bold leading-tight">

          NCR’s Biggest Retail & Lifestyle Destination
        </h1>

        <p className="mt-4 text-xl">
          Smart Studio Apartments at the Gateway of Yamuna Expressway &
          Jewar Airport
        </p>

        <div className="mt-4 text-lg">
          📍 Gaur Yamuna City | Yamuna Expressway <br />
          ✈ Minutes from Jewar International Airport
        </div>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

          <button className="btn-primary">Register Now</button>
          <button className="border border-white px-6 py-3 rounded">
            Get Pricing
          </button>
        </div>

        <p className="mt-4 text-sm text-slate-200">
          Limited inventory • Early-bird benefits
        </p>

        <div className="mt-16 grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {[
          "Biggest Retail Destination",
          "Near Jewar Airport",
          "High Rental Demand",
          "Studio Apartments"
        ].map((item) => (
          <div
            key={item}
            className="glass rounded-xl p-6 text-center text-white"
          >
            <p className="font-semibold">{item}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
