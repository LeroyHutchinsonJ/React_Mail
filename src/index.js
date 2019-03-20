import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

var Addresslabel = ({ person }) => {
  var { name, address } = { person };

  return (
    <div>
      <div>{person.name}</div>
      <div>{person.address}</div>
    </div>
  );
};

var jack = {
  name: "Jack Frost",
  address: "92 Ice pole Street"
};
const rootElement = document.getElementById("root");
ReactDOM.render(<Addresslabel person={jack} />, rootElement);
