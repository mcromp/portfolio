import ContactLink from "./ContactLink";
import { contactLinks } from "./contactLinks";
import "./styles/styles.css";

const Contact = () => {
 return (
  <div id="contact" className="contact">
   <h2 className="section_title">Contact</h2>
   {contactLinks.map((link) => (
    <ContactLink key={link.href} href={link.href} text={link.text} />
   ))}
  </div>
 );
};

export default Contact;
