import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { useState } from "react";
import { ChevronUp } from "react-feather";
import "./styles/styles.css";

const ScrollToTop = (): JSX.Element => {
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
   aria-label="scroll to top"
   className={isVisible ? "top-scroll" : "top-scroll--hidden"}
   onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  >
   <ChevronUp size={40} color="black" />
  </button>
 );
};

export default ScrollToTop;
