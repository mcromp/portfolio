import "./styles/styles.css";

const Footer = (): JSX.Element => {
 return (
  <footer className="footer">
   <small className="footer__text">
    Designed and built by Matthew Crompton &mdash;{" "}
    <a href="http://google.com">check out the repo!</a>
   </small>
  </footer>
 );
};
export default Footer;
