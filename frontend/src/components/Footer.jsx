export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const handleScrollToForm = () => {
    const form = document.getElementById("lead-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 border-t-2 border-orange-500">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          
          {/* Left: Branding & Contact */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Gaur Yamuna City
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 mb-3 max-w-md mx-auto md:mx-0">
              Premium studio apartments near Noida International Airport
            </p>

          </div>

          {/* Right: CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-end">
            <button
              onClick={handleScrollToForm}
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold py-2.5 px-5 text-sm rounded-lg shadow-lg hover:shadow-xl active:scale-95 transition-all"
            >
              Get Pricing & Floor Plans
            </button>
            <button
              onClick={handleScrollToForm}
              className="border-2 border-orange-600 text-orange-400 hover:bg-orange-600 hover:text-white font-semibold py-2.5 px-5 text-sm rounded-lg active:scale-95 transition-all"
            >
              Schedule Site Visit
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-4">
          {/* Compact Disclaimer */}
          <p className="text-[9px] sm:text-[10px] text-gray-500 text-center mb-3 leading-relaxed max-w-4xl mx-auto">
            *All images, plans, and specifications are indicative. Subject to change. RERA approved project. Verify all details independently.
          </p>
          
          {/* Copyright & Links */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-[10px] sm:text-xs text-gray-500">
            <p className="flex flex-wrap items-center justify-center gap-2">
              © {currentYear} Gaur Yamuna City
              <span className="hidden sm:inline">•</span>
              <a href="#" className="text-orange-400 hover:underline">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="text-orange-400 hover:underline">Terms</a>
            </p>
            <div className="flex md:items-end justify-center md:justify-end">
              <div className="bg-blue-100 border border-gray-200 rounded-2xl px-3 py-3 shadow-lg text-center max-w-[220px] sm:max-w-[240px]">
                <img
                  src="/img/rera.png"
                  alt="Project RERA Registration"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
