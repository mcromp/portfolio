import SvgIcon from "./SvgIcon";
import { ProjectPage } from "../../Resources/projectList";
import { SvgIcons } from "../Shared/types";

const Project = ({
 title,
 description,
 icons,
 posts,
 deployedURL,
 repoURL,
}: ProjectPage) => {
 return (
  <div>
   <h1>{title}</h1>

   {icons.map((iconName, i) => (
    <SvgIcon
     title={iconName}
     key={`${iconName}${i}`}
     size={30}
     name={iconName}
    />
   ))}
   <p>{description}</p>
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
