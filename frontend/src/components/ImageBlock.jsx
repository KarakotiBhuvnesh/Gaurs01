export default function ImageBlock({ image, children, reverse = false }) {
  return (
    <section className="section bg-white">
      <div
        className={`container grid md:grid-cols-2 gap-10 items-center ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        <img
          src={image}
          alt="Project visual"
          className="rounded-lg shadow-lg w-full h-[350px] object-cover"
        />
        <div>{children}</div>
      </div>
    </section>
  );
}
