import gitHubSvg from "../../Assets/Icons/github.svg";
import openSvg from "../../Assets/Icons/open.svg";

const ProjectLinks = ({ webURL, codeURL }: ProjectLinksProps) => {
 return (
  <div className="card-links">
   <a
    href={webURL}
    className="card-links__link"
    target="_blank"
    rel="noreferrer"
   >
    <img src={openSvg} alt="view online icon" />
    View
   </a>
   <a
    href={codeURL}
    className="card-links__link"
    target="_blank"
    rel="noreferrer"
   >
    <img src={gitHubSvg} alt="Github Icon" />
    Code
   </a>
  </div>
 );
};

type ProjectLinksProps = {
 webURL: string;
 codeURL: string;
};

export default ProjectLinks;
