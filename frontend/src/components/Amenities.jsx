export default function Amenities() {
  const amenities = [
    { name: "24/7 Security & Power Backup", icon: "🛡️", category: "Essential" },
    { name: "Multi-Level Parking", icon: "🅿️", category: "Essential" },
    { name: "Grand Lobbies & Drop-off", icon: "🏛️", category: "Convenience" },
    { name: "Swimming Pool & Podium", icon: "🏊", category: "Recreation" },
    { name: "Club & Leisure Zones", icon: "🎯", category: "Social" },
    { name: "Landscaping & Gardens", icon: "🌳", category: "Wellness" },
    { name: "Food Courts & Multiplex", icon: "🎬", category: "Entertainment" },
    { name: "Resort-Style Living", icon: "⭐", category: "Lifestyle" },
  ];

  return (
    <section
      id="amenities"
      className="py-8 px-4 sm:py-10 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-block bg-gradient-to-r from-orange-600 to-red-600 text-white text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full mb-2 uppercase tracking-wide">
            Premium Lifestyle
          </div>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1">
            World-Class Amenities
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto px-2">
            Resort-style living with amenities that support higher rental value.
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5 sm:mb-6">
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-3 sm:p-4 border-l-4 border-orange-600">
            <div className="text-xl sm:text-2xl mb-1.5">🎬</div>
            <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-0.5">
              Entertainment Hub
            </h3>
            <p className="text-[11px] sm:text-xs text-gray-700">
              Multiplex, food courts & retail
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-3 sm:p-4 border-l-4 border-blue-600">
            <div className="text-xl sm:text-2xl mb-1.5">🏊</div>
            <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-0.5">
              Recreation Zones
            </h3>
            <p className="text-[11px] sm:text-xs text-gray-700">
              Pool, club & gardens
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-3 sm:p-4 border-l-4 border-green-600">
            <div className="text-xl sm:text-2xl mb-1.5">🛡️</div>
            <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-0.5">
              Premium Security
            </h3>
            <p className="text-[11px] sm:text-xs text-gray-700">
              24/7 security & parking
            </p>
          </div>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 mb-5 sm:mb-6">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="bg-white hover:bg-gradient-to-br hover:from-orange-50 hover:to-red-50 rounded-md sm:rounded-lg p-2.5 sm:p-3.5 border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all duration-300 text-center group"
            >
              <div className="text-xl sm:text-2xl mb-1 sm:mb-1.5 group-hover:scale-110 transition-transform">
                {amenity.icon}
              </div>
              <div className="text-[9px] sm:text-[10px] text-orange-600 uppercase font-semibold mb-0.5">
                {amenity.category}
              </div>
              <h5 className="text-[10px] sm:text-xs font-semibold text-gray-900 leading-snug">
                {amenity.name}
              </h5>
            </div>
          ))}
        </div>

        {/* Blue Stats Bar */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg sm:rounded-xl p-3.5 sm:p-5 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 text-center text-white">
            <div className="flex flex-col items-center">
              <div className="text-base sm:text-xl font-bold mb-0.5">Resort</div>
              <div className="text-[9px] sm:text-[10px] opacity-90">
                Style Living
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-base sm:text-xl font-bold mb-0.5">24/7</div>
              <div className="text-[9px] sm:text-[10px] opacity-90">
                Security
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-base sm:text-xl font-bold mb-0.5">8+</div>
              <div className="text-[9px] sm:text-[10px] opacity-90">
                Amenities
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-base sm:text-xl font-bold mb-0.5">High</div>
              <div className="text-[9px] sm:text-[10px] opacity-90">
                Rental Value
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
