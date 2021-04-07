import "./styles/styles.css";

const AboutMe = () => {
 return (
  <section id="about" className="about-me">
   <h2 className="section_title">About</h2>
   <p>
    Hey, thanks for stopping by!
    <br />
    <br />
    If I had to describe myself in a word, I’d say ‘<u>maker</u>’.
    <br />I have a natural motivation to learn, grow, tinker, and create.
   </p>
   <p>
    As for programming...
    <br />I first fell in love as a kid making text adventures with QBasic using
    the family’s Windows 95 computer.
   </p>
   <p>
    Cut to the present day, I’ve graduated from online front end courses and
    successfully deployed several web apps (none of which are set in a dungeon,
    unfortunately).
    <br />
    Outside of programming I enjoy creating art, traveling, playing guitar, and
    hiking. ...Yes, also coffee.
   </p>
   <p>Some of the tech I've been using recently:</p>
   <ul>
    <li>React</li>
    <li>Redux</li>
    <li>JavaScript (ES6+)</li>
    <li>TypeScript</li>
    <li></li>
   </ul>
  </section>
 );
};

export default AboutMe;
