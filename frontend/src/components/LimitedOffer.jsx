const LimitedOffer = ({ onCTAClick }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-orange-950 to-black py-12 px-4 sm:py-14 sm:px-6 text-white">
      {/* Soft Glow Background Effect (smaller on mobile) */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-64 h-64 bg-orange-600/20 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 w-56 h-56 bg-red-500/15 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto text-center">


        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mb-4">
          Secure Your Investment Before{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
            Prices Rise
          </span>
        </h2>

        {/* Subtext (shorter) */}
        <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base mb-6 leading-relaxed">
          Early buyers get priority allotment and pre-launch pricing near Jewar
          Airport.
        </p>

        {/* Benefits Grid */}
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all">
            <div className="text-2xl mb-2">🎯</div>
            <h3 className="font-bold text-sm mb-1">Priority Units</h3>
            <p className="text-xs text-gray-400">Best units for early investors</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all">
            <div className="text-2xl mb-2">💰</div>
            <h3 className="font-bold text-sm mb-1">Pre-Launch Rates</h3>
            <p className="text-xs text-gray-400">Lock prices before launch</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all">
            <div className="text-2xl mb-2">📈</div>
            <h3 className="font-bold text-sm mb-1">Better Upside</h3>
            <p className="text-xs text-gray-400">Early entry, higher growth</p>
          </div>
        </div>

        {/* Urgency Messaging (shorter) */}
        <div className="bg-orange-600/15 border mt-5 border-orange-500/40 rounded-lg p-4 mb-6 max-w-xl mx-auto">
          <p className="text-orange-300 font-semibold text-xs sm:text-sm">
            ⏰ Limited studios • Prices increase post-launch
          </p>
        </div>

        {/* CTA Button */}
        <button
          onClick={onCTAClick}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-orange-600 to-red-600 px-8 py-3 text-sm sm:text-base font-bold text-white shadow-xl shadow-orange-600/40 hover:from-orange-700 hover:to-red-700 hover:scale-105 transition-all duration-300"
        >
          <span>Unlock Pre-Launch Offer</span>
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>

        {/* Trust Micro-copy */}
        <p className="mt-4 text-[11px] sm:text-xs text-gray-400">
          🔒 No spam. Your details stay private.
        </p>
      </div>
    </section>
  );
};

export default LimitedOffer;
