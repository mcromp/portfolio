import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { useLayoutEffect, useState } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import "./styles/styles.css";

const Header: React.FC<any> = ({ setIsModalOpen }) => {
 const [isVisible, setIsVisible] = useState(true);
 const [isMenuOpen, setIsMenuOpen] = useState(false);

 //https://github.com/n8tb1t/use-scroll-position#readme
 useScrollPosition(
  ({ prevPos, currPos }) => {
   setIsVisible(currPos.y > prevPos.y);
  },
  [isVisible],
  undefined,
  undefined,
  100,
 );

 //stop body scrolling when menu is open
 useLayoutEffect(() => {
  document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
 }, [isMenuOpen]);

 return (
  <header className={isVisible ? "header" : "header--hidden"}>
   <Logo />
   <button
    className={isMenuOpen && isVisible ? "menu-toggle--open" : "menu-toggle"}
    onClick={() => setIsMenuOpen((pS) => !pS)}
   >
    toggle menu
   </button>
   <Menu
    isMenuOpen={isMenuOpen}
    setIsMenuOpen={setIsMenuOpen}
    isVisible={isVisible}
   />
  </header>
 );
};

export default Header;
