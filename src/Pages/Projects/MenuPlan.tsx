import { SubHeader, Img, TextHeader, Text } from "../../StyleComponents/Block";
import { TechList } from "../../StyleComponents/TechList";
import { Line } from "../../StyleComponents/Line";
import { TextLink } from "../../StyleComponents/TextLink";
import ProjectLinks from "./ProjectLinks";
import pic from "../../Assets/menu-ss.png";

const MenuPlan = (): JSX.Element => (
 <div className="proj-card">
  <div className="proj-col-1">
   <SubHeader>Menu Plan</SubHeader>
   <Img pic={pic} alt={"Menu Plan"} />
  </div>
  <div className="proj-col-2">
   <TextHeader>Intro</TextHeader>
   <Text>
    After completing the{" "}
    <TextLink link="https://fullstackopen.com/">
     University of Helsinki's incredible full stack MOOC
    </TextLink>
    , I was eager to build a project using the MERN stack.
    {"\n\n"}
    In Menu Plan users are able to create, delete, like, or unlike food items
    then add them to a printable 7-day calendar. Food items are able to be
    filtered or searched.
    {"\n\n"}
    This was my first project building an entire backend and database from
    scratch and although I was using several technologies for the first time
    (notably Express, MongoDB, and Mongoose) this stack is quite popular and I
    was thankfully able to find lots of resources.
   </Text>
   <TextHeader>Tech</TextHeader>
   <Text>
    I tested the backend using Jest, Supertest, and for API testing I opted to
    use VS Code’s REST API Client instead of Postman due to the relatively small
    size of the project.
    {"\n\n"}
    The client was built with React and TypeScript, React-Router for page
    routing, and Redux for global state management. For SASS/CSS I used BEM
    architecture. For handling the async state management I used Redux Thunk.
    {"\n\n"}
    Redux with Redux Thunk is very lightweight but when handling fetching logic
    with static type checking the code got hairy quickly. The solution I came up
    with at the time was refactoring the Redux architecture using the Redux
    ducks architecture and creating a custom helper function.
    {"\n\n"}
    If I were to change something about this project today I would instead opt
    to use a library for fetch management like React Query.
   </Text>
   <ProjectLinks webURL={webURL} codeURL={codeURL} />
   <Line />
   <TechList list={tech} />
  </div>
 </div>
);

const webURL = "https://mcromp.github.io/menu-plan/#/";
const codeURL = "https://github.com/mcromp/menu-plan";
const tech = [
 "React",
 "TypeScript",
 "Redux",
 "Jest",
 "Supertest",
 "Express",
 "Mongoose",
 "MongoDB",
 "SASS/SCSS",
 "NodeJS",
];

export default MenuPlan;
