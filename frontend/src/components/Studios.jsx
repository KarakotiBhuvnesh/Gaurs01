import ImageBlock from "./ImageBlock";

export default function Studios() {
  return (
    <section id="studios" className="section bg-slate-50">

    <ImageBlock
      reverse
      image="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
    >
      <h2 className="h2">Studio Apartments Designed for Today</h2>

      <p className="p mb-6">
        Compact, efficient homes built for professionals, business travelers
        and high-yield investors.
      </p>

      <ul className="space-y-2 text-lg">
        <li>✔ Ideal for airport & corporate staff</li>
        <li>✔ High rental demand & fast leasing</li>
        <li>✔ Low maintenance, high usability</li>
      </ul>

      <button className="btn-primary mt-6">
        Check Studio Layout & Availability
      </button>
    </ImageBlock>
    </section>
  );
}
