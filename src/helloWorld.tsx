import React from "react";

const classes = require("./HelloWorldStyles.scss");

import { getEntorno } from "./entorno";

export const HelloWorld = () => {
  return (
    <div className={classes.centerItems}>
      <h1>
        <span className={classes.resultBackground}>Hello World</span>
      </h1>
      <div className={classes.content}></div>
      <span className={classes.environment}>
        Estamos en el entorno de {getEntorno()}
      </span>
    </div>
  );
};
