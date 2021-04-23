import { Route } from "react-router-dom";
import AboutMe from "./Pages/AboutMe/AboutMe";
import ScrollToTop from "./Pages/ScrollToTop/ScrollToTop";
import Contact from "./Pages/Contact/Contact";
import Landing from "./Pages/Landing/Landing";
import Projects from "./Pages/Projects/Projects";
import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/Header/Header";
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
