import { HashLink } from "react-router-hash-link";

const NavBar = () => {
 return (
  <nav className="navbar">
   <HashLink className="navbar__links" smooth to="#about">
    about me
   </HashLink>
   <HashLink className="navbar__links" smooth to="#projects">
    projects
   </HashLink>
   <HashLink className="navbar__links" smooth to="#contact">
    contact
   </HashLink>
  </nav>
 );
};
export default NavBar;
