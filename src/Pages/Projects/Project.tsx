import { ProjectPage } from "../../Resources/projectList";
import ss from "../../Assets/ScreenShots/menu-ss.png";
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

   <span>Tech used:</span>
   <ul>
    {icons.map((iconName, i) => (
     <li key={iconName}>{iconName}</li>
    ))}
   </ul>

   <ProjectLinks deployedURL={deployedURL} repoURL={repoURL} />

   <img style={{ width: "100%" }} src={ss} alt={`screenshot of ${title}`} />

   {posts?.map((post) => (
    <Post key={post.heading} heading={post.heading} body={post.body} />
   ))}
  </div>
 );
};

const Post = ({ heading, body }: { heading: string; body: string }) => (
 <div>
  <h3>{heading}</h3>
  <p>{body}</p>
 </div>
);

export default Project;
