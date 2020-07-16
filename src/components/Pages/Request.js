import React from "react";
import "./Request.css";

function Request() {
  return (
    <div className="Request Page">
      <div className="Request__iframe-container">
        <p className="Request__formTitle">CASEY TREE FARM REQUEST</p>
        <iframe
          className="Request__iframe"
          title="Form or Video?"
          src="https://tfaforms.com/4830425"
          height="1470"
          width="100%"
          frameborder="0"
          scrolling="no"
          allowFullScreen
        ></iframe>
      </div>
      <div className="Request__iframe-container-mobile">
        <p className="Request__formTitle">CASEY TREE FARM REQUEST</p>
        <iframe
          className="Request__iframe-mobile"
          title="Form or Video?"
          src="https://tfaforms.com/4830425"
          height="2300"
          width="100%"
          frameborder="0"
          scrolling="no"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Request;
