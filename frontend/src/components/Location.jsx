export default function Location() {
  return (
    <section id="location" className="section bg-slate-100">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="h2">Location Advantage – Future Ready</h2>
          <p className="p mb-6">
            Located in NCR’s next growth corridor with unmatched expressway
            and airport connectivity.
          </p>

          <ul className="space-y-2 text-lg">
            <li>✔ Direct Yamuna Expressway access</li>
            <li>✔ Minutes from Jewar International Airport</li>
            <li>✔ Close to Noida, Greater Noida & Delhi NCR</li>
            <li>✔ Surrounded by Aero City & business hubs</li>
          </ul>

          <button className="btn-primary mt-6">
            Why Investors Are Choosing This Location
          </button>
        </div>

        <img
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
          className="rounded-lg shadow-lg h-[350px] w-full object-cover"
        />
      </div>
    </section>
  );
}
