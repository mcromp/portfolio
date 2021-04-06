import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { useState } from "react";
import "./styles/styles.css";

const ScrollToTop = () => {
 const [isVisible, setIsVisible] = useState<boolean>(false);

 useScrollPosition(
  ({ prevPos, currPos }) => {
   setIsVisible(currPos.y >= prevPos.y && currPos.y <= -500);
  },
  [isVisible],
  undefined,
  undefined,
  100,
 );

 return (
  <button
   className={isVisible ? "top-scroll" : "top-scroll--hidden"}
   onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  >
   Scroll to top
  </button>
 );
};

export default ScrollToTop;