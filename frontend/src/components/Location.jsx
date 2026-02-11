export default function Location() {
  return (
    <section id="location" className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header - Mobile Optimized */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-gradient-to-r from-green-600 to-teal-600 text-white text-xs md:text-sm font-bold px-3 md:px-4 py-2 rounded-full mb-3 md:mb-4">
            LOCATION ADVANTAGE
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 px-2">
            The Heart of NCR's Next Growth Corridor
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Future-ready location with unmatched connectivity to Jewar Airport, Yamuna Expressway, and business hubs
          </p>
        </div>

        {/* Two Column Layout - Stacks on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          
          {/* Left - Content - Full Width on Mobile */}
          <div className="order-2 md:order-1">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
              Location Advantage — Future Ready
            </h3>
            
            <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed">
              Located in NCR's next growth corridor with unmatched expressway and airport connectivity. This location is built for long-term capital appreciation.
            </p>

            {/* Connectivity List - Mobile Friendly */}
            <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              <li className="flex items-start gap-3 bg-green-50 rounded-xl p-3 md:p-4 border-l-4 border-green-600">
                <span className="text-xl md:text-2xl">🛣️</span>
                <div className="flex-1">
                  <span className="font-semibold text-sm md:text-base text-gray-900">Direct access from Yamuna Expressway</span>
                  <p className="text-xs md:text-sm text-gray-600 mt-1">Seamless connectivity to entire NCR</p>
                </div>
              </li>
              <li className="flex items-start gap-3 bg-blue-50 rounded-xl p-3 md:p-4 border-l-4 border-blue-600">
                <span className="text-xl md:text-2xl">✈️</span>
                <div className="flex-1">
                  <span className="font-semibold text-sm md:text-base text-gray-900">24 km from Jewar International Airport</span>
                  <p className="text-xs md:text-sm text-gray-600 mt-1">India's largest upcoming airport</p>
                </div>
              </li>
              <li className="flex items-start gap-3 bg-purple-50 rounded-xl p-3 md:p-4 border-l-4 border-purple-600">
                <span className="text-xl md:text-2xl">🌆</span>
                <div className="flex-1">
                  <span className="font-semibold text-sm md:text-base text-gray-900">Close to Noida, Greater Noida & Delhi NCR</span>
                  <p className="text-xs md:text-sm text-gray-600 mt-1">Connected to major employment hubs</p>
                </div>
              </li>
              <li className="flex items-start gap-3 bg-orange-50 rounded-xl p-3 md:p-4 border-l-4 border-orange-600">
                <span className="text-xl md:text-2xl">🏢</span>
                <div className="flex-1">
                  <span className="font-semibold text-sm md:text-base text-gray-900">Surrounded by Aero City & business zones</span>
                  <p className="text-xs md:text-sm text-gray-600 mt-1">Commercial and hospitality developments</p>
                </div>
              </li>
            </ul>

            {/* CTA Button - Full Width on Small Screens */}
            <button className="w-full md:w-auto bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-bold px-6 md:px-10 py-3 md:py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all text-sm md:text-base">
              Know Why Investors Are Choosing This Location
            </button>
          </div>

          {/* Right - Image - Appears First on Mobile */}
          <div className="order-1 md:order-2 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
                alt="Location Map"
                className="w-full h-[250px] md:h-[400px] lg:h-[450px] object-cover"
              />
            </div>
            {/* Overlay Badge - Responsive */}
            <div className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-xl p-4 md:p-6 shadow-xl">
              <div className="text-2xl md:text-3xl font-bold">24 KM</div>
              <div className="text-xs md:text-sm">Jewar Airport</div>
            </div>
          </div>
        </div>

        {/* Distance Cards - Mobile Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all">
            <div className="text-2xl md:text-3xl mb-2">✈️</div>
            <div className="text-xl md:text-2xl font-bold text-green-600 mb-1">24 KM</div>
            <div className="text-xs md:text-sm text-gray-600">Jewar Airport</div>
          </div>
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all">
            <div className="text-2xl md:text-3xl mb-2">🛣️</div>
            <div className="text-xl md:text-2xl font-bold text-blue-600 mb-1">Direct</div>
            <div className="text-xs md:text-sm text-gray-600">Yamuna Expwy</div>
          </div>
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all">
            <div className="text-2xl md:text-3xl mb-2">✈️</div>
            <div className="text-xl md:text-2xl font-bold text-purple-600 mb-1">50 KM</div>
            <div className="text-xs md:text-sm text-gray-600">IGI Airport</div>
          </div>
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all">
            <div className="text-2xl md:text-3xl mb-2">🌆</div>
            <div className="text-xl md:text-2xl font-bold text-orange-600 mb-1">YEIDA</div>
            <div className="text-xs md:text-sm text-gray-600">Growth Hub</div>
          </div>
        </div>
      </div>
    </section>
  );
}
