import { projectCardType } from "../../../Resources/projectCardList";
import ProjectLinks from "./ProjectLinks";
import "./styles/styles.css";

const ProjectCard = ({
 title,
 icon,
 text,
 webURL,
 codeURL,
 tech,
}: projectCardType): JSX.Element => {
 return (
  <div className="proj-card">
   <div className="proj-card__icon">
    <img src={icon} alt={`screen shot of ${title}`} />
   </div>
   <h4 className="proj-card__title">{title}</h4>
   <p className="proj-card__text">{text}</p>
   <ProjectLinks webURL={webURL} codeURL={codeURL} />
   {tech.map((t) => {
    return <div>{t}</div>;
   })}
  </div>
 );
};

export default ProjectCard;
