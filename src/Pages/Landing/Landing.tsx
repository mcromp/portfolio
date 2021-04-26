import { useEffect } from "react";
import { gsap } from "gsap";
import { Linkedin, GitHub, Mail } from "react-feather";
import * as Hero from "../../StyleComponents/Hero";
import { IconLink } from "../../StyleComponents/Block";
import "./styles/styles.css";

const Landing = (): JSX.Element => {
 useEffect(() => {
  let tl = gsap.timeline();
  tl
   .from(".landing", {
    autoAlpha: 0,
    ease: "easeIn",
    duration: 0.3,
   })
   .from(".fade2", {
    autoAlpha: 0,
    ease: "power2.in",
    duration: 0.4,
   })
   .from(".landing__icons", {
    translateY: 40,
    autoAlpha: 0,
    ease: "bounce",
    duration: 1,
   });
  gsap.from(".scale-ease", {
   scale: 0.5,
   ease: "easeIn",
   duration: 1,
  });
 }, []);

 return (
  <section className="landing">
   <Hero.Title styleAdd={"fade2"}>
    Matthew <br />
    Crompton
   </Hero.Title>
   <Hero.SubTitle styleAdd={"scale-ease"}>
    Berlin-based Front End Developer.
   </Hero.SubTitle>

   <div className="landing__icons">
    <IconLink url={"https://www.linkedin.com/in/mcromp/"}>
     <Linkedin color="black" className="icon" size={35} />
    </IconLink>
    <IconLink url={"https://github.com/mcromp"}>
     <GitHub color="black" className="icon" size={35} />
    </IconLink>
    <IconLink url={"mailto:mcromp.js@gmail.com?subject=Hello!"}>
     <Mail color="black" className="icon" size={35} />
    </IconLink>
   </div>
  </section>
 );
};

export default Landing;
