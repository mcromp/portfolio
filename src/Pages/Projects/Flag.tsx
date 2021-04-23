import { SubHeader, Img, TextHeader, Text } from "../../StyleComponents/Block";
import { TechList } from "../../StyleComponents/TechList";
import { Line } from "../../StyleComponents/Line";
import { TextLink } from "../../StyleComponents/TextLink";
import ProjectLinks from "./ProjectLinks";
import pic from "../../Assets/flag-ss.png";

const Flag = (): JSX.Element => (
 <div className="proj-card">
  <div className="proj-col-1">
   <SubHeader>Flag Memory</SubHeader>
   <Img pic={pic} alt={"flag"} />
  </div>
  <div className="proj-col-2">
   <TextHeader>Intro</TextHeader>
   <Text>
    I created this project because I wanted to create a unique application to
    better understand the React and REST API data fetching.
    {"\n\n"}
    In Flag Memory the player selects a difficulty setting to start. They are
    presented with a board of flipped over cards. The player flips over two
    cards at a time, if the two cards contain a matching flag then their
    wikipedia summary is revealed.
   </Text>
   <TextHeader>Tech</TextHeader>
   <Text>
    The flags are randomly selected from the{" "}
    <TextLink link="https://restcountries.eu/">REST Countries API</TextLink>,
    the summary is obtained from the{" "}
    <TextLink link="https://www.mediawiki.org/wiki/API:Main_page">
     MediaWiki API
    </TextLink>
    .
   </Text>
   <ProjectLinks webURL={webURL} codeURL={codeURL} />
   <Line />
   <TechList list={tech} />
  </div>
 </div>
);

const webURL = "https://mcromp.github.io/flag-memory/";
const codeURL = "https://github.com/mcromp/flag-memory";
const tech = ["React", "JavaScript (ES6+)", "CSS"];

export default Flag;
