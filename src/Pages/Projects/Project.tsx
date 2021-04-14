import SvgIcon from "./SvgIcon";
import { ProjectPage } from "../../Resources/projectList";
import ss from "../../Assets/menu-ss.png";
import ProjectLinks from "./ProjectLinks";
const Project = ({
 id,
 title,
 description,
 icons,
 posts,
 deployedURL,
 repoURL,
}: ProjectPage) => {
 return (
  <div className="project">
   <h1 className="project__title">{title}</h1>
   <p className="project__description">{description}</p>
   <div className="project__icons">
    <h2>Tech used:</h2>
    {icons.map((iconName, i) => (
     <SvgIcon
      title={iconName}
      key={`${iconName}${i}`}
      size={30}
      name={iconName}
     />
    ))}
   </div>
   <ProjectLinks deployedURL={deployedURL} repoURL={repoURL} />
   <img style={{ width: "100%" }} src={ss} alt={`screenshot of ${title}`} />
   {posts?.map((post) => (
    <div key={post.heading}>
     <h3>{post.heading}</h3>
     <p>{post.body}</p>
    </div>
   ))}
  </div>
 );
};

export default Project;
