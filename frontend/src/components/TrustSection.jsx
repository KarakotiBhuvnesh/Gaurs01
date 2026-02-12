import { projectData } from "../data/projectData";

const TrustSection = () => {
  return (
    <section className="py-8 md:py-12 px-4 md:px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header - Mobile Optimized */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-[10px] md:text-xs font-bold px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-2 md:mb-3 uppercase tracking-wide">
            Trust & Credibility
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 md:mb-3 px-2">
            WHY BUYERS TRUST GAURS GROUP
          </h2>
          <p className="text-base md:text-lg font-semibold text-indigo-600 mb-3">
            31 Years Of Unfaltering Commitment
          </p>
          <p className="text-sm md:text-base text-gray-600 max-w-4xl mx-auto px-4 leading-relaxed">
            At Gaurs Group, luxury isn't just built - it's beautifully lived. We don't just create structures; we craft timeless experiences that become cherished memories. With every landmark we design, our commitment to excellence climbs higher, delivering not just homes, but lifestyles defined by elegance and distinction. Our visionary 'life-craftsmen' are handpicked for their exceptional ability to shape spaces that go beyond imagination. <span className="font-semibold text-gray-800">Step into a world where luxury knows no limits - step into the enduring legacy of Gaurs.</span>
          </p>
        </div>

        {/* Stats Grid - Prominent Display */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-8 md:mb-12">
          {/* Stat 1 */}
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg border border-indigo-100 hover:shadow-xl transition-all text-center">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-2">
              75+
            </div>
            <p className="text-xs md:text-sm text-gray-700 font-semibold leading-tight">
              Successfully Delivered Projects
            </p>
          </div>

          {/* Stat 2 */}
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg border border-indigo-100 hover:shadow-xl transition-all text-center">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-2">
              45K+
            </div>
            <p className="text-xs md:text-sm text-gray-700 font-semibold leading-tight">
              Possessions Given<br/>(2014-2024)
            </p>
          </div>

          {/* Stat 3 */}
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg border border-indigo-100 hover:shadow-xl transition-all text-center">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-2">
              75K+
            </div>
            <p className="text-xs md:text-sm text-gray-700 font-semibold leading-tight">
              Successfully Delivered Units
            </p>
          </div>

          {/* Stat 4 */}
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg border border-indigo-100 hover:shadow-xl transition-all text-center">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-2">
              3L+
            </div>
            <p className="text-xs md:text-sm text-gray-700 font-semibold leading-tight">
              Happy Customers
            </p>
          </div>

          {/* Stat 5 */}
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg border border-indigo-100 hover:shadow-xl transition-all text-center col-span-2 md:col-span-1">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-2">
              100M+
            </div>
            <p className="text-xs md:text-sm text-gray-700 font-semibold leading-tight">
              Sq. Ft. Area Developed
            </p>
          </div>
        </div>

        {/* Trust Points Grid - Compact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10">
          {projectData.trustPoints.map((point, index) => (
            <div
              key={index}
              className="group flex items-start gap-3 bg-white rounded-lg md:rounded-xl p-4 md:p-5 shadow-md hover:shadow-lg transition-all border border-gray-200 hover:border-indigo-300"
            >
              {/* Check Icon */}
              <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              {/* Point Text */}
              <p className="flex-1 text-xs md:text-sm text-gray-800 leading-relaxed font-medium">
                {point}
              </p>
            </div>
          ))}
        </div>

        {/* Developer Credibility Section - Compact */}
        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 md:p-8 border border-indigo-200">
          <h3 className="text-lg md:text-xl font-bold text-gray-900 text-center mb-4 md:mb-6">
            Developer Credentials
          </h3>
          <div className="grid md:grid-cols-2 gap-3 text-xs md:text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full flex-shrink-0"></div>
              <span>Award-winning developer with proven track record</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full flex-shrink-0"></div>
              <span>Multiple phases successfully delivered on time</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full flex-shrink-0"></div>
              <span>UP-RERA approved & legally compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full flex-shrink-0"></div>
              <span>Supreme Court monitored housing project</span>
            </div>
          </div>
        </div>

        {/* Trust Badge Section - Mobile Cards */}
        <div className="mt-8 md:mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <div className="bg-white rounded-lg p-3 md:p-4 shadow-md text-center border border-gray-200">
            <div className="text-2xl md:text-3xl mb-1.5">📜</div>
            <p className="text-[10px] md:text-xs font-semibold text-gray-700">RERA Approved</p>
          </div>
          <div className="bg-white rounded-lg p-3 md:p-4 shadow-md text-center border border-gray-200">
            <div className="text-2xl md:text-3xl mb-1.5">⚖️</div>
            <p className="text-[10px] md:text-xs font-semibold text-gray-700">SC Monitored</p>
          </div>
          <div className="bg-white rounded-lg p-3 md:p-4 shadow-md text-center border border-gray-200">
            <div className="text-2xl md:text-3xl mb-1.5">🎯</div>
            <p className="text-[10px] md:text-xs font-semibold text-gray-700">Timely Delivery</p>
          </div>
          <div className="bg-white rounded-lg p-3 md:p-4 shadow-md text-center border border-gray-200">
            <div className="text-2xl md:text-3xl mb-1.5">⭐</div>
            <p className="text-[10px] md:text-xs font-semibold text-gray-700">Customer Trust</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
