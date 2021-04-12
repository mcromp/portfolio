import { Link } from "react-router-dom";
import { projectCardType } from "../../../Resources/projectCardList";
import "./styles/styles.css";

const ProjectCard = ({
 title,
 to,
 icon,
 text,
}: projectCardType): JSX.Element => {
 return (
  <Link className="proj-card" to={`/p/${to}`}>
   <div className="proj-card__icon">
    <img src={icon} alt={`screen shot of ${title}`} />
   </div>
   <h4 className="proj-card__title">{title}</h4>
   <p className="proj-card__text">{text}</p>
  </Link>
 );
};

export default ProjectCard;
