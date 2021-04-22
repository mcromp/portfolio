import "./styles/styles.css";

const Footer = (): JSX.Element => {
 return (
  <footer className="footer">
   <small className="footer__text">
    Designed and built from scratch by Matthew Crompton &mdash;{" "}
    <a href="https://github.com/mcromp/portfolio">
     check out the repo to learn more!
    </a>
   </small>
  </footer>
 );
};
export default Footer;
