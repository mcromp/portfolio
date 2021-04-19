import Welcome from "./Welcome";
import "./styles/styles.css";
// import Head3DModel from "./Head3D";

const Landing = (): JSX.Element => {
 return (
  <div className="landing">
   <Welcome />
   {/* <Head3DModel /> */}
  </div>
 );
};

export default Landing;