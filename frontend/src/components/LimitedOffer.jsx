const LimitedOffer = ({ onCTAClick }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-orange-950 to-black py-20 px-6 text-white">
      
      {/* Soft Glow Background Effect */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-orange-600/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-red-500/15 rounded-full blur-3xl" />
      
      <div className="relative max-w-6xl mx-auto text-center">
        
        {/* Badge with Animation */}
        <div className="inline-block mb-6 px-6 py-3 rounded-full bg-gradient-to-r from-orange-600/30 to-red-600/30 border border-orange-500/50 text-orange-300 text-sm font-bold tracking-wide animate-pulse">
          ⚡ LIMITED PRE-LAUNCH WINDOW ⚡
        </div>
        
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Secure Your Investment Before{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
            Prices Rise
          </span>
        </h2>
        
        {/* Subtext */}
        <p className="text-slate-300 max-w-3xl mx-auto text-xl mb-8 leading-relaxed">
          Early buyers get <span className="text-orange-400 font-semibold">priority allotment</span>, 
          <span className="text-orange-400 font-semibold"> exclusive pricing</span>, and 
          <span className="text-orange-400 font-semibold"> maximum upside potential</span> near Jewar Airport.
        </p>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="font-bold text-lg mb-2">Priority Allotment</h3>
            <p className="text-sm text-gray-400">Best units reserved for early investors</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all">
            <div className="text-3xl mb-3">💰</div>
            <h3 className="font-bold text-lg mb-2">Pre-Launch Pricing</h3>
            <p className="text-sm text-gray-400">Lock rates before public launch</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all">
            <div className="text-3xl mb-3">📈</div>
            <h3 className="font-bold text-lg mb-2">Maximum Returns</h3>
            <p className="text-sm text-gray-400">Early entry = highest appreciation</p>
          </div>
        </div>

        {/* Urgency Messaging */}
        <div className="bg-orange-600/20 border border-orange-500/40 rounded-xl p-6 mb-8 max-w-2xl mx-auto">
          <p className="text-orange-300 font-semibold text-lg">
            ⏰ Limited studios available • Prices increase post-launch • Jewar Airport impact imminent
          </p>
        </div>
        
        {/* CTA Button */}
        <button
          onClick={onCTAClick}
          className="inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-orange-600 to-red-600 px-12 py-5 text-lg font-bold text-white shadow-2xl shadow-orange-600/40 hover:from-orange-700 hover:to-red-700 hover:scale-105 transition-all duration-300"
        >
          <span>Unlock Pre-Launch Offer Details</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>

        {/* Trust Micro-copy */}
        <p className="mt-6 text-sm text-gray-400">
          🔒 No spam. Your information is secure. Early-bird benefits expire soon.
        </p>
      </div>
    </section>
  );
};

export default LimitedOffer;
