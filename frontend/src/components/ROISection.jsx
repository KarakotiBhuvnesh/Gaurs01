import { projectData } from "../data/projectData";

const ROISection = () => {
  return (
    <section className="py-16 md:py-20 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header - Mobile Optimized */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 text-white text-xs md:text-sm font-bold px-3 md:px-4 py-2 rounded-full mb-3 md:mb-4 uppercase tracking-wide">
            Investment Returns
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 px-2">
            Investment Returns & Growth Potential
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Studio apartments positioned for strong rental yields and capital appreciation driven by Jewar Airport
          </p>
        </div>

        {/* ROI Points Grid - Mobile Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {projectData.roiPoints.map((point, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl md:rounded-2xl p-6 md:p-8 border-l-4 border-green-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Number Badge */}
              <div className="absolute top-4 right-4 w-8 h-8 md:w-10 md:h-10 bg-green-600 text-white rounded-full flex items-center justify-center text-sm md:text-base font-bold">
                {index + 1}
              </div>

              {/* Content */}
              <div className="pr-10">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 text-3xl md:text-4xl">📈</div>
                  <div className="flex-1">
                    <p className="text-sm md:text-lg text-gray-800 leading-relaxed font-medium">
                      {point}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Key Metrics Section - Mobile Friendly */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10">
            Key Investment Metrics
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center border-r border-white/20 last:border-r-0">
              <div className="text-3xl md:text-5xl font-bold mb-2">7-9%</div>
              <div className="text-xs md:text-sm opacity-90">Expected Rental Yield</div>
            </div>
            <div className="text-center border-r border-white/20 last:border-r-0">
              <div className="text-3xl md:text-5xl font-bold mb-2">2-3x</div>
              <div className="text-xs md:text-sm opacity-90">Appreciation Potential</div>
            </div>
            <div className="text-center border-r border-white/20 last:border-r-0">
              <div className="text-3xl md:text-5xl font-bold mb-2">~₹1 Cr</div>
              <div className="text-xs md:text-sm opacity-90">Entry Investment</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-bold mb-2">24 KM</div>
              <div className="text-xs md:text-sm opacity-90">Jewar Airport</div>
            </div>
          </div>
        </div>

        {/* Additional Benefits - Mobile Cards */}
        <div className="mt-12 md:mt-16 grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-gradient-to-br from-white to-green-50 rounded-xl p-6 md:p-8 border border-green-200 shadow-md hover:shadow-lg transition-all">
            <div className="text-4xl mb-4">💰</div>
            <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Lower Entry Price</h4>
            <p className="text-sm md:text-base text-gray-700">
              Affordable investment compared to Noida & Greater Noida — maximum upside potential
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-emerald-50 rounded-xl p-6 md:p-8 border border-emerald-200 shadow-md hover:shadow-lg transition-all">
            <div className="text-4xl mb-4">🏠</div>
            <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Easy to Rent</h4>
            <p className="text-sm md:text-base text-gray-700">
              High demand for studio apartments from airport staff, corporate employees, and young professionals
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-green-50 rounded-xl p-6 md:p-8 border border-green-200 shadow-md hover:shadow-lg transition-all">
            <div className="text-4xl mb-4">✈️</div>
            <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Airport Impact</h4>
            <p className="text-sm md:text-base text-gray-700">
              Jewar Airport will drive 2-3x growth — early investors capture maximum appreciation
            </p>
          </div>
        </div>

        {/* CTA Button - Mobile Full Width */}
        <div className="text-center mt-10 md:mt-12">
          <button className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-8 md:px-12 py-3 md:py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all text-sm md:text-base">
            Calculate Your Investment Returns
          </button>
          <p className="mt-4 text-xs md:text-sm text-gray-600">
            Get detailed ROI projections based on your investment
          </p>
        </div>
      </div>
    </section>
  );
};

export default ROISection;
