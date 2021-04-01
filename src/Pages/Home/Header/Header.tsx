import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import "./styles/styles.css";

const Header = () => {
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

 return (
  <header className={isVisible ? "header" : "header--hidden"}>
   <Logo />
   <button
    className={isMenuOpen ? "menu-toggle" : "menu-toggle"}
    onClick={() => setIsMenuOpen((pS) => !pS)}
   >
    toggle menu
   </button>
   <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
  </header>
 );
};

export default Header;
