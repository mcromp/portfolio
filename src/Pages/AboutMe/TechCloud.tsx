import { Text } from "../../StyleComponents/Section/index";
import { Cloud } from "../../StyleComponents/Cloud";
import Emoji from "a11y-react-emoji";
import { Line } from "../../StyleComponents/Line";

const TechCloud = (): JSX.Element => (
 <div className="tech-cloud">
  <Text>
   I love learning new technologies. {"\n"}Some of the tech I've been using
   recently:
  </Text>
  <Cloud list={aboutTechList} />
  <Line />
  <Text>
   Outside of programming I enjoy art, traveling, guitar, and hiking.
   {"\n"}
   And, of course, coffee <Emoji label="coffee" symbol="☕" />
   ... Lots and lots of coffee.
  </Text>
 </div>
);

const aboutTechList = [
 `React`,
 `Redux`,
 `JavaScript (ES6+)`,
 `TypeScript`,
 `SASS/CSS3`,
 `NodeJS`,
 `Jest`,
 `MongoDB`,
 `GSAP`,
 `JSX A11y`,
 `Figma`,
];

export default TechCloud;
