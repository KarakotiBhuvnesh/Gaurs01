import { projectData } from "../data/projectData";

const ROISection = () => {
  return (
    <section className="py-8 md:py-12 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header - Mobile Optimized */}
        <div className="text-center mb-6 md:mb-10">
          <div className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 text-white text-[10px] md:text-xs font-bold px-3 md:px-4 py-1.5 rounded-full mb-2 md:mb-3 uppercase tracking-wide">
            Investment Returns
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 md:mb-3 px-2">
            Investment Returns & Growth Potential
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto px-4">
            Studio apartments positioned for strong rental yields and capital appreciation driven by Jewar Airport
          </p>
        </div>

        {/* ROI Points Grid - Mobile Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-10">
          {projectData.roiPoints.map((point, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg md:rounded-xl p-4 md:p-6 border-l-4 border-green-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Number Badge */}
              <div className="absolute top-3 right-3 w-7 h-7 md:w-8 md:h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-xs md:text-sm font-bold">
                {index + 1}
              </div>

              {/* Content */}
              <div className="pr-8">
                <div className="flex items-start gap-2 md:gap-3">
                  <div className="flex-shrink-0 text-2xl md:text-3xl">📈</div>
                  <div className="flex-1">
                    <p className="text-sm md:text-base text-gray-800 leading-relaxed font-medium">
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
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-6 md:p-10 text-white">
          <h3 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8">
            Key Investment Metrics
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="text-center border-r border-white/20 last:border-r-0">
              <div className="text-2xl md:text-4xl font-bold mb-1">7-9%</div>
              <div className="text-[10px] md:text-xs opacity-90">Expected Rental Yield</div>
            </div>
            <div className="text-center border-r border-white/20 last:border-r-0">
              <div className="text-2xl md:text-4xl font-bold mb-1">2-3x</div>
              <div className="text-[10px] md:text-xs opacity-90">Appreciation Potential</div>
            </div>
            <div className="text-center border-r border-white/20 last:border-r-0">
              <div className="text-2xl md:text-4xl font-bold mb-1">~₹1 Cr</div>
              <div className="text-[10px] md:text-xs opacity-90">Entry Investment</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold mb-1">24 KM</div>
              <div className="text-[10px] md:text-xs opacity-90">Jewar Airport</div>
            </div>
          </div>
        </div>

        {/* Additional Benefits - Mobile Cards */}
        <div className="mt-6 md:mt-10 grid md:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-gradient-to-br from-white to-green-50 rounded-lg p-4 md:p-6 border border-green-200 shadow-md hover:shadow-lg transition-all">
            <div className="text-3xl mb-2 sm:mb-3">💰</div>
            <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2">Lower Entry Price</h4>
            <p className="text-xs md:text-sm text-gray-700">
              Affordable investment compared to Noida & Greater Noida — maximum upside potential
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-emerald-50 rounded-lg p-4 md:p-6 border border-emerald-200 shadow-md hover:shadow-lg transition-all">
            <div className="text-3xl mb-2 sm:mb-3">🏠</div>
            <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2">Easy to Rent</h4>
            <p className="text-xs md:text-sm text-gray-700">
              High demand for studio apartments from airport staff, corporate employees, and young professionals
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-green-50 rounded-lg p-4 md:p-6 border border-green-200 shadow-md hover:shadow-lg transition-all">
            <div className="text-3xl mb-2 sm:mb-3">✈️</div>
            <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2">Airport Impact</h4>
            <p className="text-xs md:text-sm text-gray-700">
              Jewar Airport will drive 2-3x growth — early investors capture maximum appreciation
            </p>
          </div>
        </div>

        {/* CTA Button - Mobile Full Width */}
        <div className="text-center mt-6 md:mt-10">
          <button className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-8 md:px-12 py-3 md:py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-95 transition-all text-sm md:text-base">
            Calculate Your Investment Returns
          </button>
          <p className="mt-3 text-xs md:text-sm text-gray-600">
            Get detailed ROI projections based on your investment
          </p>
        </div>
      </div>
    </section>
  );
};

export default ROISection;
