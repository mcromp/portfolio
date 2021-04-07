import { Link } from "react-router-dom";
import "./styles/styles.css";

const ProjectDash = () => {
 return (
  <section id="projects" className="project-dash">
   <h2 className="section_title">Projects</h2>
   <Link to="/p/menu">MenuPlan</Link>
   <Link to="/p/flag">flag memory</Link>
   <Link to="/p/muz">muzika</Link>
  </section>
 );
};

export default ProjectDash;
