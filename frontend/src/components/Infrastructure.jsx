import { projectData } from "../data/projectData";

const Infrastructure = () => {
  return (
    <section className="py-8 md:py-12 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Additional Info Section - Mobile Friendly */}
        <div className="mt-6 md:mt-8 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl md:rounded-2xl p-5 md:p-8 border-l-4 border-cyan-600">
          <div className="grid md:grid-cols-2 gap-5 md:gap-6 items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">
                Strategic Connectivity
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">
                Positioned at the epicenter of NCR's infrastructure boom, with seamless access to major expressways, upcoming metro connectivity, and India's largest international airport.
              </p>
              <ul className="space-y-1.5 text-sm md:text-base text-gray-700">
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
            <div className="grid grid-cols-2 gap-2.5 md:gap-3">
              <div className="bg-white rounded-xl p-3 md:p-5 text-center shadow-md">
                <div className="text-xl md:text-2xl font-bold text-cyan-600 mb-0.5">24 KM</div>
                <div className="text-[10px] md:text-sm text-gray-600">Jewar Airport</div>
              </div>
              <div className="bg-white rounded-xl p-3 md:p-5 text-center shadow-md">
                <div className="text-xl md:text-2xl font-bold text-blue-600 mb-0.5">50 KM</div>
                <div className="text-[10px] md:text-sm text-gray-600">IGI Airport</div>
              </div>
              <div className="bg-white rounded-xl p-3 md:p-5 text-center shadow-md">
                <div className="text-xl md:text-2xl font-bold text-cyan-600 mb-0.5">Direct</div>
                <div className="text-[10px] md:text-sm text-gray-600">Expressway</div>
              </div>
              <div className="bg-white rounded-xl p-3 md:p-5 text-center shadow-md">
                <div className="text-xl md:text-2xl font-bold text-blue-600 mb-0.5">YEIDA</div>
                <div className="text-[10px] md:text-sm text-gray-600">Location</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
