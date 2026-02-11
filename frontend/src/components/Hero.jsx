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
      
      <div className="relative z-10 text-center px-4 max-w-4xl pt-20 md:pt-24">
        {/* Main Headline */}
        <div className="mb-4">
          <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-bold px-4 py-2 rounded-full">
            NCR'S BIGGEST RETAIL DESTINATION
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Studio Apartments at NCR's Next Growth Hub
        </h1>
        
        <p className="text-xl md:text-2xl font-light text-gray-200 mb-6">
          Own a premium studio apartment inside a landmark mixed-use development featuring one of the largest retail destinations on Yamuna Expressway
        </p>
        
        {/* Location Info */}
        <div className="mt-6 text-lg space-y-2">
          <div className="flex items-center justify-center gap-2">
            <span>📍</span>
            <span className="font-semibold">Gaur Yamuna City | YEIDA, Greater Noida</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span>✈️</span>
            <span className="font-semibold">24 KM from Jewar International Airport</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span>💰</span>
            <span className="font-semibold">Starting ~₹1 Cr* | High Rental Yield 7-9%</span>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
            Register Now - Get Early Access Pricing
          </button>
          <button className="bg-white/10 backdrop-blur-md border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white/20 transition-all">
            Download Brochure
          </button>
        </div>
        
        {/* Urgency Text */}
        <p className="mt-6 text-sm text-yellow-300 font-semibold animate-pulse">
          ⚡ Limited Inventory Available • Early-Bird Benefits • Act Now!
        </p>
        
        {/* Key Highlights Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {[
            {  text: "Biggest Retail Hub" },
            {  text: "Near Upcoming Jewar Airport" },
            {  text: "High Rental Demand" },
            {  text: "Smart Studio Living" }
          ].map((item) => (
            <div
              key={item.text}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all"
            >
              <div className="text-4xl mb-2">{item.icon}</div>
              <p className="font-semibold text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
