import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Welcome = (): JSX.Element => {
 let content = useRef<HTMLDivElement>(null);

 useEffect(() => {
  if (content) {
   gsap.to(content.current, 0, { css: { visibility: "visible" } });
   gsap.from(content.current, {
    autoAlpha: 0,
    ease: "bounce",
    delay: 0.5,
   });
   gsap.from(content.current, { scale: 0.1, duration: 1 });
  }
 }, []);

 return (
  <div className="welcome" ref={content}>
   <h3 className="welcome__title">
    Matthew <br />
    Crompton
   </h3>
   <p className="welcome__text">Berlin-based Front End Developer.</p>
  </div>
 );
};

export default Welcome;
