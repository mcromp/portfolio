import "./styles/styles.css";
import Emoji from "a11y-react-emoji";
import ComputerGraphic from "./ComputerGraphic";

const AboutMe = (): JSX.Element => {
 return (
  <section className="about-me">
   <h2 id="about" className="section_title">
    About
   </h2>
   <div className="about-me__content-wrapper">
    <div>
     <p className="about-me__text">
      Hey, thanks for stopping by!
      <br />
      <br />
      If I had to describe myself in a word, I’d say “maker.” <br />
      I have a natural motivation to learn, grow, tinker, and create. Whether
      I’m fixing up an old motorcycle, designing 3D models, or building a guitar
      fuzzbox, I love understanding a system, seeing how the pieces connect, and
      creating something new.
      <br />
      <br />
      As for programming... <br />
      I first fell in love as a kid making fantasy text adventures with QBasic
      using the family’s Windows 95 computer. The type of work I do nowadays is
      a far cry from the nested IF-statements and GOTO-branches I used then, but
      the magic of transforming code into something engaging, useful, and
      delightful stays the same.
      <br />
      <br />
      Cut to the present day, I’ve completed multiple frontend courses online
      and successfully deployed several web apps—none of which are set in a
      fantasy dungeon, unfortunately!
      <br />
      <br />
      I am looking for an opportunity to put my passion and creativity to work
      here in Berlin. Would you like to work together?
      <br />
      <span className="about-me__text">
       I love learning new technologies. Some of the tech I've been using
       recently:
      </span>
     </p>
     <div className="about-me__tech-list">
      <ul>
       <li>React</li>
       <li>Redux</li>
       <li>JavaScript (ES6+)</li>
       <li>TypeScript</li>
       <li>SASS/CSS3</li>
       <li>NodeJS</li>
       <li>Jest</li>
       <li>MongoDB</li>
       <li>GSAP</li>
      </ul>
     </div>
     Outside of programming I enjoy creating art, traveling, playing guitar, and
     hiking. And, of course, coffee <Emoji label="coffee" symbol="☕" />
    </div>
    <ComputerGraphic />
   </div>
  </section>
 );
};

export default AboutMe;
