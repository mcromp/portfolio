import { Route } from "react-router-dom";
import AboutMe from "./App/AboutMe/AboutMe";
import ScrollToTop from "./App/Shared/ScrollToTop/ScrollToTop";
import Contact from "./App/Contact/Contact";
import Landing from "./App/Landing/Landing";
import Projects from "./App/Projects/Projects";
import Footer from "./App/Shared/Footer/Footer";
import Header from "./App/Shared/Header/Header";
import "./App.css";

function App() {
 return (
  <div className="App">
   <Header />
   <Route path="/">
    <Landing />
    <AboutMe />
    <Projects />
    <Contact />
   </Route>
   <ScrollToTop />
   <Footer />
  </div>
 );
}

export default App;
