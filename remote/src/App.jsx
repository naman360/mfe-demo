import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Counter from "./Counter";

const App = () => {
  return <Counter />;
};
ReactDOM.render(<App />, document.getElementById("app"));
