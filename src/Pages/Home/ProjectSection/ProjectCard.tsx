import React from "react";
import { Link } from "react-router-dom";
import "./styles/styles.css";

const ProjectCard: React.FC<any> = ({ title, to, img, text }) => {
 return (
  <Link className="proj-card" to={`/p/${to}`}>
   <h4 className="proj-card__title">{title}</h4>
   <img
    className="proj-card__bkgd-img"
    alt={`screenshot of ${title}`}
    src={img}
   />
   <p className="proj-card__text">{text}</p>
  </Link>
 );
};

export default ProjectCard;
