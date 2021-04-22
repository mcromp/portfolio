import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Linkedin, GitHub, Mail } from "react-feather";
// import { useMediaQuery } from "react-responsive";

import "./styles/styles.css";

const Landing = (): JSX.Element => {
 //  const isBigScreen = useMediaQuery({ query: "(min-width: 600px)" });
 let content = useRef<HTMLDivElement>(null);

 useEffect(() => {
  let tl = gsap.timeline();
  tl.to(".welcome", { css: { visibility: "visible" } });
  tl.from(".welcome", {
   autoAlpha: 0,
   ease: "easeIn",
   duration: 1,
  });

  gsap.from(".welcome__text", {
   scale: 0.5,
   ease: "easeIn",
   duration: 1,
  });
  tl.from(".welcome__icons", {
   translateY: 40,
   autoAlpha: 0,
   ease: "bounce",
   duration: 1,
  });
 }, []);

 return (
  <div className="landing">
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
      <Linkedin color="black" className="icon" size={35} />
     </a>
     <a
      aria-label="GitHub"
      target="_blank"
      rel="noreferrer"
      href="https://github.com/mcromp"
     >
      <GitHub color="black" className="icon" size={35} />
     </a>
     <a
      aria-label="Email"
      target="_blank"
      rel="noreferrer"
      href="mailto:mcromp.js@gmail.com?subject=Hello!"
     >
      <Mail color="black" className="icon" size={35} />
     </a>
    </div>
   </div>
  </div>
 );
};

export default Landing;
