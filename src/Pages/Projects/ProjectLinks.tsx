import { ExternalLink, GitHub } from "react-feather";
import { IconLink } from "../../StyleComponents/Block";

const iconsSize = 40;

const ProjectLinks = ({ webURL, codeURL }: ProjectLinksProps) => {
 return (
  <div className="card-links">
   <IconLink url={webURL}>
    <ExternalLink size={iconsSize} color="black" />
   </IconLink>
   <IconLink url={codeURL}>
    <GitHub size={iconsSize} color="black" />
   </IconLink>
  </div>
 );
};

type ProjectLinksProps = {
 webURL: string;
 codeURL: string;
};

export default ProjectLinks;
