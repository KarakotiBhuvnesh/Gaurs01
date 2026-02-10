import { projectData } from "../data/projectData";

const Infrastructure = () => {
  return (
    <section className="infrastructure">
      <h2 className="text-center">
        Surroundings & Infrastructure
      </h2>

      <div className="infrastructure-grid">
        {projectData.infrastructure.map((item, index) => (
          <div className="infrastructure-card" key={index}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Infrastructure;
