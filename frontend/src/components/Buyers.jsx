export default function Buyers() {
  const buyerTypes = [
    {
      title: "Investors",
      description: "Secure high rental yields with studio apartments near Noida International Airport",
      highlights: ["Strong rental demand", "Capital appreciation"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Professionals",
      description: "Live close to your workplace with modern amenities",
      highlights: ["24km from Airport", "Premium lifestyle"],
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      title: "First-time Buyers",
      description: "Start your property ownership journey affordably",
      highlights: ["Easy payment plans", "Brand trust of Gaurs"],
      gradient: "from-red-500 to-pink-500"
    }
  ];

  return (
    <section className="px-4 py-8 sm:py-12 md:py-16 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Who Should Buy
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Perfect investment opportunity for diverse buyer segments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {buyerTypes.map((buyer, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 sm:hover:-translate-y-2"
            >
              {/* Gradient Header */}
              <div className={`h-1.5 sm:h-2 bg-gradient-to-r ${buyer.gradient}`}></div>
              
              <div className="p-4 sm:p-6 md:p-8">
                {/* Number Badge */}
                <div className={`inline-flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-gradient-to-br ${buyer.gradient} text-white font-bold text-base sm:text-lg md:text-xl mb-3 sm:mb-4 shadow-lg`}>
                  {index + 1}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 sm:mb-3 group-hover:text-orange-600 transition-colors">
                  {buyer.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-5 md:mb-6 leading-relaxed">
                  {buyer.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 sm:space-y-2.5 md:space-y-3">
                  {buyer.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 sm:gap-2">
                      <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[11px] sm:text-xs md:text-sm text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r ${buyer.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-6 sm:mt-10 md:mt-12 text-center px-2">
          <div className="inline-block bg-gradient-to-r from-orange-100 to-red-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg max-w-3xl">
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 mb-2 sm:mb-3 md:mb-4">
              <span className="font-bold text-orange-600">Limited Studio Apartments</span> - 
              Expected 2-3x appreciation with Noida International Airport
            </p>
            <p className="text-[10px] sm:text-xs md:text-sm text-gray-600">
              Act now to secure your investment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
