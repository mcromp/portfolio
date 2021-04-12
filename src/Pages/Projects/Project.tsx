import { useEffect } from "react";
import { useParams } from "react-router-dom";
import css3 from "../../Assets/Icons/css3.svg";
const path = "../../Assets/Icons/";

const Project = () => {
 //@ts-ignore
 let { id } = useParams();
 useEffect(() => {
  console.log(id);
  window.scrollTo(0, 0);
 }, [id]);

 return (
  <div>
   {/* {icons.map((name) => {
    return (
     <div>
      <img
       key={name}
       src={require(`../../Assets/Icons/${name}.svg`).default}
       alt="ok"
       style={{ width: "30px" }}
      />
      <h1>{name}</h1>
     </div>
    );
   })} */}
  </div>
 );
};

export default Project;
