import ImageBlock from "./ImageBlock";

export default function Standout() {
  return (
    <section id="destination" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <ImageBlock
          image="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
        >
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wide">
              Why This Project Stands Out
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              A Destination, Not Just a Project
            </h2>

            {/* Subheadline */}
            <p className="text-xl text-gray-700 leading-relaxed">
              One of the <span className="font-bold text-orange-600">biggest upcoming retail & entertainment destinations</span> in the Yamuna Expressway belt—designed to attract massive daily footfall and drive consistent rental demand.
            </p>

            {/* High Footfall Drivers */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border-l-4 border-orange-600">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                🎯 High Footfall Drivers
              </h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold">✔</span>
                  <div>
                    <span className="font-semibold">Multiplex & Entertainment Zones</span>
                    <p className="text-sm text-gray-600">Premium cinema experience attracting daily visitors</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold">✔</span>
                  <div>
                    <span className="font-semibold">Food Courts & Anchor Retail Brands</span>
                    <p className="text-sm text-gray-600">Major brands ensuring continuous footfall</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold">✔</span>
                  <div>
                    <span className="font-semibold">Banquet & Leisure Spaces</span>
                    <p className="text-sm text-gray-600">Events, celebrations, and corporate gatherings</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold">✔</span>
                  <div>
                    <span className="font-semibold">Studio Apartments Above Thriving Commercial Ecosystem</span>
                    <p className="text-sm text-gray-600">Your investment sits above guaranteed activity</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Key Value Proposition */}
            <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl p-6">
              <p className="text-lg font-semibold">
                💡 Your studio apartment sits above a thriving commercial ecosystem—ensuring <span className="underline">consistent rental demand</span> and <span className="underline">strong appreciation</span>.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
              <div className="bg-white rounded-xl p-4 shadow-md border border-gray-200 text-center">
                <div className="text-2xl font-bold text-orange-600">NCR's</div>
                <div className="text-xs text-gray-600 uppercase">Biggest Retail Hub</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md border border-gray-200 text-center">
                <div className="text-2xl font-bold text-red-600">24 KM</div>
                <div className="text-xs text-gray-600 uppercase">Jewar Airport</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md border border-gray-200 text-center">
                <div className="text-2xl font-bold text-orange-600">High</div>
                <div className="text-xs text-gray-600 uppercase">Rental Demand</div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all w-full md:w-auto">
              Get Project Details Now
            </button>
          </div>
        </ImageBlock>
      </div>
    </section>
  );
}
