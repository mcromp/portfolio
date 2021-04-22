import Emoji from "a11y-react-emoji";
import TechList from "./TechList";
import AboutMeBlock from "./AboutMeBlock";
import { Line } from "../../StyleComponents/Line";
import * as Section from "../../StyleComponents/Section";

import "./styles/styles.css";

const AboutMe = (): JSX.Element => {
 return (
  <section className="about-me" id="about">
   <Section.Title> About</Section.Title>
   <AboutMeBlock />
   <TechList />
  </section>
 );
};

export default AboutMe;
