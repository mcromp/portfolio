import "./App.css";
import AboutMe from "./Pages/Home/AboutMe/AboutMe";
import Contact from "./Pages/Home/Contact/Contact";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import Landing from "./Pages/Home/Landing/Landing";
import ProjectDash from "./Pages/Home/ProjectDash/ProjectDash";
import { Switch, Route } from "react-router-dom";
import MenuPlan from "./Pages/Projects/MenuPlan";
import ScrollToTop from "./Pages/Shared/ScrollToTop/ScrollToTop";

function App() {
 return (
  <div className="App">
   <Header />
   <Switch>
    <Route path="/p/menu">
     <MenuPlan />
    </Route>
    <Route path="/p/flag">
     <span>flag</span>
    </Route>
    <Route path="/p/muz">
     <span>muz</span>
    </Route>
    <Route path="/">
     <Landing />
     <AboutMe />
     <ProjectDash />
     <Contact />
    </Route>
   </Switch>
   <ScrollToTop />
   <Footer />
  </div>
 );
}

export default App;
