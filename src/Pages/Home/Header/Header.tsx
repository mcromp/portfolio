import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";
import "./styles/styles.css";

const Header = () => {
 const [isVisible, setIsVisible] = useState(true);
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
   <button className="navbar__menu-toggle">toggle menu</button>
   <NavBar />
  </header>
 );
};

export default Header;
