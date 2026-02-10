import { projectData } from "../data/projectData";

const ProjectGlance = () => {
  return (
    <section className="project-glance">
      <h2 className="text-center">Project at a Glance</h2>

      <div className="project-glance-grid">
        {projectData.specs.map((item, index) => (
          <div className="project-glance-card" key={index}>
            <p>{item.label}</p>
            <p>{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGlance;
