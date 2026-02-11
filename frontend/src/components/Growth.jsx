export default function Growth() {
  return (
    <section id="growth" className="bg-gradient-to-b from-slate-50 to-white px-6 py-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
            FUTURE SCOPE & INVESTMENT POTENTIAL
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Future Growth & Jewar Airport Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Jewar Airport is set to transform the region into a <span className="text-blue-600 font-semibold">global business hub</span> — infrastructure-led appreciation starts now.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Left - Image/Visual */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05" 
                alt="Jewar Airport Growth" 
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white rounded-xl p-6 shadow-xl">
              <div className="text-3xl font-bold">24 KM</div>
              <div className="text-sm">From Jewar Airport</div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Why Invest Now?
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-blue-50 rounded-xl p-5 border-l-4 border-blue-600">
                <div className="text-3xl">✈️</div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-1">Jewar Airport Transformation</h4>
                  <p className="text-gray-700">Set to become India's largest airport, transforming the entire Yamuna Expressway belt into a global business and logistics hub</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-green-50 rounded-xl p-5 border-l-4 border-green-600">
                <div className="text-3xl">🏠</div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-1">Rising Demand for Compact Homes</h4>
                  <p className="text-gray-700">Studio apartments show higher occupancy rates, faster leasing cycles, and strong rental yields in airport proximity zones</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-purple-50 rounded-xl p-5 border-l-4 border-purple-600">
                <div className="text-3xl">💰</div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-1">Early Investors Benefit Most</h4>
                  <p className="text-gray-700">Infrastructure-led growth creates maximum appreciation for those who enter before completion — proven by Delhi Metro, Noida Expressway history</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-orange-50 rounded-xl p-5 border-l-4 border-orange-600">
                <div className="text-3xl">📈</div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-1">2-3x Growth Potential</h4>
                  <p className="text-gray-700">Properties within 25 km of major airports historically show 2-3x appreciation within 3-5 years of airport operationalization</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">2026</div>
            <div className="text-sm opacity-90">Jewar Airport Phase 1</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">7-9%</div>
            <div className="text-sm opacity-90">Expected Rental Yield</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">2-3x</div>
            <div className="text-sm opacity-90">Appreciation Potential</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">24 KM</div>
            <div className="text-sm opacity-90">Distance from Airport</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-10 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
            Get Investment Benefits Explained
          </button>
          <p className="mt-4 text-sm text-gray-600">
            Understand the complete growth story and ROI projections
          </p>
        </div>
      </div>
    </section>
  );
}
