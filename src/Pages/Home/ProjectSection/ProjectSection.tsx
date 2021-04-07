import ProjectCard from "./ProjectCard";
import { projectList } from "./projectList";
import "./styles/styles.css";

const ProjectSection = () => {
 return (
  <section id="projects" className="project-dash">
   <h2 className="section_title">Projects</h2>

   {projectList.map((project: any) => {
    const { to, title, img, text } = project;
    return <ProjectCard to={to} title={title} img={img} text={text} />;
   })}
  </section>
 );
};

export default ProjectSection;
