import { SubHeader, Img, TextHeader, Text } from "../../StyleComponents/Block";
import { TechList } from "../../StyleComponents/TechList";
import { Line } from "../../StyleComponents/Line";
import ProjectLinks from "./ProjectLinks";
import pic from "../../Assets/muz-ss.png";

const Muzika = (): JSX.Element => (
 <div className="proj-card">
  <div className="proj-col-1">
   <SubHeader>MuZika!</SubHeader>
   <Img pic={pic} alt={"muzika"} />
  </div>
  <div className="proj-col-2">
   <TextHeader>Info</TextHeader>
   <Text>
    One of the cool things about web dev is how it’s the intersection of so many
    interesting technologies. For example Web Audio API. Synthesizing and
    manipulating audio directly from the user’s browser is pretty neat I think.
    And being a hobbyist musician, I was drawn to creating a musical application
    for my aural skills.
    {"\n\n"}
    With MuziKa the user plays a chord progression and a ‘mystery’ note
    generated in a random musical key. After hearing this the user must guess
    the mystery note’s relation to the root of the key.
    {"\n\n"}
    The user is able to replay the chord progression entirely, play any of the
    individual chords within the progression, replay the mystery note, or change
    to a new random key with a new mystery note. A score is kept as a percentage
    of correct vs incorrect guesses in the top right corner.`
   </Text>
   <TextHeader>Tech</TextHeader>
   <Text>
    I knew I wanted to create this project with synthetic tones generated using
    Web Audio API, but the amount of time needed to utilize Web Audio API
    directly was outside the scope of the project. So I began searching for a
    React library that utilized the API.
    {"\n\n"}I choose ToneJS because of the community, well written docs, and
    focus on tone synthesis. {"\n"}Although the library is very robust, ToneJS
    is designed for continuous playing or looping on a single timeline. I found
    that my use case of playing short generated timelines caused glitches in
    audio synthesis. Special care was needed to solve these issues.
    {"\n\n"}If I were to add to this project I would add an interactive
    tutorial.
   </Text>
   <ProjectLinks webURL={webURL} codeURL={codeURL} />
   <Line />
   <TechList list={tech} />
  </div>
 </div>
);

const webURL = "https://mcromp.github.io/muzika/";
const codeURL = "https://github.com/mcromp/muzika";
const tech = ["React", "React-Router", "JavaScript (ES6+)", "CSS", "ToneJS"];

export default Muzika;
