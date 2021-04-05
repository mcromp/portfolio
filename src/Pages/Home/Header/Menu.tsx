import { useCallback, useLayoutEffect as useEffect } from "react";
import { HashLink } from "react-router-hash-link";

const NavBar: React.FC<any> = ({
 isMenuOpen,
 setIsMenuOpen,
 isVisible,
 menuRef,
}) => {
 //listens to close window when esc key pressed
 const escCallback = useCallback(
  (event) => {
   if (event.keyCode === 27) setIsMenuOpen(false);
  },
  [setIsMenuOpen],
 );

 useEffect(() => {
  document.addEventListener("keydown", escCallback, false);

  return () => {
   document.removeEventListener("keydown", escCallback, false);
  };
 }, [escCallback]);

 return (
  <nav
   ref={menuRef}
   className={isMenuOpen && isVisible ? "navbar--menuOpen" : "navbar"}
  >
   <HashLink
    className="navbar__links"
    smooth
    to="/#about"
    onClick={() => setIsMenuOpen(false)}
   >
    about me
   </HashLink>
   <HashLink
    className="navbar__links"
    smooth
    to="/#projects"
    onClick={() => setIsMenuOpen(false)}
   >
    projects
   </HashLink>
   <HashLink
    className="navbar__links"
    smooth
    to="/#contact"
    onClick={() => setIsMenuOpen(false)}
   >
    contact
   </HashLink>
  </nav>
 );
};
export default NavBar;
