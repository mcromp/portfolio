import Emoji from "a11y-react-emoji";
import React from "react";
import { Link } from "react-router-dom";
import "./styles/styles.css";

const ProjectCard: React.FC<any> = ({ title, to, icon, text }) => {
 return (
  <Link className="proj-card" to={`/p/${to}`}>
   <h4 className="proj-card__title">{title}</h4>
   <ProjectIcon icon={icon} />
   <p className="proj-card__text">{text}</p>
  </Link>
 );
};

const ProjectIcon = ({ icon }: any) => {
 if (icon.emoji) {
  return (
   <Emoji className="proj-card__icon" symbol={icon.emoji} label={icon.label} />
  );
 }
 return <p></p>;
};

export default ProjectCard;
