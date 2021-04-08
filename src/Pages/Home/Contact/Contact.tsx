import ContactLink from "./ContactLink";
import { contactLinks } from "./contactLinks";
import "./styles/styles.css";

const Contact = () => {
 return (
  <div id="contact" className="contact">
   <h2 className="section_title">Contact</h2>
   <ul>
    {contactLinks.map((link) => (
     <li>
      <ContactLink href={link.href} text={link.text} />
     </li>
    ))}
   </ul>
  </div>
 );
};

export default Contact;
