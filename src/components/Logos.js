import React from "react";

import "./Logos.css";

import greyDSCNLogo from "../assets/logos/grey-dcsn-logo.png";
import greyCTLogo from "../assets/logos/grey-ct-logo.png";

function Logos() {
  return (
    <div className="Logos-container">
      <img
        className="Logos"
        src={greyCTLogo}
        alt="Casey Trees Logo"
      ></img>
      <img
        className="Logos"
        src={greyDSCNLogo}
        alt="D.C. State Nursery Logo"
      ></img>
    </div>
  );
}

export default Logos;
