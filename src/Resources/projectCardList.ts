import flag from "../Assets/ScreenShots/flag-ss.png";
import muz from "../Assets/ScreenShots/muz-ss.png";
import menu from "../Assets/ScreenShots/menu-ss.png";

export const projectCardList: projectCardType[] = [
 {
  to: "menu",
  title: "Menu Plan",
  icon: menu,
  content: [
   {
    title: "Intro:",
    text: `After completing the University of Helsinki's incredible full stack MOOC, I was eager to build a project using the MERN stack.

In Menu Plan users are able to create, delete, like, or unlike food items then add them to a printable 7-day calendar. Food items are able to be filtered or searched.

This was my first project building an entire backend and database from scratch and although I was using several technologies for the first time (notably Express, MongoDB, and Mongoose) this stack is quite popular and I was thankfully able to find lots of resources.`,
   },
   {
    title: "Tech:",
    text: `I tested the backend using Jest, Supertest, and for API testing I opted to use VS Code’s REST API Client instead of Postman due to the relatively small size of the project. 

The client was built with React and TypeScript, React-Router for page routing, and Redux for global state management. For SASS/CSS I used BEM architecture.

For handling the async state management I used Redux Thunk. Redux with Redux Thunk is very lightweight but when handling fetching logic with static type checking the code got hairy quickly. The solution I came up with at the time was refactoring the Redux architecture using the Redux ducks architecture and creating a custom helper function. If I were to change something about this project today I would instead opt to use a library for fetch management like React Query.`,
   },
  ],
  webURL: "https://mcromp.github.io/menu-plan/#/",
  codeURL: "https://github.com/mcromp/menu-plan",
  tech: [
   "TypeScript",
   "React",
   "Redux",
   "NodeJS",
   "Jest",
   "Supertest",
   "Express",
   "Mongoose",
   "MongoDB",
   "SASS/SCSS",
  ],
 },
 {
  to: "muz",
  title: "MuziKa!",
  icon: muz,
  content: [
   {
    title: "Intro:",
    text: `One of the cool things about web dev is how it’s the intersection of so many interesting technologies. For example Web Audio API. Synthesizing and manipulating audio directly from the user’s browser is pretty neat I think. And being a hobbyist musician, I was drawn to creating a musical application for my aural skills.

With MuziKa the user plays a chord progression and a ‘mystery’ note generated in a random musical key. After hearing this the user must guess the mystery note’s relation to the root of the key. 
The user is able to replay the chord progression entirely, play any of the individual chords within the progression, replay the mystery note, or change to a new random key with a new mystery note. A score is kept as a percentage of correct vs incorrect guesses in the top right corner.`,
   },
   {
    title: "Tech:",
    text: `I knew I wanted to create this project with synthetic tones generated using Web Audio API, but the amount of time needed to utilize Web Audio API directly was outside the scope of the project. So I began searching for a React library that utilized the API.

I choose ToneJS because of the community, well written docs, and focus on tone synthesis.
Although the library is very robust, ToneJS is designed for continuous playing or looping on a single timeline. I found that my use case of playing short generated timelines caused glitches in audio synthesis. Special care was needed to solve these issues.

If I were to add to this project I would add an interactive tutorial.`,
   },
  ],
  webURL: "https://mcromp.github.io/muzika/#/",
  codeURL: "https://github.com/mcromp/muzika",
  tech: ["React", "React-Router", "JavaScript (ES6+)", "CSS", "ToneJS"],
 },

 {
  to: "flag",
  title: "Flag Memeory",
  icon: flag,
  content: [
   {
    title: "Intro:",
    text: `I created this project because I wanted to create a unique application to better understand the React and API data fetching.

In Flag Memory the player selects a difficulty setting to start. They are presented with a board of flipped over cards. The player flips over two cards at a time, if the two cards contain a matching flag then their wikipedia summary is revealed. 
`,
   },
   {
    title: "Tech:",
    text: `The flags are randomly selected from the REST Countries API, the summary is obtained from MediaWiki API.`,
   },
  ],
  webURL: "https://mcromp.github.io/flag-memory/",
  codeURL: "https://github.com/mcromp/flag-memory",
  tech: ["React", "JavaScript (ES6+)", "CSS"],
 },
];

export type projectCardType = {
 to: string;
 title: string;
 icon: string;
 content: { title: string; text: string }[];
 webURL: string;
 codeURL: string;
 tech: string[];
};
