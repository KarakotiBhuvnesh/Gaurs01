export default function Returns() {
  return (
    <section id="returns" className="section bg-premium text-white">
      <div className="container text-center">
        <h2 className="h2 mb-4">
          Returns & Financial Benefits
        </h2>
        <p className="text-slate-300 max-w-3xl mx-auto mb-12">
          Designed for investors seeking rental income today and
          capital appreciation tomorrow.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass rounded-xl p-8">
            <h3 className="h3 mb-2">7–9%</h3>
            <p>Expected Rental Yield</p>
          </div>

          <div className="glass rounded-xl p-8">
            <h3 className="h3 mb-2">2–3×</h3>
            <p>Capital Appreciation Potential</p>
          </div>

          <div className="glass rounded-xl p-8">
            <h3 className="h3 mb-2">Low Entry</h3>
            <p>Studio Price Advantage</p>
          </div>
        </div>

        <button className="btn-primary mt-12">
          Get ROI & Pricing Details
        </button>
      </div>
    </section>

  );
}
