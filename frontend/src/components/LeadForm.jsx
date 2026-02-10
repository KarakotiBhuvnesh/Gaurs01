const LeadForm = () => {
  return (
    <section id="lead-form" className="py-12 px-4 bg-gray-900 text-white">
      <h2 className="text-2xl font-bold text-center mb-6">
        Get Pricing, Brochure & Site Visit Details
      </h2>

      <form className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 rounded text-black"
          required
        />
        <input
          type="tel"
          placeholder="Mobile Number"
          className="w-full p-3 rounded text-black"
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-3 rounded text-black"
          required
        />

        <button className="w-full bg-red-600 py-3 rounded font-semibold">
          Get Instant Callback
        </button>

        <p className="text-xs text-gray-400 text-center">
          We respect your privacy. No spam. No sharing of data.
        </p>
      </form>
    </section>
  );
};

export default LeadForm;
