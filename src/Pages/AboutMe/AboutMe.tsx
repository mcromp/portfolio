import TechCloud from "./TechCloud";
import AboutMeBlock from "./AboutMeBlock";
import * as Section from "../../StyleComponents/Section";

import "./styles/styles.css";

const AboutMe = (): JSX.Element => {
 return (
  <section className="about-me" id="about">
   <Section.Title> About</Section.Title>
   <AboutMeBlock />
   <TechCloud />
  </section>
 );
};

export default AboutMe;
