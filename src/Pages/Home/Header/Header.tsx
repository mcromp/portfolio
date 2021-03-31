import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { useState } from "react";
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
 );

 return (
  <header className={isVisible ? "header" : ""}>
   <Logo />
   <button className="navbar__menu-toggle">toggle menu</button>
   <NavBar />
  </header>
 );
};

export default Header;
