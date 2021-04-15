import { Switch, Route } from "react-router-dom";
import AboutMe from "./Pages/Home/AboutMe/AboutMe";
import Contact from "./Pages/Home/Contact/Contact";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import Landing from "./Pages/Home/Landing/Landing";
import Projects from "./Pages/Home/Projects/Projects";
import ScrollToTop from "./Pages/Shared/ScrollToTop/ScrollToTop";
import "./App.css";

function App() {
 return (
  <div className="App">
   <Header />
   {/* <Switch> */}
   {/* <Route path="/p/:slug">
     <Projects />
    </Route> */}
   <Route path="/">
    <Landing />
    <AboutMe />
    <Projects />
    <Contact />
   </Route>
   {/* </Switch> */}
   <ScrollToTop />
   <Footer />
  </div>
 );
}

export default App;
