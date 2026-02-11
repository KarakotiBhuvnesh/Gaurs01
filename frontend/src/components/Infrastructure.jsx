import { projectData } from "../data/projectData";

const Infrastructure = () => {
  return (
    <section className="py-16 md:py-20 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header - Mobile Optimized */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-xs md:text-sm font-bold px-3 md:px-4 py-2 rounded-full mb-3 md:mb-4 uppercase tracking-wide">
            Surrounding Infrastructure
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 px-2">
            Surroundings & Infrastructure
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Everything you need within reach — airports, expressways, and essential amenities
          </p>
        </div>

        {/* Infrastructure Grid - Mobile Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {projectData.infrastructure.map((item, index) => {
            // Assign icons based on content
            let icon = "📍";
            if (item.toLowerCase().includes("airport")) icon = "✈️";
            else if (item.toLowerCase().includes("expressway")) icon = "🛣️";
            else if (item.toLowerCase().includes("metro") || item.toLowerCase().includes("rrts")) icon = "🚄";
            else if (item.toLowerCase().includes("school")) icon = "🎓";
            else if (item.toLowerCase().includes("park")) icon = "🌳";
            else if (item.toLowerCase().includes("retail") || item.toLowerCase().includes("mall")) icon = "🏬";
            else if (item.toLowerCase().includes("multiplex") || item.toLowerCase().includes("food")) icon = "🎬";
            else if (item.toLowerCase().includes("club") || item.toLowerCase().includes("pool")) icon = "🏊";
            else if (item.toLowerCase().includes("banquet")) icon = "🎉";
            else if (item.toLowerCase().includes("parking")) icon = "🅿️";
            else if (item.toLowerCase().includes("landscape") || item.toLowerCase().includes("garden")) icon = "🌺";

            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                {/* Icon */}
                <div className="text-4xl md:text-5xl mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  {icon}
                </div>
                
                {/* Text */}
                <p className="text-sm md:text-base font-semibold text-gray-800 leading-snug">
                  {item}
                </p>

                {/* Decorative Line */}
                <div className="mt-3 md:mt-4 h-1 w-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </div>
            );
          })}
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
