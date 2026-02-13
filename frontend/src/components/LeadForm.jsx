const LeadForm = () => {
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

                <section id="lead-form" className="py-12 px-4 bg-gray-900 text-white">
      <h2 className="text-2xl font-bold text-center mb-6">
        Get Pricing, Brochure & Site Visit Details
      </h2>

      <form className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 rounded text-black"
          required
        />
        <input
          type="tel"
          placeholder="Mobile Number"
          className="w-full p-3 rounded text-black"
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-3 rounded text-black"
          required
        />

        <button className="w-full bg-red-600 py-3 rounded font-semibold">
          Get Instant Callback
        </button>

        <p className="text-xs text-gray-400 text-center">
          We respect your privacy. No spam. No sharing of data.
        </p>
      </form>


  
    </section>
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
};

export default LeadForm;
