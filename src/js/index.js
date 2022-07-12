//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import Home from "./component/home.jsx";
import Player from "./component/Player.js"

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
