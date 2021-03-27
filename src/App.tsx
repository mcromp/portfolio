import "./App.css";
import AboutMe from "./Pages/Home/AboutMe/AboutMe";
import Contact from "./Pages/Home/Contact/Contact";
import Footer from "./Pages/Home/Footer/Footer";
import Header from "./Pages/Home/Header/Header";
import Landing from "./Pages/Home/Landing/Landing";
import ProjectDash from "./Pages/Home/ProjectDash/ProjectDash";

function App() {
 return (
  <div className="App">
   <Header />
   <Landing />
   <AboutMe />
   <ProjectDash />
   <Contact />
   <Footer />
  </div>
 );
}

export default App;
