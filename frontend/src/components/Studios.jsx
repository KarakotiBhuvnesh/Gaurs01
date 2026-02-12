import ImageBlock from "./ImageBlock";

export default function Studios() {
  const handleScrollToForm = () => {
    const form = document.getElementById("lead-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="studios"
      className="py-8 px-4 sm:py-12 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-10">
          <div className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white text-[11px] sm:text-xs font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3">
            RETAIL & ENTERTAINMENT
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            A Self-Sustained Retail & Lifestyle Destination
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            The multi-level retail boulevard transforms the project into a high-activity commercial and lifestyle hub.
          </p>
        </div>

        {/* Image Block with Content */}
        <ImageBlock
          reverse
          image="/src/img/hero.png"
        >
          <div className="space-y-5 sm:space-y-6">
            {/* Featuring Section */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-4 sm:p-6 border-l-4 border-orange-600">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                Featuring:
              </h3>
              <ul className="space-y-2 sm:space-y-2.5 text-sm sm:text-base text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold mt-0.5">•</span>
                  <span>Branded retail outlets & anchor stores</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold mt-0.5">•</span>
                  <span>Multi-cuisine restaurants & cafés</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold mt-0.5">•</span>
                  <span>Food court & entertainment zones</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold mt-0.5">•</span>
                  <span>Daily convenience & essential services</span>
                </li>
              </ul>
            </div>

            {/* Why This Matters for Investors */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 sm:p-6 border-l-4 border-green-600">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                Why This Matters for Investors:
              </h3>
              <ul className="space-y-2 sm:space-y-2.5 text-sm sm:text-base text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <span>Creates built-in demand within the complex</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <span>Increases rental yield potential</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <span>Enhances tenant & buyer attraction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <span>Supports long-term asset appreciation</span>
                </li>
              </ul>
            </div>

            {/* Bottom Message */}
            <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                <span className="font-semibold text-orange-600">Retail integration</span> ensures your investment benefits from a live-work-leisure ecosystem, not a standalone property.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold px-6 sm:px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all text-sm sm:text-base w-full sm:w-auto">
                Explore Retail Opportunities
              </button>
              <button className="bg-white border-2 border-orange-600 text-orange-600 hover:bg-orange-50 font-bold px-6 sm:px-8 py-3 rounded-lg transition-all text-sm sm:text-base w-full sm:w-auto">
                Download Floor Plans
              </button>
            </div>
          </div>
        </ImageBlock>

        {/* Floor Plans Section */}
        <div className="mt-10 sm:mt-14">
          <div className="text-center mb-6 sm:mb-8">

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Your Vision, Our Floor Plans
            </h2>

          </div>
          

          {/* Floor Plan Image with Overlay */}
          <div className="relative rounded-xl overflow-hidden shadow-xl max-w-[240px] sm:max-w-xs md:max-w-md mx-auto">
            <img
              src="/src/img/floor-plan.png"
              alt="Studio Apartment Floor Plan"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 flex items-end justify-center pb-3 sm:pb-4">
              <button
                onClick={handleScrollToForm}
                className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-bold px-3 sm:px-5 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-lg transition-all text-[10px] sm:text-xs md:text-sm shadow-lg hover:shadow-xl active:scale-95"
              >
                Get Floor Plans
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
