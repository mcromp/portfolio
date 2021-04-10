import { contactLink } from "./contactLinks";

const ContactLink = ({ href, text }: contactLink): JSX.Element => (
 <a href={href} className="contact__link" target="_blank" rel="noreferrer">
  {text}
 </a>
);

export default ContactLink;
