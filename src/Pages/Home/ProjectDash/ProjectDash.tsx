import { Link } from "react-router-dom";

const ProjectDash = () => {
 return (
  <div id="projects" style={{ margin: "100em 0" }}>
   <div>Project 1</div>
   <Link to="/p/">Home</Link>
   <div>Project 3</div>
  </div>
 );
};

export default ProjectDash;
