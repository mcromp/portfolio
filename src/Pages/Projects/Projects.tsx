import MenuPlan from "./MenuPlan";
import Muzika from "./Muzika";
import Flag from "./Flag";
import * as Section from "../../StyleComponents/Section";
import "./styles/styles.css";

const Projects = (): JSX.Element => {
 return (
  <section className="project-dash" id="projects">
   <Section.Title>Projects</Section.Title>
   <MenuPlan />
   <Muzika />
   <Flag />
  </section>
 );
};

export default Projects;
