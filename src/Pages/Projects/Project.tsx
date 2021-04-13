import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProjectPage } from "../../Resources/projectList";
import projectList from "../../Resources/projectList";
// const path = "../../Assets/Icons/";

const Project = () => {
 const { slug } = useParams<{ slug: string }>();
 const [project, setProject] = useState<ProjectPage>();
 const [isLoading, setIsLoading] = useState(true);

 useEffect(() => {
  window.scrollTo(0, 0);
 }, []);

 useEffect(() => {
  const fetchProject = () => {
   try {
    setIsLoading(true);
    const response = projectList.find((p) => p.id === slug);
    console.log(response);
    setIsLoading(false);
    setProject(response);
   } catch (e) {
    console.log(e);
    setIsLoading(false);
   }
  };
  fetchProject();
 }, [slug]);

 if (isLoading) return <div>Loading...</div>;
 return (
  <div style={{ margin: "500px 0" }}>
   <h1>{project?.title}</h1>
   {project?.icons.map((iconName, i) => (
    <IconImg
     title={iconName}
     key={`${iconName}${i}`}
     size={30}
     name={iconName}
    />
   ))}
   <p>{project?.description}</p>
   {project?.posts?.map((post) => (
    <div key={post.heading}>
     <h3>{post.heading}</h3>
     <p>{post.body}</p>
    </div>
   ))}
  </div>
 );
};

const IconImg = ({
 name,
 title,
 size,
}: {
 name: string;
 title: string;
 size: number;
}) => (
 <>
  <label></label>
  <img
   src={require(`../../Assets/Icons/${name}.svg`).default}
   alt="ok"
   style={{ width: `${size}px` }}
  />
  <span>{title}</span>
 </>
);

export default Project;
