import { projectData } from "../data/projectData";

const TrustSection = () => {
  return (
    <section className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header - Mobile Optimized */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-xs md:text-sm font-bold px-3 md:px-4 py-2 rounded-full mb-3 md:mb-4 uppercase tracking-wide">
            Trust & Credibility
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 px-2">
            Why Buyers Trust Gaur Yamuna City
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Built by Gaursons India — 25+ years of proven delivery and customer satisfaction
          </p>
        </div>

        {/* Trust Points Grid - Mobile Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {projectData.trustPoints.map((point, index) => (
            <div
              key={index}
              className="group flex items-start gap-4 bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-indigo-300"
            >
              {/* Check Icon */}
              <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              {/* Point Text */}
              <p className="flex-1 text-sm md:text-base text-gray-800 leading-relaxed font-medium">
                {point}
              </p>
            </div>
          ))}
        </div>

        {/* Developer Credibility Section - Mobile Friendly */}
        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 md:p-12 border border-indigo-200">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            
            {/* Stat 1 */}
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-3xl md:text-4xl">🏆</span>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">25+</div>
              <p className="text-sm md:text-base text-gray-700 font-medium">Years of Excellence</p>
            </div>

            {/* Stat 2 */}
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-3xl md:text-4xl">🏗️</span>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">100+</div>
              <p className="text-sm md:text-base text-gray-700 font-medium">Projects Delivered</p>
            </div>

            {/* Stat 3 */}
            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-3xl md:text-4xl">✅</span>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">SC</div>
              <p className="text-sm md:text-base text-gray-700 font-medium">Monitored Project</p>
            </div>
          </div>

          {/* Additional Trust Info */}
          <div className="mt-8 md:mt-10 pt-8 border-t border-indigo-300">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-6">
              Developer Credentials
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm md:text-base text-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                <span>Award-winning developer with proven track record</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                <span>Multiple phases successfully delivered on time</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                <span>UP-RERA approved & legally compliant</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                <span>Supreme Court monitored housing project</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badge Section - Mobile Cards */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-md text-center border border-gray-200">
            <div className="text-3xl md:text-4xl mb-2">📜</div>
            <p className="text-xs md:text-sm font-semibold text-gray-700">RERA Approved</p>
          </div>
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-md text-center border border-gray-200">
            <div className="text-3xl md:text-4xl mb-2">⚖️</div>
            <p className="text-xs md:text-sm font-semibold text-gray-700">SC Monitored</p>
          </div>
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-md text-center border border-gray-200">
            <div className="text-3xl md:text-4xl mb-2">🎯</div>
            <p className="text-xs md:text-sm font-semibold text-gray-700">Timely Delivery</p>
          </div>
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-md text-center border border-gray-200">
            <div className="text-3xl md:text-4xl mb-2">⭐</div>
            <p className="text-xs md:text-sm font-semibold text-gray-700">Customer Trust</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
