import { contactLink } from "./contactLinks";

const ContactLink: React.FC<contactLink> = ({ href, text }) => (
 <a href={href} target="_blank" rel="noreferrer">
  {text}
 </a>
);

export default ContactLink;
