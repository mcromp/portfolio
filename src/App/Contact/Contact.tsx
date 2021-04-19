import ContactLink from "./ContactLink";
import { contactLinks } from "../../Resources/contactLinks";
import "./styles/styles.css";

const Contact = (): JSX.Element => {
 return (
  <div className="contact">
   <h2 id="contact" className="section_title">
    Contact
   </h2>
   <div className="contact__links">
    {contactLinks.map((link) => (
     <ContactLink key={link.href} href={link.href} text={link.text} />
    ))}
   </div>
  </div>
 );
};

export default Contact;
