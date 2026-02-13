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
    <section className="px-4 py-8 sm:py-12 md:py-15 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">

        {/* Call to Action */}
        <div className="  text-center px-2">
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
