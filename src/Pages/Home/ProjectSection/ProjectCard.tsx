import React from "react";
import { Link } from "react-router-dom";
import "./styles/styles.css";
const ProjectCard: React.FC<any> = ({ title, to, icon, text }) => {
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
