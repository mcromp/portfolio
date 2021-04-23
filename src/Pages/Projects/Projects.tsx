import { projectCardList } from "../../Resources/projectCardList";
import ProjectCard from "./ProjectCard";
import * as Section from "../../StyleComponents/Section";

import "./styles/styles.css";

const Projects = (): JSX.Element => {
 return (
  <section className="project-dash" id="projects">
   <Section.Title>Projects</Section.Title>
   <div className="project-dash__projects">
    {projectCardList.map((project) => (
     <ProjectCard key={project.title} {...project} />
    ))}
   </div>
  </section>
 );
};

export default Projects;
