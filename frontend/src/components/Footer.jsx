export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
        
        {/* Project Info */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">
            Gaur Yamuna City
          </h3>
          <p className="text-sm leading-relaxed">
            Premium studio apartments located at the gateway of Yamuna
            Expressway, designed for smart living and high investment returns
            near Jewar International Airport.
          </p>
        </div>

        {/* Location Highlights */}
        <div>
          <h4 className="text-white text-lg font-medium mb-4">
            Location Highlights
          </h4>
          <ul className="space-y-2 text-sm">
            <li>✔ Yamuna Expressway</li>
            <li>✔ Near Jewar International Airport</li>
            <li>✔ Close to Noida & Greater Noida</li>
            <li>✔ NCR’s fastest growing corridor</li>
          </ul>
        </div>

        {/* Contact / CTA */}
        <div>
          <h4 className="text-white text-lg font-medium mb-4">
            Enquire Now
          </h4>
          <p className="text-sm mb-4">
            Get pricing, floor plans, and latest offers from our property
            experts.
          </p>

          <div className="flex flex-col gap-3">
            <a
              href="#enquire"
              className="bg-yellow-500 text-black font-semibold py-3 text-center rounded-md hover:bg-yellow-400 transition"
            >
              Get Pricing & Offers
            </a>
            <a
              href="#enquire"
              className="border border-slate-500 py-3 text-center rounded-md hover:bg-slate-800 transition"
            >
              Talk to an Expert
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-slate-700"></div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-6 py-6 text-xs leading-relaxed">
        <p className="mb-3">
          Disclaimer: This website is for information purposes only and does
          not constitute an offer to sell or a solicitation of an offer to
          buy. All images, visuals, layouts, plans, specifications, and
          amenities are indicative and subject to change as per approvals.
        </p>

        <div className="flex flex-col md:flex-row justify-between gap-2">
          <p>
            © {new Date().getFullYear()} Gaur Yamuna City. All Rights Reserved.
          </p>
          <p>
            Marketing Partner Website | For Promotional Use Only
          </p>
        </div>
      </div>
    </footer>
  );
}
