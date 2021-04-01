import { HashLink } from "react-router-hash-link";

const NavBar: React.FC<any> = ({ isMenuOpen, setIsMenuOpen }) => {
 return (
  <nav className={isMenuOpen ? "navbar--menuOpen" : "navbar"}>
   <HashLink
    className="navbar__links"
    smooth
    to="#about"
    onClick={() => setIsMenuOpen(false)}
   >
    about me
   </HashLink>
   <HashLink
    className="navbar__links"
    smooth
    to="#projects"
    onClick={() => setIsMenuOpen(false)}
   >
    projects
   </HashLink>
   <HashLink
    className="navbar__links"
    smooth
    to="#contact"
    onClick={() => setIsMenuOpen(false)}
   >
    contact
   </HashLink>
  </nav>
 );
};
export default NavBar;
