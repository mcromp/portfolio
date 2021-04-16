import flag from "../Assets/ScreenShots/flag-ss.png";
import muz from "../Assets/ScreenShots/muz-ss.png";
import menu from "../Assets/ScreenShots/menu-ss.png";

export const projectCardList: projectCardType[] = [
 {
  to: "menu",
  title: "Menu Plan",
  icon: menu,
  text:
   "A CRUD customizable food calendar, front end and back end built using MERN stack .",
  webURL: "https://mcromp.github.io/menu-plan/#/",
  codeURL: "https://github.com/mcromp/menu-plan",
  tech: [
   "TypeScript",
   "React",
   "Redux",
   "NodeJS",
   "Jest",
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
  text:
   "Musical ear-training web app, the user must select correct tone generated and synthesised with ToneJS.",
  webURL: "https://mcromp.github.io/muzika/#/",
  codeURL: "https://github.com/mcromp/muzika",
  tech: ["React", "React-Router", "JavaScript (ES6+)", "CSS", "ToneJS"],
 },

 {
  to: "flag",
  title: "Flag Memeory",
  icon: flag,
  text:
   "A memory game application built using both MediaWiki and REST Countries API.",
  webURL: "https://mcromp.github.io/flag-memory/",
  codeURL: "https://github.com/mcromp/flag-memory",
  tech: ["React", "JavaScript (ES6+)", "CSS"],
 },
];

export type projectCardType = {
 to: string;
 title: string;
 icon: string;
 text: string;
 webURL: string;
 codeURL: string;
 tech: string[];
};
