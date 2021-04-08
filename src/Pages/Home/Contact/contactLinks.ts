export const contactLinks: contactLink[] = [
 {
  href: "mailto:mcromp.js@gmail.com?subject=Hello!",
  text: "email",
 },
 {
  href: "https://github.com/mcromp",
  text: "github",
 },
 {
  href: "https://www.linkedin.com/in/mcromp/",
  text: "linkedin",
 },
];

export type contactLink = {
 href: string;
 text: string;
};
