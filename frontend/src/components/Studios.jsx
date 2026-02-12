import ImageBlock from "./ImageBlock";

export default function Studios() {
  return (
    <section
      id="studios"
      className="py-12 px-4 sm:py-16 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white text-[11px] sm:text-xs font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3">
            SMART HOMES WITH SMART RETURNS
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Studio Apartments Designed for Today
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Efficient studio apartment configuration designed for professionals,
            airport staff, business travelers, and corporate leasing
          </p>
        </div>

        {/* Image Block with Content */}
        <ImageBlock
          reverse
          image="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
        >
          <div className="space-y-6 sm:space-y-8">
            {/* Key Features */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-4 sm:p-6 border-l-4 border-orange-600">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Why Studio Apartments?
              </h3>
              <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-xl sm:text-2xl mt-0.5">✈️</span>
                  <div>
                    <span className="font-semibold">
                      Ideal for airport & corporate staff
                    </span>
                    <p className="text-xs sm:text-sm text-gray-600">
                      24 km from Jewar Airport - perfect for aviation
                      professionals
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl sm:text-2xl mt-0.5">📈</span>
                  <div>
                    <span className="font-semibold">
                      High rental demand & fast leasing
                    </span>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Expected 7-9% annual rental yield
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl sm:text-2xl mt-0.5">💡</span>
                  <div>
                    <span className="font-semibold">
                      Low maintenance, high usability format
                    </span>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Smart size - easy to manage and rent out
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl sm:text-2xl mt-0.5">🏢</span>
                  <div>
                    <span className="font-semibold">
                      Inside NCR&apos;s biggest retail hub
                    </span>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Multiplex, food courts, banquet halls within the project
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Investment Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-white rounded-xl p-3 sm:p-4 shadow-md border border-gray-200">
                <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-1">
                  ~₹1 Cr*
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  Starting Investment
                </div>
              </div>
              <div className="bg-white rounded-xl p-3 sm:p-4 shadow-md border border-gray-200">
                <div className="text-2xl sm:text-3xl font-bold text-red-600 mb-1">
                  7-9%
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  Expected Rental Yield
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-3 sm:pt-4">
              <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all text-sm sm:text-base w-full sm:w-auto">
                Check Studio Layout & Availability
              </button>
              <button className="bg-white border-2 border-orange-600 text-orange-600 hover:bg-orange-50 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all text-sm sm:text-base w-full sm:w-auto">
                Download Floor Plans
              </button>
            </div>

            {/* Urgency Tag */}
            <p className="text-xs sm:text-sm text-orange-600 font-semibold">
              ⚡ Limited studios available - Early investors get the best units
            </p>
          </div>
        </ImageBlock>

        {/* Additional Studio Features */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🏠</div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
              Smart Configuration
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Efficient layout maximizing space utilization - perfect for modern
              urban living
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔑</div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
              Serviced Apartment Concept
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Hotel-like amenities with ownership benefits - 5-star lifestyle at
              studio prices
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎯</div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
              High Demand Area
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Located in fastest-growing corridor with Jewar Airport driving
              unprecedented growth
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
