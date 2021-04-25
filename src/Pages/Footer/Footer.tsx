import Emoji from "a11y-react-emoji";
import "./styles/styles.css";

const Footer = (): JSX.Element => {
 return (
  <footer className="footer">
   <small className="footer__text">
    Built with <Emoji symbol="💓" label="love" /> from scratch by Matthew
    Crompton &mdash;{" "}
    <a href="https://github.com/mcromp/portfolio">check out the repo</a>
   </small>
  </footer>
 );
};
export default Footer;
