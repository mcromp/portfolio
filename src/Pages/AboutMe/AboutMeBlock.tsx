import ComputerGraphic from "./ComputerGraphic";
import { SubHeader, Block, Text } from "../../StyleComponents/Block";

const AboutMeBlock = (): JSX.Element => (
 <Block styleAdd={"block-grid"}>
  <div className="col-1">
   <SubHeader>Hey, thanks for stopping by!</SubHeader>
   <Text>
    If I had to describe myself in a word, I’d say <i>“maker”</i>.{"\n"}I have a
    natural motivation to learn, grow, tinker, and create.
    {"\n\n"}
    Whether I’m fixing up an old motorcycle, designing 3D models, or building a
    guitar fuzzbox, I love understanding a system, seeing how the pieces
    connect, and creating something new.
    {"\n\n"}
    As for programming...
    {"\n"}I first fell in love as a kid making fantasy text adventures with
    QBasic using the family’s Windows 95 computer.
    {"\n\n"}
    The type of work I do nowadays is a far cry from the nested IF-statements
    and GOTO-branches I used then, but the magic of transforming code into
    something engaging, useful, and delightful stays the same.
    {"\n\n"}
    Cut to the present day, I’ve completed multiple frontend courses online and
    successfully deployed several web apps—none of which are set in a fantasy
    dungeon, unfortunately!
    {"\n\n"}I am looking for an opportunity to put my passion and creativity to
    work here in Berlin.
    {"\n\n"}
    Would you like to work together?
   </Text>
  </div>
  <div className="col-2">
   <ComputerGraphic />
  </div>
 </Block>
);

export default AboutMeBlock;
