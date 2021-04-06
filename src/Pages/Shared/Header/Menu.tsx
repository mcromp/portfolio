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
   <MenuHashLink to="" setIsMenuOpen={setIsMenuOpen}>
    home
   </MenuHashLink>
   <MenuHashLink to="about" setIsMenuOpen={setIsMenuOpen}>
    about me
   </MenuHashLink>
   <MenuHashLink to="projects" setIsMenuOpen={setIsMenuOpen}>
    projects
   </MenuHashLink>
   <MenuHashLink to="contact" setIsMenuOpen={setIsMenuOpen}>
    contact
   </MenuHashLink>
  </nav>
 );
};

const MenuHashLink: React.FC<any> = ({ to, children, setIsMenuOpen }) => (
 <HashLink
  className="navbar__links"
  smooth
  replace
  to={`/#${to}`}
  onClick={() => setIsMenuOpen(false)}
 >
  {children}
 </HashLink>
);

export default NavBar;
