import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

var Addresslabel = ({ toPerson, fromPerson }) => {
  var { name, address, location } = toPerson;
  var { name, address, location } = fromPerson;
  var stampUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBP3LvNOuQCDX8v3SuK6SpDLOUroRV3B-e0l-i-QemJe2wG6gE";

  return (
    <div className="Letter">
      <div className="ToAddress">
        <div>{fromPerson.name}</div>
        <div>{fromPerson.address}</div>
        <div>{fromPerson.location}</div>
      </div>
      <div className="FromAddress">
        <div>{toPerson.name}</div>
        <div>{toPerson.address}</div>
        <div>{toPerson.location}</div>
      </div>
      <div className="StampImage">
        <img className="ImageStuff" src={stampUrl} />
      </div>
    </div>
  );
};

var jack = {
  name: "Jack Frost",
  address: "92 Ice pole Street",
  location: "Antartica, AN 112213"
};
var poseidon = {
  name: "Poseidon Greeka",
  address: "333 Ocean Avenue",
  location: "Atlantic Ocean, O2 229912"
};
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Addresslabel toPerson={jack} fromPerson={poseidon} />,
  rootElement
);
