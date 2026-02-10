import { projectData } from "../data/projectData";

const GrowthTimeline = () => {
  return (
    <section className="growth-timeline">
      <h2 className="text-center">
        Future Growth & Jewar Airport Timeline
      </h2>

      <div className="timeline-wrapper">
        {projectData.timeline.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-year">{item.year}</div>

            <div className="timeline-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GrowthTimeline;
