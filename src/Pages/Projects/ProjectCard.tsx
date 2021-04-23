import { projectCardType } from "../../Resources/projectCardList";
import ProjectLinks from "./ProjectLinks";
import * as Block from "../../StyleComponents/Block";
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
    <Block.SubHeader>{title}</Block.SubHeader>
    <Block.Img pic={icon} alt={title} />
   </div>
   <div className="proj-col-2">
    {content.map((block) => (
     <div key={block.text.substring(0, 12)} className="proj-card__content">
      <Block.TextHeader>{block.title}</Block.TextHeader>
      <Block.Text>{block.text}</Block.Text>
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
