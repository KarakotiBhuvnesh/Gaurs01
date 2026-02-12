import { projectData } from "../data/projectData";

const ProjectGlance = () => {
  return (
    <section className="py-8 px-4 sm:py-12 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background decorative elements (softened + smaller) */}
      <div className="pointer-events-none absolute top-8 right-4 w-40 h-40 bg-orange-100 rounded-full blur-3xl opacity-20" />
      <div className="pointer-events-none absolute bottom-8 left-4 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-20" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Luxury Hospitality That Elevates Asset Value
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Integrated hotel enhances project prestige, drives year-round footfall, and strengthens the rental ecosystem
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto rounded-full mt-3" />
        </div>

        {/* Highlights Grid – 2 columns mobile, 4 columns desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {[
            { icon: "🏨", title: "Elegant Rooms", desc: "Luxury guest rooms" },
            { icon: "🍽️", title: "Fine Dining", desc: "Premium café experiences" },
            { icon: "🎯", title: "Events & Meetings", desc: "Banquet facilities" },
            { icon: "🅿️", title: "Guest Parking", desc: "Dedicated parking" }
          ].map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 text-center"
            >
              <div className="text-2xl sm:text-3xl mb-1.5 sm:mb-2">{item.icon}</div>
              <div className="text-xs sm:text-sm font-bold text-gray-900 mb-0.5">{item.title}</div>
              <div className="text-[10px] sm:text-xs text-gray-600">{item.desc}</div>
              
              {/* Hover accent */}
              <div className="absolute inset-x-4 bottom-1.5 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </div>
          ))}
        </div>

        {/* Investor Advantage - Compact Card */}
        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-4 sm:p-6 border-l-4 border-orange-600 max-w-3xl mx-auto">
          <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2">
            💼 Investor Advantage
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm text-gray-700">
            <div className="flex items-start gap-2">
              <span className="text-orange-600 font-bold mt-0.5">✓</span>
              <span>Enhances project prestige</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-orange-600 font-bold mt-0.5">✓</span>
              <span>Year-round footfall</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-orange-600 font-bold mt-0.5">✓</span>
              <span>Strengthens rental ecosystem</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-orange-600 font-bold mt-0.5">✓</span>
              <span>Long-term commercial vibrancy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectGlance;
