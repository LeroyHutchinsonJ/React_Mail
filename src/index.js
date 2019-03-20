import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

var Addresslabel = () => {
  return (
    <div>
      <div>Full Name</div>
      <div>Address</div>
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<Addresslabel />, rootElement);
