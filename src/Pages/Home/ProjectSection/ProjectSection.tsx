import ProjectCard from "./ProjectCard";
import { projectList } from "./projectList";
import "./styles/styles.css";

const ProjectSection = (): JSX.Element => {
 return (
  <section id="projects" className="project-dash">
   <h2 className="section_title">Projects</h2>
   <p>Here are some recent personal projects of mine.</p>

   <div className="project-dash__projects">
    {projectList.map((project) => {
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
