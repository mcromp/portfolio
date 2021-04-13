import { SvgIcons } from "../Pages/Shared/types";

const projectList: ProjectPage[] = [
 {
  id: "menu",
  title: "Munu Plan",
  description: "",
  deployedURL: "https://mcromp.github.io/menu-plan/#/",
  repoURL: "https://github.com/mcromp/menu-plan",
  icons: ["css3", "typescript", "jest"],
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
