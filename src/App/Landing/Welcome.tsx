import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Welcome = (): JSX.Element => {
 let content = useRef<HTMLDivElement>(null);

 useEffect(() => {
  gsap.to(".welcome", { css: { visibility: "visible" } });
  gsap.from(".welcome", {
   autoAlpha: 0,
   ease: "bounce",
   delay: 0.5,
   duration: 1,
  });
  gsap.from(".welcome__text", {
   scale: 0.5,
   ease: "easeIn",
   duration: 1,
  });
 }, []);

 return (
  <div className="welcome" ref={content} style={{ visibility: "hidden" }}>
   <h3 className="welcome__title">
    Matthew <br />
    Crompton
   </h3>
   <p className="welcome__text">Berlin-based Front End Developer.</p>
  </div>
 );
};

export default Welcome;
