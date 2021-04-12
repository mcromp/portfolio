import { useEffect } from "react";
import css3 from "../../Assets/Icons/css3.svg";
const path = "../../Assets/Icons/";

const icons = ["css3", "expressjs", "jest", "redux", "sass", "tonejs"];

const MenuPlan = () => {
 useEffect(() => {
  window.scrollTo(0, 0);
 }, []);

 return (
  <div>
   {icons.map((name) => {
    return (
     <div>
      <img
       key={name}
       src={require(`../../Assets/Icons/${name}.svg`).default}
       alt="ok"
       height="50px"
      />
      <h1>{name}</h1>
     </div>
    );
   })}
  </div>
 );
};

export default MenuPlan;
