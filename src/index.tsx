import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import { HashRouter } from "react-router-dom";
import MenuPlan from "./Pages/Projects/MenuPlan";

ReactDOM.render(
 <React.StrictMode>
  <HashRouter>
   <MenuPlan />
  </HashRouter>
 </React.StrictMode>,
 document.getElementById("root"),
);
