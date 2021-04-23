import { Mail } from "react-feather";
import { IconLink } from "../../StyleComponents/Block/";
import "./styles/styles.css";

const Contact = (): JSX.Element => {
 return (
  <div className="contact">
   <h2 id="contact" className="section_title">
    Contact
   </h2>
   <div>
    <p className="email-text">mcromp.js@gmail.com</p>
    <div className="email-icon">
     <IconLink url="mailto:mcromp.js@gmail.com?subject=Hello!">
      <Mail size={50} color="black" className="block__icon-link" />
     </IconLink>
    </div>
   </div>
  </div>
 );
};

export default Contact;
