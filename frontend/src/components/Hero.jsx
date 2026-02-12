export default function Hero() {
  return (
    <section
      id="overview"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden pt-[var(--navbar-height)]"
    >
      {/* Background image layer */}
      <div className="absolute inset-0">
        <img
          src="/img/hero.png"
          alt="Gaur Yamuna City Studio Apartments"
          className="h-full w-full object-cover object-center"
        />
        {/* Dark overlay with gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-slate-900/70 to-black/85" />
        
        {/* Glow effects for flashy look */}
        <div className="absolute -top-20 sm:-top-32 right-[-15%] sm:right-[-10%] w-64 h-64 sm:w-96 sm:h-96 bg-amber-500/25 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-[-15%] sm:bottom-[-20%] left-[-15%] sm:left-[-10%] w-80 h-80 sm:w-[500px] sm:h-[500px] bg-indigo-500/20 blur-3xl rounded-full" />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl py-12 sm:pt-20 sm:pb-16">
        {/* Top badge */}
        <div className="mb-3 sm:mb-4 flex justify-center">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-sm font-bold shadow-xl">
            <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-white animate-pulse" />
            <span>NCR'S BIGGEST RETAIL DESTINATION</span>
          </div>
        </div>

        {/* Main headline */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-3 sm:mb-4">
          <span className="block drop-shadow-[0_5px_20px_rgba(0,0,0,0.8)]">
            Studio Apartments at NCR's
          </span>
          <span className="block bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-400 bg-clip-text text-transparent drop-shadow-[0_8px_30px_rgba(0,0,0,0.8)]">
            Next Growth Hub
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-sm sm:text-base md:text-lg text-gray-200/90 mb-6 sm:mb-8 px-2 max-w-2xl mx-auto leading-relaxed">
          Own a premium studio apartment inside a landmark mixed-use development featuring one of the largest retail destinations on Yamuna Expressway.
        </p>

        {/* Location Info - floating card */}
        <div className="mb-6 sm:mb-8 flex justify-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/30 px-4 py-3 sm:px-6 sm:py-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl">📍</span>
              <div className="text-left">
                <div className="text-sm sm:text-base font-bold">Gaur Yamuna City</div>
                <div className="text-[10px] sm:text-xs text-gray-300/80">YEIDA, Greater Noida</div>
              </div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/20"></div>
            <div className="text-xs sm:text-sm text-yellow-300 font-semibold">
              Minutes from Jewar International Airport
            </div>
          </div>
        </div>

        {/* CTA Buttons - full width on mobile */}
        <div className="flex flex-col sm:flex-row justify-center gap-2.5 sm:gap-3 mb-5 sm:mb-6 px-2">
          <button className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full shadow-[0_15px_40px_rgba(234,88,12,0.4)] hover:scale-105 active:scale-95 transition-all text-sm sm:text-base">
            Register Now - Get Early Access Pricing
          </button>
          <button className="w-full sm:w-auto bg-white/10 backdrop-blur-md border-2 border-white/40 text-white font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full hover:bg-white/20 hover:border-white/60 active:scale-95 transition-all text-sm sm:text-base">
            Download Brochure
          </button>
        </div>

        {/* Urgency text */}
        <p className="mb-6 sm:mb-8 text-[11px] sm:text-sm text-yellow-300 font-semibold animate-pulse px-4">
          ⚡ Limited Inventory Available • Early-Bird Benefits • Act Now!
        </p>

        {/* Key highlights - 2x2 grid on mobile */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2 sm:gap-2.5 max-w-3xl mx-auto px-2">
          {[
            "Biggest Retail Hub",
            "Near Jewar Airport",
            "High Rental Demand",
            "Iconic Service Apartments",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl sm:rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-2 sm:px-4 sm:py-2 text-[10px] sm:text-xs hover:bg-white/15 transition-all text-center"
            >
              <span className="font-semibold">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
