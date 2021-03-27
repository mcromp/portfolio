import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { useState } from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";
import "./styles/styles.css";

const Header = () => {
 const [headerStyle, setHeaderStyle] = useState({
  transition: "all 200ms ease-in",
 });
 useScrollPosition(
  ({ prevPos, currPos }) => {
   const isVisible = currPos.y > prevPos.y;

   const shouldBeStyle = {
    visibility: isVisible ? "visible" : "hidden",
    transition: `all 200ms ${isVisible ? "ease-in" : "ease-out"}`,
    transform: isVisible ? "none" : "translate(0, -100%)",
   };

   if (JSON.stringify(shouldBeStyle) === JSON.stringify(headerStyle)) return;

   setHeaderStyle(shouldBeStyle);
  },
  [headerStyle],
 );
 return (
  <div className="scrolled">
   <header style={{ ...headerStyle }} className="header">
    <Logo />
    <NavBar />
   </header>
  </div>
 );
};

export default Header;
