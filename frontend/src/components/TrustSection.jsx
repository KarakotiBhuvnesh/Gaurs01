import { projectData } from "../data/projectData";

const TrustSection = () => {
  return (
    <section className="trust-section">
      <h2 className="text-center">
        Why Buyers Trust Gaur Yamuna City
      </h2>

      <div className="trust-grid">
        {projectData.trustPoints.map((point, index) => (
          <div className="trust-item" key={index}>
            <span>✔</span>
            <p>{point}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustSection;
