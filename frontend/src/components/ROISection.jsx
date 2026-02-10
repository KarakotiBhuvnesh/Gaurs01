import { projectData } from "../data/projectData";

const ROISection = () => {
  return (
    <section className="roi-section">
      <h2 className="text-center">
        Investment Returns & Growth Potential
      </h2>

      <div className="roi-list">
        {projectData.roiPoints.map((point, index) => (
          <div className="roi-card" key={index}>
            📈 {point}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ROISection;
