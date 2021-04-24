import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import useOutsideClickRef from "@rooks/use-outside-click-ref";
import { useMediaQuery } from "react-responsive";
import { useEffect, useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import Logo from "./Logo";
import Menu from "./Menu";
import MenuToggle from "./MenuToggle";
import "./styles/styles.css";

const Header = (): JSX.Element => {
 const [isVisible, setIsVisible] = useState<boolean>(true);
 const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
 const isToggleVisible = useMediaQuery({
  query: "(max-width: 750px)",
 });

 useEffect(() => {
  console.log(isToggleVisible);
 }, [isToggleVisible]);
 useEffect(() => {
  gsap.from(".header", {
   autoAlpha: 0,
   ease: "easeIn",
   delay: 0.8,
   duration: 1,
  });
 }, []);

 //https://github.com/n8tb1t/use-scroll-position#readme
 useScrollPosition(
  ({ prevPos, currPos }) => {
   setIsVisible(currPos.y >= prevPos.y || currPos.y === 0);
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

 //https://react-hooks.org/docs/use-outside-click-ref
 const outsideMenuClick = () => {
  if (isMenuOpen) setIsMenuOpen(false);
 };

 const [menuRef] = useOutsideClickRef(outsideMenuClick);

 return (
  <>
   <div className={isMenuOpen && isVisible ? "modal--open" : "modal"} />
   <header className={isVisible ? "header" : "header--hidden"}>
    <Logo />
    {isToggleVisible ? (
     <MenuToggle
      isMenuOpen={isMenuOpen}
      isVisible={isVisible}
      setIsMenuOpen={setIsMenuOpen}
     />
    ) : null}
    <Menu
     isToggleVisible={isToggleVisible}
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
