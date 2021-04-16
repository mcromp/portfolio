import { projectCardList } from "../../Resources/projectCardList";
import ProjectCard from "./ProjectCard";
import "./styles/styles.css";

const Projects = (): JSX.Element => {
 return (
  <section className="project-dash">
   <h2 id="projects" className="section_title">
    Projects
   </h2>
   <p>Here are some recent personal projects of mine.</p>

   <div className="project-dash__projects">
    {projectCardList.map((project) => (
     <ProjectCard key={project.title} {...project} />
    ))}
   </div>
  </section>
 );
};

export default Projects;
