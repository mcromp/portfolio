import "./styles/styles.css";
import Emoji from "a11y-react-emoji";

const AboutMe = (): JSX.Element => {
 return (
  <section id="about" className="about-me">
   <h2 className="section_title">About</h2>
   <p>
    Hey, thanks for stopping by!
    <br />
    <br />
    If I had to describe myself in a word, I’d say ‘<u>maker</u>’.
    <br />
    I have a natural motivation to learn, grow, tinker, and create.
    <br />
    <br />
    As for programming... <br />
    I first fell in love as a kid making fantasy text adventures with QBasic
    using the family’s Windows 95 computer.
    <br />
    <br />
    Cut to the present day, I’ve completed multiple frontend courses online and
    successfully deployed several web apps (none of which are set in a fantasy
    dungeon, unfortunately).
    <br />
    <br />
    Outside of programming I enjoy creating art, traveling, playing guitar, and
    hiking.
    <br />
    ...Yes, also coffee <Emoji symbol="☕" label="coffee" />
   </p>
   <p>Some of the tech I've been using recently:</p>
   <div className="about-me__tech-list">
    <ul>
     <li>React</li>
     <li>Redux</li>
     <li>JavaScript (ES6+)</li>
    </ul>
    <ul>
     <li>TypeScript</li>
     <li>SASS/CSS3</li>
     <li>NodeJS</li>
    </ul>
   </div>
  </section>
 );
};

export default AboutMe;
