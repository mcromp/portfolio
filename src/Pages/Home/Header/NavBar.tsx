import { HashLink } from "react-router-hash-link";

const NavBar = () => {
 return (
  <nav className="navbar">
   <HashLink smooth to="#about">
    about me
   </HashLink>
   <HashLink smooth to="#projects">
    projects
   </HashLink>
   <HashLink smooth to="#contact">
    contact
   </HashLink>
  </nav>
 );
};
export default NavBar;
