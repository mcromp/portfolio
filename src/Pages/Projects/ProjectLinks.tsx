import gitHubSvg from "../../Assets/Icons/github.svg";
import openSvg from "../../Assets/Icons/open.svg";

const ProjectLinks = ({ deployedURL, repoURL }: ProjectLinksProps) => {
 return (
  <div className="project__links">
   <a href={repoURL} className="project__link" target="_blank" rel="noreferrer">
    <img src={gitHubSvg} alt="Github Icon" />
    Code
   </a>
   <a
    href={deployedURL}
    className="project__link"
    target="_blank"
    rel="noreferrer"
   >
    <img src={openSvg} alt="view online icon" />
    View
   </a>
  </div>
 );
};

type ProjectLinksProps = {
 deployedURL: string;
 repoURL: string;
};

export default ProjectLinks;
