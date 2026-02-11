export default function Buyers() {
  const buyerTypes = [
    {
      title: "Investors",
      description: "Secure high rental yields of 7-9% annually with studio apartments near Jewar Airport",
      highlights: ["Strong rental demand", "Capital appreciation potential", "₹1 Cr entry point"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Professionals",
      description: "Live close to your workplace with modern amenities and excellent connectivity",
      highlights: ["24km from Jewar Airport", "Premium lifestyle", "Ready-to-move options"],
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      title: "First-time Buyers",
      description: "Start your property ownership journey with affordable studio apartments",
      highlights: ["Easy payment plans", "Transparent pricing", "Brand trust of Gaurs"],
      gradient: "from-red-500 to-pink-500"
    }
  ];

  return (
    <section className="px-6 py-16 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Who Should Buy
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Perfect investment opportunity for diverse buyer segments seeking growth and returns
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {buyerTypes.map((buyer, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${buyer.gradient}`}></div>
              
              <div className="p-8">
                {/* Number Badge */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${buyer.gradient} text-white font-bold text-xl mb-4 shadow-lg`}>
                  {index + 1}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors">
                  {buyer.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {buyer.description}
                </p>

                {/* Highlights */}
                <div className="space-y-3">
                  {buyer.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${buyer.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-gray-700 mb-4">
              <span className="font-bold text-orange-600">Limited Studio Apartments Available</span> - 
              Expected 2-3x appreciation with Jewar Airport development
            </p>
            <p className="text-sm text-gray-600">
              Act now to secure your investment at ₹1 Cr entry point
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
