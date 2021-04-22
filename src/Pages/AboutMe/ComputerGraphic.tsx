import Emoji from "a11y-react-emoji";
import { gsap } from "gsap";
import { useEffect } from "react";

const ComputerGraphic = (): JSX.Element => {
 useEffect(() => {
  gsap.to(".dragon", {
   x: 240,
   duration: 8.1,
   yoyo: true,
   repeat: -1,
  });
  gsap.to(".dragon", {
   y: 240,
   duration: 5,
   yoyo: true,
   repeat: -1,
  });
 }, []);

 return (
  <div className="comp-graphic">
   <div className="dragon">
    <Emoji symbol="🐉" label="dragon" />
   </div>
   <div className="comp">
    <Emoji label="computer" symbol="🖥️" />
   </div>
   <div></div>
  </div>
 );
};

export default ComputerGraphic;
