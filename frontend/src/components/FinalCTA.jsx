export default function FinalCTA() {
  const handleScrollToForm = () => {
    const form = document.getElementById("lead-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-red-50 to-orange-50 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Main CTA Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Side - Compelling Message */}
            <div className="bg-gradient-to-br from-orange-600 via-red-600 to-orange-700 p-10 lg:p-12 text-white">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                  ⏰ Limited Time Offer
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Secure Your Studio Apartment Today
              </h2>
              
              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                Only a few units left! Lock in your investment at ₹1 Cr entry point before prices rise with Jewar Airport's completion.
              </p>

              {/* Key Benefits */}
              <div className="space-y-3 mb-6">
                {[
                  "7-9% Annual Rental Yield Guaranteed",
                  "2-3x Capital Appreciation Expected",
                  "Just 24km from Jewar Airport",
                  "Ready-to-Move & Under-Construction Options"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-white/95">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm font-semibold">Trusted by 5000+ Happy Customers</span>
              </div>
            </div>

            {/* Right Side - Action Form */}
            <div className="p-10 lg:p-12 bg-gradient-to-br from-white to-slate-50">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Get Exclusive Pricing Details
              </h3>
              <p className="text-gray-600 mb-6">
                Fill in your details and our property consultant will contact you within 2 hours.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-xl p-4 shadow-md border border-orange-100">
                  <div className="text-2xl font-bold text-orange-600 mb-1">₹1 Cr</div>
                  <div className="text-xs text-gray-600">Starting Price</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md border border-red-100">
                  <div className="text-2xl font-bold text-red-600 mb-1">24 km</div>
                  <div className="text-xs text-gray-600">From Jewar Airport</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <button 
                  onClick={handleScrollToForm}
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  📋 Book Site Visit Now
                </button>
                
                <button 
                  onClick={handleScrollToForm}
                  className="w-full bg-white border-2 border-orange-600 text-orange-600 hover:bg-orange-50 font-bold py-4 px-6 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  💬 Request Callback
                </button>

                <a 
                  href="tel:+919876543210"
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call: +91 98765 43210
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  100% Safe & Secure | Your Privacy Protected
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Urgency Banner */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <span className="text-sm font-semibold text-gray-800">
              <span className="text-red-600">12 people</span> are viewing this property right now
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
