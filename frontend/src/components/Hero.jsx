import React from "react";

export default function Hero() {
  const handleScrollToCta = () => {
    const el = document.getElementById("lead-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="overview"
      className="relative min-h-[110vh] md:min-h-[150vh] flex items-center justify-center text-white overflow-hidden pt-[var(--navbar-height)]"
    >
      {/* Background image layer */}
      <div className="absolute inset-0">
        <img
          src="/img/hero.png"
          alt="Gaur Yamuna City Studio Apartments"
          className="h-full w-full object-cover object-left md:object-left-top"
        />

        {/* Darker center band for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/5 to-black/5" />
        {/* Glow effects */}
        <div className="absolute -top-32 right-[-10%] w-72 h-72 sm:w-96 sm:h-96 bg-amber-500/25 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-[-20%] left-[-10%] w-80 h-80 sm:w-[480px] sm:h-[480px] bg-indigo-500/25 blur-3xl rounded-full" />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 px-4 sm:px-6 max-w-6xl w-full py-10 sm:py-16">
        <div className="grid md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] gap-10 items-end">
          {/* LEFT: Text content (slimmer card) */}
          <div className="flex justify-center md:justify-start">
            <div className="bg-white/5 md:bg-black/35 border border-white/10 rounded-3xl px-4 sm:px-6 md:px-7 py-5 sm:py-7 shadow-[0_24px_70px_rgba(0,0,0,0.7)] backdrop-blur max-w-xl w-full">
              {/* Top badge */}
              <div className="mb-3 sm:mb-4 flex justify-center md:justify-start">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-sm font-bold shadow-xl">
                  <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-white animate-pulse" />
                  <span>NCR&apos;S BIGGEST RETAIL DESTINATION</span>
                </div>
              </div>

              {/* Main headline */}
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-3 sm:mb-4 text-center md:text-left">
                <span className="block text-white drop-shadow-[0_6px_24px_rgba(0,0,0,0.9)]">
                  Studio Apartments at NCR&apos;s
                </span>
                <span className="block bg-gradient-to-r from-amber-200 via-yellow-200 to-orange-300 bg-clip-text text-transparent drop-shadow-[0_10px_32px_rgba(0,0,0,1)]">
                  Next Growth Hub
                </span>
              </h1>

              {/* Subheadline (compact) */}
              <p className="text-xs sm:text-sm md:text-base text-gray-100/90 mb-4 sm:mb-5 leading-relaxed">
                Premium studio apartments inside a landmark mixed-use community with a massive retail destination on Yamuna Expressway.
              </p>

              {/* Location Info */}
              <div className="mb-4 sm:mb-5 flex justify-center md:justify-start">
                <div className="inline-flex items-center gap-3 rounded-2xl bg-white/8 backdrop-blur border border-white/20 px-4 py-3 shadow-[0_18px_45px_rgba(0,0,0,0.6)]">
                  <span className="text-xl sm:text-2xl">📍</span>
                  <div className="text-left">
                    <div className="text-sm sm:text-base font-semibold">
                      Gaur Yamuna City
                    </div>
                    <div className="text-[11px] sm:text-xs text-gray-200/90">
                      YEIDA, Greater Noida • Near NOIDA International Airport
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons: all go to final CTA */}
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-2.5 sm:gap-3 mb-4">
                <button
                  onClick={handleScrollToCta}
                  className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold px-6 sm:px-8 py-3 rounded-full shadow-[0_15px_40px_rgba(234,88,12,0.45)] hover:scale-105 active:scale-95 transition-all text-sm sm:text-base"
                >
                  Register Now – Get Early Access
                </button>
                <button
                  onClick={handleScrollToCta}
                  className="w-full sm:w-auto bg-white/10 backdrop-blur border-2 border-white/40 text-white font-semibold px-6 sm:px-8 py-3 rounded-full hover:bg-white/20 hover:border-white/70 active:scale-95 transition-all text-sm sm:text-base"
                >
                  Download Brochure
                </button>
              </div>

              {/* Urgency text */}
              <p className="text-[11px] sm:text-xs text-yellow-300 font-semibold text-center md:text-left">
                ⚡ Limited inventory • Early-bird pricing • High rental potential.
              </p>

              {/* Key highlights (tight) */}
              <div className="mt-4 grid grid-cols-3 gap-2 max-w-md">
                {["Retail Hub", "Luxury Hotel", "High Multi-Level Parking"].map(
                  (item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={handleScrollToCta}
                      className="rounded-xl bg-white/8 border border-white/20 px-2 py-2 text-[9px] sm:text-[11px] text-center hover:bg-white/14 transition-all cursor-pointer"
                    >
                      <span className="font-semibold">{item}</span>
                    </button>
                  )
                )}
              </div>
            </div>
          </div>

          {/* RIGHT: RERA image */}
{/* RIGHT: RERA image */}
<div className="flex md:items-end justify-center md:justify-end">
  <div className="bg-white/40 md:bg-white/50 border border-white/10 rounded-3xl px-4 sm:px-6 md:px-7 py-5 sm:py-7 shadow-[0_24px_70px_rgba(0,0,0,0.7)] backdrop-blur opacity-80 text-center md:text-right max-w-xs sm:max-w-sm md:max-w-md w-full">
    <img
      src="/img/rera.png"
      alt="Project RERA Registration"
      className="w-2/3 sm:w-3/4 md:w-full max-w-[380px] sm:max-w-[420px] md:max-w-[480px] mx-auto h-auto object-contain drop-shadow-[0_18px_55px_rgba(0,0,0,0.85)]"
    />
    <p className="mt-3 text-xs sm:text-sm text-black font-bold">
      RERA compliant project ensuring transparency and security for your investment.
    </p>

  </div>
</div>

        </div>
      </div>
    </section>
  );
}
