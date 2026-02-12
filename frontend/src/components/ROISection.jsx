import { projectData } from "../data/projectData";

const ROISection = () => {
  const handleScrollToForm = () => {
    const form = document.getElementById("lead-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-6 md:py-10 px-4 md:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header - Compact */}
        <div className="text-center mb-5 md:mb-8">
          <div className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 text-white text-[9px] md:text-[10px] font-bold px-2.5 md:px-3 py-1 rounded-full mb-2 uppercase tracking-wide">
            Investment Returns
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-1.5 md:mb-2 px-2">
            Investment Returns & Growth
          </h2>
          <p className="text-xs md:text-sm text-gray-600 max-w-2xl mx-auto px-2">
            Strong rental yields driven by Noida International Airport
          </p>
        </div>

        {/* Key Metrics - Highlighted Box */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg md:rounded-xl p-4 md:p-6 text-white mb-5 md:mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <div className="text-center">
              <div className="text-xl md:text-3xl font-bold mb-0.5">7-9%</div>
              <div className="text-[9px] md:text-[10px] opacity-90">Rental Yield</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-3xl font-bold mb-0.5">2-3x</div>
              <div className="text-[9px] md:text-[10px] opacity-90">Appreciation</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-3xl font-bold mb-0.5">~₹1Cr</div>
              <div className="text-[9px] md:text-[10px] opacity-90">Entry Point</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-3xl font-bold mb-0.5">24KM</div>
              <div className="text-[9px] md:text-[10px] opacity-90">To Airport</div>
            </div>
          </div>
        </div>

        {/* ROI Points - Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-5 md:mb-8">
          {projectData.roiPoints.slice(0, 4).map((point, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-3 md:p-4 border-l-3 border-green-600 hover:shadow-lg transition-all"
            >
              {/* Number Badge */}
              <div className="absolute top-2 right-2 w-6 h-6 md:w-7 md:h-7 bg-green-600 text-white rounded-full flex items-center justify-center text-[10px] md:text-xs font-bold">
                {index + 1}
              </div>

              {/* Content */}
              <div className="pr-7 flex items-start gap-2">
                <div className="text-lg md:text-xl mt-0.5">📈</div>
                <p className="text-xs md:text-sm text-gray-800 leading-snug font-medium">
                  {point}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits - Compact 3-column */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-5 md:mb-8">
          <div className="bg-gradient-to-br from-white to-green-50 rounded-lg p-3 md:p-4 border border-green-200 shadow-sm text-center">
            <div className="text-2xl mb-1.5">💰</div>
            <h4 className="text-sm md:text-base font-bold text-gray-900 mb-1">Lower Entry</h4>
            <p className="text-[10px] md:text-xs text-gray-700">
              Affordable vs Noida
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-emerald-50 rounded-lg p-3 md:p-4 border border-emerald-200 shadow-sm text-center">
            <div className="text-2xl mb-1.5">🏠</div>
            <h4 className="text-sm md:text-base font-bold text-gray-900 mb-1">Easy to Rent</h4>
            <p className="text-[10px] md:text-xs text-gray-700">
              High demand area
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-green-50 rounded-lg p-3 md:p-4 border border-green-200 shadow-sm text-center">
            <div className="text-2xl mb-1.5">✈️</div>
            <h4 className="text-sm md:text-base font-bold text-gray-900 mb-1">Airport Growth</h4>
            <p className="text-[10px] md:text-xs text-gray-700">
              2-3x potential
            </p>
          </div>
        </div>

        {/* CTA - Compact with onClick handler */}
        <div className="text-center">
          <button
            onClick={handleScrollToForm}
            className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-6 md:px-10 py-2.5 md:py-3 rounded-lg shadow-lg hover:shadow-xl active:scale-95 transition-all text-xs md:text-sm"
          >
            Calculate Investment Returns
          </button>
          <p className="mt-2 text-[10px] md:text-xs text-gray-600">
            Get detailed ROI projections
          </p>
        </div>
      </div>
    </section>
  );
};

export default ROISection;
