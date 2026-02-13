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
            
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <a href="tel:+919876543210" className="flex items-center justify-center md:justify-start gap-2 text-xs sm:text-sm text-gray-400 hover:text-orange-400 transition-colors">
                <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+91 98765 43210</span>
              </a>
              
              <a href="mailto:info@example.com" className="flex items-center justify-center md:justify-start gap-2 text-xs sm:text-sm text-gray-400 hover:text-orange-400 transition-colors">
                <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>info@example.com</span>
              </a>
            </div>
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
            <img
            src="/img/rera.jpg"
            alt="Project RERA Registration"
            className="
              w-40
              sm:w-56
              md:w-64
              lg:w-72
              max-w-full
              h-auto
              object-contain
              drop-shadow-[0_18px_55px_rgba(0,0,0,0.85)]
            "
          />

          </div>
        </div>
      </div>
    </footer>
  );
}
