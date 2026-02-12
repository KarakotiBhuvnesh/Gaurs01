import ImageBlock from "./ImageBlock";

export default function Standout() {
  return (
    <section
      id="standout"
      className="py-8 px-4 sm:py-12 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-10">
          <div className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white text-[11px] sm:text-xs font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 uppercase tracking-wide">
            Iconic Studio Apartment
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
            A Landmark Investment Opportunity
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Welcome to a landmark development that seamlessly blends luxury residences, premium hospitality, high-street retail, and world-class infrastructure. Strategically located in Gaur Yamuna City, Yamuna Expressway, this iconic project is designed to deliver a modern urban lifestyle where living, working, leisure, and convenience coexist effortlessly.
          </p>
        </div>

        {/* Image Block */}
        <div className="mb-6 sm:mb-8">
          <ImageBlock image="/img/hero.png">
            <div className="space-y-4 sm:space-y-6">
              {/* Project Features */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-4 sm:p-6 border-l-4 border-orange-600">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Project Offers:
                </h3>
                <ul className="space-y-2.5 sm:space-y-3 text-sm sm:text-base text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold mt-0.5 text-sm">✔</span>
                    <div>
                      <span className="font-semibold block">Premium Residential Apartments</span>
                      <p className="text-xs sm:text-sm text-gray-600">Luxury studio living with modern amenities</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold mt-0.5 text-sm">✔</span>
                    <div>
                      <span className="font-semibold block">Integrated Luxury Hotel</span>
                      <p className="text-xs sm:text-sm text-gray-600">World-class hospitality within the complex</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold mt-0.5 text-sm">✔</span>
                    <div>
                      <span className="font-semibold block">Vibrant Retail & Entertainment Zones</span>
                      <p className="text-xs sm:text-sm text-gray-600">High-street shopping, dining and entertainment</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold mt-0.5 text-sm">✔</span>
                    <div>
                      <span className="font-semibold block">Massive Multi-Level Parking Infrastructure</span>
                      <p className="text-xs sm:text-sm text-gray-600">Ample parking with advanced security</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold mt-0.5 text-sm">✔</span>
                    <div>
                      <span className="font-semibold block">Exceptional Connectivity to Jewar International Airport</span>
                      <p className="text-xs sm:text-sm text-gray-600">Just 24 km away - prime location advantage</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* CTA Button */}
              <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold px-6 sm:px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all text-sm sm:text-base w-full sm:w-auto">
                Get Project Details Now
              </button>
            </div>
          </ImageBlock>
        </div>

        {/* Bottom 3-card row - compact icons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="bg-white rounded-xl p-4 sm:p-5 shadow-md border border-gray-200 hover:shadow-lg transition-all text-center">
            <div className="text-2xl sm:text-3xl mb-2">🏢</div>
            <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-1">Mixed-Use Development</h4>
            <p className="text-xs sm:text-sm text-gray-600">Residential, retail & hospitality integrated</p>
          </div>
          <div className="bg-white rounded-xl p-4 sm:p-5 shadow-md border border-gray-200 hover:shadow-lg transition-all text-center">
            <div className="text-2xl sm:text-3xl mb-2">✈️</div>
            <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-1">Airport Connectivity</h4>
            <p className="text-xs sm:text-sm text-gray-600">24 km from Jewar International Airport</p>
          </div>
          <div className="bg-white rounded-xl p-4 sm:p-5 shadow-md border border-gray-200 hover:shadow-lg transition-all text-center">
            <div className="text-2xl sm:text-3xl mb-2">🎯</div>
            <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-1">Strategic Location</h4>
            <p className="text-xs sm:text-sm text-gray-600">Gaur Yamuna City, Yamuna Expressway</p>
          </div>
        </div>

      </div>
    </section>
  );
}
