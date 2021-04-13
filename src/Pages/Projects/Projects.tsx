import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProjectPage } from "../../Resources/projectList";
import projectList from "../../Resources/projectList";
import Project from "./Project";

const Projects = () => {
 const { slug } = useParams<{ slug: string }>();
 const [projectData, setProjectData] = useState<ProjectPage | null>(null);
 const [isLoading, setIsLoading] = useState(true);

 //inital scroll to top when page is loaded
 useEffect(() => {
  window.scrollTo(0, 0);
 }, []);

 useEffect(() => {
  const fetchProject = () => {
   try {
    setIsLoading(true);
    const response = projectList.find((p) => p.id === slug);
    if (response) setProjectData(response);
    setIsLoading(false);
   } catch (e) {
    console.log(e);
    setIsLoading(false);
   }
  };
  fetchProject();
 }, [slug]);

 if (isLoading) return <div>Loading...</div>;
 if (projectData)
  return (
   <Project
    id={projectData.id}
    title={projectData.title}
    description={projectData.description}
    icons={projectData.icons}
    repoURL={projectData.repoURL}
    deployedURL={projectData.deployedURL}
    posts={projectData.posts}
   />
  );
 return <div>Error...</div>;
};

export default Projects;
