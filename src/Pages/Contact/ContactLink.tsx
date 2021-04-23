import { contactLinkType } from "./contactLinks";

const ContactLink = ({ href, text }: contactLinkType): JSX.Element => (
 <a href={href} className="contact__link" target="_blank" rel="noreferrer">
  {text}
 </a>
);

export default ContactLink;
