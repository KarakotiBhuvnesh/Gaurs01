export default function Amenities() {
  const amenities = [
    { name: "Swimming Pool & Landscaped Podium", category: "Recreation" },
    { name: "Club & Leisure Zones", category: "Social" },
    { name: "Retail, Food Courts & Multiplex", category: "Entertainment" },
    { name: "Grand Lobbies & Drop-off Zones", category: "Convenience" },
    { name: "Multi-Level Parking", category: "Essential" },
    { name: "24/7 Security & Power Backup", category: "Safety" },
    { name: "Resort-Style Living Experience", category: "Lifestyle" },
    { name: "Premium Landscaping & Gardens", category: "Wellness" },
  ];

  return (
    <section id="amenities" className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-gradient-to-r from-orange-600 to-red-600 text-white text-xs md:text-sm font-bold px-3 md:px-4 py-2 rounded-full mb-3 md:mb-4 uppercase tracking-wide">
            Premium Lifestyle
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
            Lifestyle & Amenities
            <span className="block text-xl md:text-3xl text-orange-600 font-normal mt-2">
              Higher Rental Value
            </span>
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
            Residents enjoy access to world-class facilities — everything tenants look for within one address
          </p>
        </div>

        {/* Featured Section - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          
          {/* Large Featured Card - Left */}
          <div className="lg:col-span-2 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 md:p-10 border-l-4 border-orange-600 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
            
            <div className="relative z-10">
              <div className="inline-block px-4 py-2 bg-orange-600 text-white rounded-lg text-sm font-bold mb-6">
                Entertainment Hub
              </div>
              
              <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                Everything Under One Roof
              </h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span className="text-base md:text-lg text-gray-800">Multiplex & Food Court within project</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span className="text-base md:text-lg text-gray-800">Banquet & leisure spaces</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span className="text-base md:text-lg text-gray-800">Retail shops & anchor brands</span>
                </div>
              </div>

              <p className="text-gray-700 text-sm md:text-base">
                High footfall commercial ecosystem drives consistent rental demand
              </p>
            </div>
          </div>

          {/* Stacked Cards - Right */}
          <div className="space-y-6 md:space-y-8">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all">
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded text-xs font-semibold mb-4">
                Recreation
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Pool & Club</h4>
              <p className="text-sm md:text-base text-gray-600">
                Swimming pool, landscaped podium, and club facilities
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all">
              <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded text-xs font-semibold mb-4">
                Convenience
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Premium Access</h4>
              <p className="text-sm md:text-base text-gray-600">
                Grand lobbies, drop-off zones, multi-level parking
              </p>
            </div>
          </div>
        </div>

        {/* List Style with Numbers - Different from Infrastructure */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-12 md:mb-16">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="group flex items-start gap-4 bg-white hover:bg-gray-50 rounded-xl p-4 md:p-6 border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300"
            >
              {/* Number Badge Instead of Icon */}
              <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white font-bold text-sm md:text-base group-hover:scale-110 transition-transform duration-300">
                {String(index + 1).padStart(2, '0')}
              </div>
              
              <div className="flex-1">
                <div className="text-xs text-orange-600 uppercase tracking-wider mb-1 font-semibold">
                  {amenity.category}
                </div>
                <h5 className="text-sm md:text-base font-semibold text-gray-900">
                  {amenity.name}
                </h5>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats Bar */}
        <div className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 rounded-2xl p-6 md:p-8 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center text-white">
            <div className="border-r border-white/20 last:border-r-0">
              <div className="text-2xl md:text-4xl font-bold mb-1">Resort</div>
              <div className="text-xs md:text-sm opacity-90">Style Living</div>
            </div>
            <div className="border-r border-white/20 last:border-r-0">
              <div className="text-2xl md:text-4xl font-bold mb-1">24/7</div>
              <div className="text-xs md:text-sm opacity-90">Security</div>
            </div>
            <div className="border-r border-white/20 last:border-r-0">
              <div className="text-2xl md:text-4xl font-bold mb-1">Premium</div>
              <div className="text-xs md:text-sm opacity-90">Amenities</div>
            </div>
            <div>
              <div className="text-2xl md:text-4xl font-bold mb-1">High</div>
              <div className="text-xs md:text-sm opacity-90">Rental Value</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10 md:mt-12">
          <button className="w-full sm:w-auto bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold px-8 md:px-12 py-3 md:py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all text-sm md:text-base">
            View Complete Amenities List
          </button>
        </div>
      </div>
    </section>
  );
}
