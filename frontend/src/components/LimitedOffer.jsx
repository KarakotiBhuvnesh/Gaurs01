const LimitedOffer = ({ onCTAClick }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-950 to-black py-20 px-6 text-white">
      
      {/* Soft Glow Background Effect */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-red-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto text-center">
        
        {/* Badge */}
        <div className="inline-block mb-6 px-4 py-2 rounded-full bg-red-600/20 border border-red-600/40 text-red-400 text-sm tracking-wide">
          Limited Pre-Launch Window
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          Secure Your Investment Before  
          <span className="text-red-500"> Prices Rise</span>
        </h2>

        {/* Subtext */}
        <p className="text-slate-300 max-w-2xl mx-auto text-lg mb-10">
          Early buyers get priority allotment, exclusive pricing and
          maximum upside potential near Jewar Airport.
        </p>

        {/* CTA */}
        <button
          onClick={onCTAClick}
          className="inline-flex items-center justify-center rounded-xl bg-red-600 px-10 py-4 text-sm font-semibold text-white shadow-lg shadow-red-600/30 hover:bg-red-700 hover:scale-105 transition duration-300"
        >
          Unlock Offer Details
        </button>

      </div>
    </section>
  );
};

export default LimitedOffer;
