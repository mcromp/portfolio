import { Link } from "react-router-dom";

const ProjectDash = () => {
 return (
  <div id="projects" style={{ margin: "100em 0" }}>
   <div>Project 1</div>
   <Link to="/p/menu">MenuPlan</Link>
   <Link to="/p/flag">flag memory</Link>
   <Link to="/p/muz">muzika</Link>

   <div>Project 3</div>
  </div>
 );
};

export default ProjectDash;
