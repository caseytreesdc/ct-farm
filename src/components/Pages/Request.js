import React from "react";
import "./Request.css"

function Request() {
  return (
    <div className="Request Page">
      <div className="Request__iframe-container">
        <p className="Request__formTitle">CASEY TREE FARM REQUEST</p>
        <iframe
          className="Request__iframe"
          title="Form or Video?"
          src="https://tfaforms.com/4830425"
          height="1450"
          width="800"
          frameborder="0"
          scrolling="no"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Request;
