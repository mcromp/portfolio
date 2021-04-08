import ProjectCard from "./ProjectCard";
import { projectList } from "./projectList";
import "./styles/styles.css";

const ProjectSection = () => {
 return (
  <section id="projects" className="project-dash">
   <h2 className="section_title">Projects</h2>
   <p>Just some recent personal projects.</p>
   <div className="project-dash__projects">
    {projectList.map((project: any) => {
     const { to, title, icon, text } = project;
     return (
      <ProjectCard key={title} to={to} title={title} icon={icon} text={text} />
     );
    })}
   </div>
  </section>
 );
};

export default ProjectSection;
