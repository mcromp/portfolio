import flag from "../Assets/ScreenShots/flag-ss.png";
import muz from "../Assets/ScreenShots/muz-ss.png";
import menu from "../Assets/ScreenShots/menu-ss.png";

export const projectCardList: projectCardType[] = [
 {
  to: "menu",
  title: "Munu Plan",
  icon: menu,
  text:
   "Web application that generates a printable 7-day food calendar, letting users select food items from a customizable list of food.",
 },
 {
  to: "muz",
  title: "MuziKa!",
  icon: muz,
  text:
   "Musical ear-training web application in which users guess the pitch of a musical note after a chord progression is played.",
 },
 {
  to: "flag",
  title: "Flag Memeory",
  icon: flag,
  text:
   "A memory game web application that reveals the wikipedia summary of a country when its flags are correctly matched.",
 },
];

export type projectCardType = {
 to: string;
 title: string;
 icon: string;
 text: string;
};
