import ImageBlock from "./ImageBlock";

export default function Standout() {
  return (
    <section id="destination" className="section bg-white">


    <ImageBlock
      image="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
    >
      <h2 className="h2">A Destination, Not Just a Project</h2>

      <p className="p mb-6">
        One of the biggest upcoming retail & entertainment destinations on
        Yamuna Expressway, designed to attract massive daily footfall.
      </p>

      <ul className="space-y-2 text-lg">
        <li>✔ Multiplex & entertainment zones</li>
        <li>✔ Food courts & anchor retail brands</li>
        <li>✔ Banquet & leisure spaces</li>
        <li>✔ Studio apartments above retail ecosystem</li>
      </ul>

      <button className="btn-primary mt-6">
        Get Project Details Now
      </button>
    </ImageBlock>
    </section>
  );
}
