//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import { Home } from "./component/home.js";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
