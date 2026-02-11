import { projectData } from "../data/projectData";

const GrowthTimeline = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
            JEWAR AIRPORT TIMELINE
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Future Growth & Jewar Airport Timeline
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategic infrastructure developments that will drive exponential property appreciation
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-200 via-purple-200 to-transparent"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {projectData.timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                  <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 group hover:scale-105">
                    
                    {/* Year Badge */}
                    <div className={`inline-block mb-4 px-6 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-2xl ${index % 2 === 0 ? 'md:float-right' : 'md:float-left'}`}>
                      {item.year}
                    </div>
                    
                    <div className="clear-both">
                      {/* Title */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {item.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-700 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    {/* Icon based on index */}
                    <div className="mt-4 text-4xl">
                      {index === 0 && '✈️'}
                      {index === 1 && '🚄'}
                      {index === 2 && '🏗️'}
                      {index === 3 && '🌆'}
                    </div>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 border-4 border-white shadow-lg z-10"></div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-10 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Be Part of NCR's Next Growth Story
          </h3>
          <p className="text-lg mb-6 opacity-90">
            These infrastructure developments will drive 2-3x appreciation — early investors capture the maximum upside
          </p>
          <button className="bg-white text-indigo-600 font-bold px-10 py-4 rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all shadow-xl">
            Learn About Timeline Impact on Returns
          </button>
        </div>
      </div>
    </section>
  );
};

export default GrowthTimeline;
