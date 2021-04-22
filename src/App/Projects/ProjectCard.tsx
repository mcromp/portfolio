import { projectCardType } from "../../Resources/projectCardList";
import ProjectLinks from "./ProjectLinks";
import "./styles/styles.css";

const ProjectCard = ({
 title,
 icon,
 content,
 webURL,
 codeURL,
 tech,
}: projectCardType): JSX.Element => {
 return (
  <div className="proj-card">
   <div className="proj-col-1">
    <h4 className="proj-card__title">{title}</h4>
    <div className="proj-card__icon">
     <img src={icon} alt={`screen shot of ${title}`} />
    </div>
   </div>
   <div className="proj-col-2">
    {content.map((block) => (
     <div key={block.text.substring(0, 12)} className="proj-card__content">
      <h3 className="proj-card__content--header">{block.title}</h3>
      <p className="proj-card__content--text">{block.text}</p>
     </div>
    ))}
    <ProjectLinks webURL={webURL} codeURL={codeURL} />
    <div className="line" />
    <div className="proj-card__tech">
     {tech.map((name) => (
      <span key={name}>{name}</span>
     ))}
    </div>
   </div>
  </div>
 );
};

export default ProjectCard;
