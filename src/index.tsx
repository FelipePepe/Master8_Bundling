import React from "react";
import ReactDOM from "react-dom";

import { HelloWorld } from "./helloWorld";
import { LogoIMG } from "./logoIMG";

const classes = require("./styles.scss");

ReactDOM.render(
  <div className={classes.centerItems}>
    <LogoIMG />
    <HelloWorld />
  </div>,
  document.getElementById("root")
);
