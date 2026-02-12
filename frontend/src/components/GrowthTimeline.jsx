import { projectData } from "../data/projectData";

const GrowthTimeline = () => {
  return (
    <section className="py-8 px-4 sm:px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-[11px] sm:text-xs font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-2">
            JEWAR AIRPORT TIMELINE
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Future Growth & Jewar Airport Timeline
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Strategic infrastructure driving exponential appreciation
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-200 via-purple-200 to-transparent"></div>
          
          {/* Timeline Items */}
          <div className="space-y-5 sm:space-y-6">
            {projectData.timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-6' : 'md:text-left md:pl-6'}`}>
                  <div className="bg-white rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-5 border border-gray-100 group hover:scale-105">
                    
                    {/* Year Badge */}
                    <div className={`inline-block mb-2 px-3 py-0.5 sm:px-4 sm:py-1 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-base sm:text-lg ${index % 2 === 0 ? 'md:float-right' : 'md:float-left'}`}>
                      {item.year}
                    </div>
                    
                    <div className="clear-both">
                      {/* Title */}
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5 flex items-center gap-2">
                        <span className="text-lg sm:text-xl">
                          {index === 0 && '✈️'}
                          {index === 1 && '🚄'}
                          {index === 2 && '🏗️'}
                          {index === 3 && '🌆'}
                        </span>
                        {item.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 border-4 border-white shadow-lg z-10"></div>
                
                {/* Spacer for opposite side */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthTimeline;
