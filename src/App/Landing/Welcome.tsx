import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Linkedin, GitHub, Mail } from "react-feather";
import { useMediaQuery } from "react-responsive";

const Welcome = (): JSX.Element => {
 const isBigScreen = useMediaQuery({ query: "(min-width: 600px)" });
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
  gsap.from(".welcome__icons", {
   translateY: 20,
   autoAlpha: 0,
   ease: "easeIn",
   duration: 1,
   delay: 1,
  });
 }, []);

 return (
  <div className="welcome" ref={content} style={{ visibility: "hidden" }}>
   <h3 className="welcome__title">
    Matthew <br />
    Crompton
   </h3>
   <p className="welcome__text">Berlin-based Front End Developer.</p>
   <div className="welcome__icons">
    <a
     aria-label="Linkedin"
     target="_blank"
     rel="noreferrer"
     href="https://www.linkedin.com/in/mcromp/"
    >
     <Linkedin color="black" className="icon" size={isBigScreen ? 35 : 20} />
    </a>
    <a
     aria-label="Linkedin"
     target="_blank"
     rel="noreferrer"
     href="https://www.linkedin.com/in/mcromp/"
    >
     <GitHub color="black" className="icon" size={isBigScreen ? 35 : 20} />
    </a>
    <a
     aria-label="Linkedin"
     target="_blank"
     rel="noreferrer"
     href="https://www.linkedin.com/in/mcromp/"
    >
     <Mail color="black" className="icon" size={isBigScreen ? 35 : 20} />
    </a>
   </div>
  </div>
 );
};

export default Welcome;
