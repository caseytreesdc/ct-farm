import React from "react";
import Logos from "../Logos";
import comingSoon from "../../assets/forPages/comingSoon.jpg";

function Request() {
  return (
    <div className="Request Page">
      <h1 className="Page__title">Request Trees</h1>
      <img
        src={comingSoon}
        className="Page__hero"
        alt="cute flower buds signifying that this section is growing!"
      ></img>
      <p className="Page__p">Coming soon</p>
      <Logos></Logos>
    </div>
  );
}

export default Request;
