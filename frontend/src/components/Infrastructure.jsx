import { projectData } from "../data/projectData";

const Infrastructure = () => {
  return (
    <section className="py-16 md:py-20 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header - Mobile Optimized */}
        <div className="text-center mb-12 md:mb-16">

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 px-2">
            Surroundings
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Everything you need within reach — airports, expressways, and essential amenities
          </p>
        </div>

        {/* Additional Info Section - Mobile Friendly */}
        <div className="mt-12 md:mt-16 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl md:rounded-2xl p-6 md:p-10 border-l-4 border-cyan-600">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
                Strategic Connectivity
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                Positioned at the epicenter of NCR's infrastructure boom, with seamless access to major expressways, upcoming metro connectivity, and India's largest international airport.
              </p>
              <ul className="space-y-2 text-sm md:text-base text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-cyan-600">✔</span>
                  <span>Direct Yamuna Expressway access</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-600">✔</span>
                  <span>24 km from Jewar International Airport</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-600">✔</span>
                  <span>Future RRTS/Metro connectivity planned</span>
                </li>
              </ul>
            </div>
            
            {/* Stats - Mobile Grid */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="bg-white rounded-xl p-4 md:p-6 text-center shadow-md">
                <div className="text-2xl md:text-3xl font-bold text-cyan-600 mb-1">24 KM</div>
                <div className="text-xs md:text-sm text-gray-600">Jewar Airport</div>
              </div>
              <div className="bg-white rounded-xl p-4 md:p-6 text-center shadow-md">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">50 KM</div>
                <div className="text-xs md:text-sm text-gray-600">IGI Airport</div>
              </div>
              <div className="bg-white rounded-xl p-4 md:p-6 text-center shadow-md">
                <div className="text-2xl md:text-3xl font-bold text-cyan-600 mb-1">Direct</div>
                <div className="text-xs md:text-sm text-gray-600">Expressway</div>
              </div>
              <div className="bg-white rounded-xl p-4 md:p-6 text-center shadow-md">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">YEIDA</div>
                <div className="text-xs md:text-sm text-gray-600">Location</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
