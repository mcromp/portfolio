// import { Route } from "react-router-dom";
import AboutMe from "./Pages/AboutMe/AboutMe";
import ScrollToTop from "./Pages/ScrollToTop/ScrollToTop";
import Contact from "./Pages/Contact/Contact";
import Landing from "./Pages/Landing/Landing";
import Projects from "./Pages/Projects/Projects";
import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/Header/Header";
// import HashLinkObserver from "react-hash-link";
import { useEffect } from "react";
import { gsap } from "gsap";
import "./App.css";

function App() {
 useEffect(() => {
  gsap.to(".App", { css: { visibility: "visible" } });
 }, []);
 return (
  <div className="App" style={{ visibility: "hidden" }}>
   <Header />
   <div>
    <Landing />
    <AboutMe />
    <Projects />
    <Contact />
    {/* <HashLinkObserver smoothScroll={false} /> */}
   </div>
   <ScrollToTop />
   <Footer />
  </div>
 );
}

export default App;
