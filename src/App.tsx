import "./App.css";
import AboutMe from "./Pages/Home/AboutMe/AboutMe";
import Contact from "./Pages/Home/Contact/Contact";
import Footer from "./Pages/Home/Footer/Footer";
import Header from "./Pages/Home/Header/Header";
import Landing from "./Pages/Home/Landing/Landing";
import ProjectDash from "./Pages/Home/ProjectDash/ProjectDash";
import { Switch, Route } from "react-router-dom";
import MenuPlan from "./Pages/Projects/MenuPlan";

function App() {
 return (
  <div className="App">
   <Header />
   <Switch>
    <Route path="/p/">
     <MenuPlan />
    </Route>
    <Route path="/">
     <Landing />
     <AboutMe />
     <ProjectDash />
     <Contact />
    </Route>
   </Switch>
   <Footer />
  </div>
 );
}

export default App;
