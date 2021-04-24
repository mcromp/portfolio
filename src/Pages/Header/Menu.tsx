import React, { useCallback, useEffect, useState } from "react";
import MenuHashLink from "./MenuHashLink";

const NavBar = ({
 isToggleVisible,
 isMenuOpen,
 setIsMenuOpen,
 isVisible,
 menuRef,
}: navBarProps) => {
 const [isNavVisible, setIsNavVisible] = useState(true);
 //listens to close window when esc key pressed
 const escCallback = useCallback(
  (event) => {
   if (event.keyCode === 27) setIsMenuOpen(false);
  },
  [setIsMenuOpen],
 );

 useEffect(() => {
  if (isToggleVisible && isMenuOpen && isVisible) setIsNavVisible(false);
  else setIsNavVisible(true);
 }, [isToggleVisible, isMenuOpen, isVisible]);

 useEffect(() => {
  document.addEventListener("keydown", escCallback, false);

  return () => {
   document.removeEventListener("keydown", escCallback, false);
  };
 }, [escCallback]);

 return (
  <nav
   ref={menuRef}
   className={isMenuOpen && isVisible ? "navbar--menu-open" : "navbar"}
  >
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

type navBarProps = {
 isToggleVisible: boolean;
 isMenuOpen: boolean;
 setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
 isVisible: boolean;
 menuRef: React.Ref<HTMLElement>;
};

export default NavBar;
