import { projectData } from "../data/projectData";

const ProjectGlance = () => {
  return (
    <section className="py-12 px-4 sm:py-16 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background decorative elements (softened + smaller) */}
      <div className="pointer-events-none absolute top-8 right-4 w-40 h-40 bg-orange-100 rounded-full blur-3xl opacity-20" />
      <div className="pointer-events-none absolute bottom-8 left-4 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-20" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Project at a Glance
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Smart Investment • Smart Living • Smart Returns
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto rounded-full mt-3" />
        </div>

        {/* Stats Grid – compact cards, mobile-first */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {projectData.specs.slice(0, 4).map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl p-4 sm:p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="relative z-10 text-center">
                {/* Value */}
                <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  {item.value}
                </div>

                {/* Label */}
                <div className="text-[11px] sm:text-xs font-semibold text-gray-600 uppercase tracking-wide leading-snug">
                  {item.label}
                </div>
              </div>

              {/* Simple accent on hover */}
              <div className="absolute inset-x-6 bottom-2 h-0.5 bg-gradient-to-r from-orange-500 via-red-500 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGlance;
