export default function Amenities() {
  const amenities = [
    "Swimming Pool",
    "Club & Leisure Zones",
    "Retail & Food Courts",
    "Multiplex",
    "Grand Lobbies",
    "Multi-level Parking",
  ];

  return (
    <section id="amenities" className="section bg-white">
      <div className="container text-center">
        <h2 className="h2">Lifestyle & Amenities</h2>
        <p className="p mb-10">
          Everything residents and tenants look for — within one address.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {amenities.map((a) => (
            <div
              key={a}
              className="card flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                ★
              </div>
              <p className="font-medium">{a}</p>
            </div>
          ))}
        </div>


        <button className="btn-primary mt-10">
          View Amenities & Lifestyle Features
        </button>
        
      </div>
    </section>
  );
}
