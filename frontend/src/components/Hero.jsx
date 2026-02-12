export default function Hero() {
  return (
    <section
      id="overview"
      className="relative min-h-screen flex items-center justify-center text-white pt-[var(--navbar-height)]"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 text-center px-4 max-w-2xl pt-16 pb-12 sm:pt-20 sm:pb-16">
        {/* Main Headline */}
        <div className="mb-3">
          <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs sm:text-sm font-bold px-3 py-2 rounded-full">
            NCR'S BIGGEST RETAIL DESTINATION
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug mb-3">
          Studio Apartments at NCR&apos;s Next Growth Hub
        </h1>

        <p className="text-sm sm:text-base md:text-xl font-light text-gray-200 mb-5">
          Own a premium studio apartment inside a landmark mixed-use development
          featuring one of the largest retail destinations on Yamuna Expressway.
        </p>

        {/* Location Info */}
        <div className="mt-4 text-sm sm:text-base space-y-1">
          <div className="flex items-center justify-center gap-2">
            <span>📍</span>
            <span className="font-semibold">
              Gaur Yamuna City | YEIDA, Greater Noida
            </span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold px-6 py-3 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all text-sm sm:text-base">
            Register Now - Get Early Access Pricing
          </button>
          <button className="bg-white/10 backdrop-blur-md border border-white/60 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-all text-sm sm:text-base">
            Download Brochure
          </button>
        </div>

        {/* Urgency Text */}
        <p className="mt-4 text-xs sm:text-sm text-yellow-300 font-semibold animate-pulse">
          ⚡ Limited Inventory Available • Early-Bird Benefits • Act Now!
        </p>

        {/* Key Highlights Grid */}
        {/* Key Highlights Grid */}
        <div className="mt-8 mb-4 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { text: "Biggest Retail Hub" },
              { text: "Near Upcoming Jewar Airport" },
              { text: "High Rental Demand" },
              { text: "Iconic Service Apartments" },
            ].map((item) => (
              <div
                key={item.text}
                className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all"
              >
                <p className="font-semibold text-xs sm:text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
