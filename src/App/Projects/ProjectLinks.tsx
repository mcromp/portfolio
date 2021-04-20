import { ExternalLink, GitHub } from "react-feather";

const ProjectLinks = ({ webURL, codeURL }: ProjectLinksProps) => {
 return (
  <div className="card-links">
   <a
    href={webURL}
    className="card-links__link"
    target="_blank"
    rel="noreferrer"
   >
    <ExternalLink />
   </a>
   <a
    href={codeURL}
    className="card-links__link"
    target="_blank"
    rel="noreferrer"
   >
    <GitHub />
   </a>
  </div>
 );
};

type ProjectLinksProps = {
 webURL: string;
 codeURL: string;
};

export default ProjectLinks;
