import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import useOutsideClickRef from "@rooks/use-outside-click-ref";
import { useLayoutEffect, useState } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import "./styles/styles.css";

const Header: React.FC<any> = () => {
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

 const outsideMenuClick = () => {
  if (isMenuOpen) setIsMenuOpen(false);
 };

 //stop body scrolling when menu is open
 useLayoutEffect(() => {
  document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
 }, [isMenuOpen]);

 //listens for clicks outside menu using useOutsideClickRef
 //https://react-hooks.org/docs/use-outside-click-ref
 const [menuRef] = useOutsideClickRef(outsideMenuClick);

 return (
  <>
   <div className={isMenuOpen && isVisible ? "modal--open" : "modal"} />
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
     menuRef={menuRef}
    />
   </header>
  </>
 );
};

export default Header;
