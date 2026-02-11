import ImageBlock from "./ImageBlock";

export default function Studios() {
  return (
    <section id="studios" className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
            SMART HOMES WITH SMART RETURNS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Studio Apartments Designed for Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Efficient studio apartment configuration designed for professionals, airport staff, business travelers, and corporate leasing
          </p>
        </div>

        {/* Image Block with Content */}
        <ImageBlock
          reverse
          image="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
        >
          <div className="space-y-6">
            {/* Key Features */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border-l-4 border-orange-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why Studio Apartments?
              </h3>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✈️</span>
                  <div>
                    <span className="font-semibold">Ideal for airport & corporate staff</span>
                    <p className="text-sm text-gray-600">24 km from Jewar Airport - perfect for aviation professionals</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">📈</span>
                  <div>
                    <span className="font-semibold">High rental demand & fast leasing</span>
                    <p className="text-sm text-gray-600">Expected 7-9% annual rental yield</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">💡</span>
                  <div>
                    <span className="font-semibold">Low maintenance, high usability format</span>
                    <p className="text-sm text-gray-600">Smart size - easy to manage and rent out</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🏢</span>
                  <div>
                    <span className="font-semibold">Inside NCR's biggest retail hub</span>
                    <p className="text-sm text-gray-600">Multiplex, food courts, banquet halls within the project</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Investment Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 shadow-md border border-gray-200">
                <div className="text-3xl font-bold text-orange-600 mb-1">~₹1 Cr*</div>
                <div className="text-sm text-gray-600">Starting Investment</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md border border-gray-200">
                <div className="text-3xl font-bold text-red-600 mb-1">7-9%</div>
                <div className="text-sm text-gray-600">Expected Rental Yield</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
                Check Studio Layout & Availability
              </button>
              <button className="bg-white border-2 border-orange-600 text-orange-600 hover:bg-orange-50 font-bold px-8 py-4 rounded-lg transition-all">
                Download Floor Plans
              </button>
            </div>

            {/* Urgency Tag */}
            <p className="text-sm text-orange-600 font-semibold">
              ⚡ Limited studios available - Early investors get the best units
            </p>
          </div>
        </ImageBlock>

        {/* Additional Studio Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Configuration</h3>
            <p className="text-gray-600">
              Efficient layout maximizing space utilization - perfect for modern urban living
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
            <div className="text-4xl mb-4">🔑</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Serviced Apartment Concept</h3>
            <p className="text-gray-600">
              Hotel-like amenities with ownership benefits - 5-star lifestyle at studio prices
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">High Demand Area</h3>
            <p className="text-gray-600">
              Located in fastest-growing corridor with Jewar Airport driving unprecedented growth
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
