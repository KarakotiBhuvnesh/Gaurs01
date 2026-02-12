import ImageBlock from "./ImageBlock";

export default function Standout() {
  return (
    <section id="destination" className="py-12 px-4 sm:py-16 bg-white">
      <div className="max-w-5xl mx-auto">
        <ImageBlock image="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb">
          <div className="space-y-6 sm:space-y-8">
            {/* Badge */}
            <div className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white text-[11px] sm:text-xs font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full uppercase tracking-wide">
              Why This Project Stands Out
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
              A Destination, Not Just a Project
            </h2>

            {/* Subheadline */}
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              One of the{" "}
              <span className="font-bold text-orange-600">
                biggest upcoming retail &amp; entertainment destinations
              </span>{" "}
              in the Yamuna Expressway belt—designed to attract massive daily
              footfall and drive consistent rental demand.
            </p>

            {/* High Footfall Drivers */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-4 sm:p-6 border-l-4 border-orange-600">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                🎯 High Footfall Drivers
              </h3>
              <ul className="space-y-3 text-sm sm:text-base text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold mt-0.5">✔</span>
                  <div>
                    <span className="font-semibold">
                      Multiplex &amp; Entertainment Zones
                    </span>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Premium cinema experience attracting daily visitors
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold mt-0.5">✔</span>
                  <div>
                    <span className="font-semibold">
                      Food Courts &amp; Anchor Retail Brands
                    </span>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Major brands ensuring continuous footfall
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold mt-0.5">✔</span>
                  <div>
                    <span className="font-semibold">
                      Banquet &amp; Leisure Spaces
                    </span>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Events, celebrations, and corporate gatherings
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold mt-0.5">✔</span>
                  <div>
                    <span className="font-semibold">
                      Studio Apartments Above Thriving Commercial Ecosystem
                    </span>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Your investment sits above guaranteed activity
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            

            {/* CTA Button */}
            <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all w-full sm:w-auto text-sm sm:text-base">
              Get Project Details Now
            </button>
          </div>
        </ImageBlock>
      </div>
    </section>
  );
}
