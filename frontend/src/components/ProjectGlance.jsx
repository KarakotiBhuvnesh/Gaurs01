import { projectData } from "../data/projectData";

const ProjectGlance = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Project at a Glance
          </h2>
          <p className="text-xl text-gray-600">Smart Investment. Smart Living. Smart Returns.</p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Stats Grid - 3 columns for better balance with 5 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {projectData.specs.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              {/* Animated gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10 text-center">
                {/* Value - Large Display */}
                <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent mb-4">
                  {item.value}
                </div>
                
                {/* Label */}
                <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider leading-relaxed">
                  {item.label}
                </div>
                
                {/* Decorative line */}
                <div className="mt-4 h-1 w-16 bg-gradient-to-r from-orange-500 via-red-500 to-transparent mx-auto rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-500/10 via-red-500/10 to-transparent rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGlance;
