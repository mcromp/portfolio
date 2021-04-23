import Emoji from "a11y-react-emoji";
import { gsap } from "gsap";
import { useState } from "react";
import { useEffect } from "react";
import useWindowSize from "@rooks/use-window-size";

const ComputerGraphic = (): JSX.Element => {
 const { innerWidth } = useWindowSize();
 const [size, setSize] = useState(400);

 useEffect(() => {
  if (innerWidth) {
   if (innerWidth > 1200) setSize(400);
   else if (innerWidth > 900) setSize(300);
   else if (innerWidth > 700) setSize(200);
   else setSize(200);
  }
 }, [innerWidth]);

 useEffect(() => {
  gsap.to(".dragon", {
   x: Math.sqrt(2 * (((size / 2) * size) / 2)) - size / 8,
   duration: 8.1,
   yoyo: true,
   repeat: -1,
  });
  gsap.to(".dragon", {
   y: Math.sqrt(2 * (((size / 2) * size) / 2)) - size / 8,
   duration: 5,
   yoyo: true,
   repeat: -1,
  });
 }, [size]);

 return (
  <div
   className="comp-graphic"
   style={{ minWidth: size + "px", height: size + "px" }}
  >
   <div className="dragon">
    <Emoji symbol="🐉" label="dragon" style={{ fontSize: size / 4 + "px" }} />
   </div>
   <div className="comp">
    <Emoji
     label="computer"
     symbol="🖥️"
     style={{ fontSize: size / 2.5 + "px" }}
    />
   </div>
   <div></div>
  </div>
 );
};

export default ComputerGraphic;
