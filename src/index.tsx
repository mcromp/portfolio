import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import { HashRouter } from "react-router-dom";
// import Project from "./Pages/Projects/Project";
import AboutMe from "./App/AboutMe/AboutMe";

ReactDOM.render(
 <React.StrictMode>
  <HashRouter>
   <AboutMe />
  </HashRouter>
 </React.StrictMode>,
 document.getElementById("root"),
);
