import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="Nav">
      <div className="Nav__anchor-box">
        <a className="Nav__anchor" href="https://www.google.com">
          <p  className="Nav__anchor-text">ABOUT</p>
        </a>
      </div>
      <div className="Nav__slash">{""}</div>
      <div className="Nav__anchor-box">
        <a className="Nav__anchor" href="https://www.google.com">
          <p  className="Nav__anchor-text">GET INVOLVED</p>
        </a>
      </div>
      <div className="Nav__slash">{""}</div>
      <div className="Nav__anchor-box">
        <a className="Nav__anchor" href="https://www.google.com">
          <p  className="Nav__anchor-text">GIVE</p>
        </a>
      </div>
    </div>
  );
}

export default Nav;
