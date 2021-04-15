import flag from "../Assets/ScreenShots/flag-ss.png";
import muz from "../Assets/ScreenShots/muz-ss.png";
import menu from "../Assets/ScreenShots/menu-ss.png";

export const projectCardList: projectCardType[] = [
 {
  to: "menu",
  title: "Menu Plan",
  icon: menu,
  text:
   "Web application that generates a printable 7-day food calendar, letting users select food items from a customizable list of food.",
  webURL: "https://mcromp.github.io/menu-plan/#/",
  codeURL: "https://github.com/mcromp/menu-plan",
 },
 {
  to: "muz",
  title: "MuziKa!",
  icon: muz,
  text:
   "Musical ear-training web application in which users guess the pitch of a musical note after a chord progression is played.",
  webURL: "https://mcromp.github.io/muzika/#/",
  codeURL: "https://github.com/mcromp/muzika",
 },

 {
  to: "flag",
  title: "Flag Memeory",
  icon: flag,
  text:
   "A memory game web application that reveals the wikipedia summary of a country when its flags are correctly matched.",
  webURL: "https://mcromp.github.io/flag-memory/",
  codeURL: "https://github.com/mcromp/flag-memory",
 },
];

export type projectCardType = {
 to: string;
 title: string;
 icon: string;
 text: string;
 webURL: string;
 codeURL: string;
};
