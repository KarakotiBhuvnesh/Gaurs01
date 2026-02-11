export default function Returns() {
  return (
    <section
      id="returns"
      className="relative bg-gradient-to-b from-neutral-900 to-neutral-950 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Returns & Financial Benefits
        </h2>

        <p className="text-slate-300 max-w-3xl mx-auto mb-14">
          Designed for investors seeking rental income today and
          capital appreciation tomorrow.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl p-8">
            <h3 className="text-4xl font-bold mb-2 text-white">7–9%</h3>
            <p className="text-slate-300">Expected Rental Yield</p>
          </div>

          {/* Card 2 */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl p-8">
            <h3 className="text-4xl font-bold mb-2 text-white">2–3×</h3>
            <p className="text-slate-300">
              Capital Appreciation Potential
            </p>
          </div>

          {/* Card 3 */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl p-8">
            <h3 className="text-4xl font-bold mb-2 text-white">Low Entry</h3>
            <p className="text-slate-300">
              Studio Price Advantage
            </p>
          </div>
        </div>

        <button className="mt-14 inline-flex items-center justify-center rounded-xl bg-red-600 px-10 py-4 text-sm font-semibold text-white hover:bg-red-700 transition">
          Get ROI & Pricing Details
        </button>
      </div>
    </section>
  );
}
