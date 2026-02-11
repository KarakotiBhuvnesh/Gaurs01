export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToForm = () => {
    const form = document.getElementById("lead-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 border-t-4 border-orange-500">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Project Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Gaur Yamuna City
              </h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Premium studio apartments located at the gateway of Yamuna Expressway, designed for smart living and high investment returns near Jewar International Airport.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z", label: "Twitter" },
                { icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z", label: "Facebook" },
                { icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 2a2 2 0 100 4 2 2 0 000-4z", label: "LinkedIn" }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-gradient-to-br hover:from-orange-500 hover:to-red-500 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-orange-500 to-red-500 rounded"></span>
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                "Studio Apartments",
                "Location Benefits",
                "Investment Returns",
                "Amenities & Facilities",
                "Payment Plans",
                "Site Visit"
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-orange-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location Highlights */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-orange-500 to-red-500 rounded"></span>
              Location Highlights
            </h4>
            <ul className="space-y-2.5">
              {[
                "24km from Jewar Airport",
                "Yamuna Expressway Access",
                "Near Noida & Greater Noida",
                "Film City Proximity",
                "NCR's Fastest Growing Hub",
                "Sports University Nearby"
              ].map((highlight, index) => (
                <li key={index} className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-400">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / CTA */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-orange-500 to-red-500 rounded"></span>
              Get In Touch
            </h4>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Get pricing, floor plans, and latest offers from our property experts.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-4">
              <a href="tel:+919876543210" className="flex items-center gap-2 text-sm text-gray-400 hover:text-orange-400 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <span className="font-medium">+91 98765 43210</span>
              </a>
              
              <a href="mailto:info@gauryamunacity.com" className="flex items-center gap-2 text-sm text-gray-400 hover:text-orange-400 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <span className="font-medium">info@example.com</span>
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-2">
              <button
                onClick={handleScrollToForm}
                className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold py-2.5 px-4 text-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                Get Pricing & Offers
              </button>
              <button
                onClick={handleScrollToForm}
                className="w-full border-2 border-orange-600 text-orange-400 hover:bg-orange-600 hover:text-white font-semibold py-2.5 px-4 text-sm rounded-lg transition-all duration-300"
              >
                Schedule Site Visit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-slate-800"></div>

      {/* Bottom Footer - Disclaimer */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 mb-6 border border-slate-700">
          <h5 className="text-xs font-bold text-orange-400 mb-2 uppercase tracking-wide">Disclaimer</h5>
          <p className="text-xs text-gray-400 leading-relaxed">
            This website is for information purposes only and does not constitute an offer to sell or a solicitation of an offer to buy. All images, visuals, layouts, plans, specifications, dimensions, and amenities are indicative and subject to change as per regulatory approvals and final agreements. The developer reserves the right to make additions, deletions, or modifications as deemed appropriate. Interested parties are advised to verify all details independently before making any purchase decisions.
          </p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p className="flex items-center gap-2">
            © {currentYear} Gaur Yamuna City. All Rights Reserved.
            <span className="hidden md:inline">|</span>
            <a href="#" className="text-orange-400 hover:underline">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="text-orange-400 hover:underline">Terms & Conditions</a>
          </p>
          <p className="flex items-center gap-2">
            <span className="px-3 py-1 bg-orange-900/30 text-orange-400 rounded-full font-medium border border-orange-700">
              RERA Approved
            </span>
            Marketing Partner Website
          </p>
        </div>
      </div>
    </footer>
  );
}
