import { SvgIcons } from "../Pages/Shared/types";

const projectList: ProjectPage[] = [
 {
  id: "menu",
  title: "Menu Plan",
  description: `hello everyone my name is menu plan, first of all i'd like th thank my father matthew lawrence crompton fro creating me. Thank you father, you have granted me this blessed life that i everso cherrish. I hope that with this sacred gift I may help you get a job. this will be the only way I would feel that my life has been worthy of created`,
  deployedURL: "https://mcromp.github.io/menu-plan/#/",
  repoURL: "https://github.com/mcromp/menu-plan",
  icons: [
   "css3",
   "typescript",
   "jest",
   "react",
   "redux",
   "javascript",
   "mongodb",
   "sass",
   "expressjs",
   "nodejs",
  ],
  posts: [
   {
    heading: "heading1",
    body: "bpdu 1",
   },
   {
    heading: "heading2",
    body: "body2",
   },
  ],
 },
 {
  id: "flag",
  title: "Flag Memory",
  description: "",
  deployedURL: "https://mcromp.github.io/flag-memory/",
  repoURL: "https://github.com/mcromp/flag-memory",
  icons: ["css3", "mongodb", "jest", "tonejs"],
  posts: [
   {
    heading: "heading1",
    body: "flag asdklfj  1",
   },
   {
    heading: "heading2",
    body: "bod3lkjsd sk y2",
   },
  ],
 },
 {
  id: "muz",
  title: "MuziKa!",
  description: "",
  deployedURL: "https://mcromp.github.io/MuziKa/",
  repoURL: "https://github.com/mcromp/MuziKa",
  icons: ["css3", "redux", "jest", "react", "jest"],
  posts: [
   {
    heading: "heading1",
    body: "flag asdklfj  3",
   },
   {
    heading: "heading2",
    body: "bod3lkjsd sk y3",
   },
  ],
 },
];

export interface ProjectPage {
 id: string;
 title: string;
 description: string;
 deployedURL: string;
 repoURL: string;
 icons: SvgIcons[];
 posts?: {
  heading: string;
  body: string;
 }[];
}
export default projectList;
