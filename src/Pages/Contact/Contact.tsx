import { Mail } from "react-feather";
import { IconLink } from "../../StyleComponents/Block/";
import * as Section from "../../StyleComponents/Section";
import self from "../../Assets/self.jpeg";
import "./styles/styles.css";
const Contact = (): JSX.Element => {
 return (
  <div className="contact" id="contact">
   <Section.Title>Contact</Section.Title>
   <div className="flex">
    <img src={self} alt="phot of matthew crompton" className="self-img" />
    <div className="email">
     <p className="email__text">mcromp.js@gmail.com</p>
     <div className="email__icon">
      <IconLink url="mailto:mcromp.js@gmail.com?subject=Hello!">
       <Mail size={50} color="black" className="block__icon-link" />
      </IconLink>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Contact;
