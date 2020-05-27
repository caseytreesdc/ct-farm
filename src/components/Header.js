import React from "react";
import "./Header.css";
import Nav from "./Nav";
import logo from "../assets/logos/SVG/header-logo.svg";

const Header = () => {
  return (
    <div className="Header">
      <div className="Header__main">
        <a
          className="Header__logo-container"
          href="https://caseytrees.org/"
          target="__blank"
        >
          <img
            alt="Casey Trees' logo"
            src={logo}
            className="Header__logo"
          ></img>
        </a>
        <Nav></Nav>
      </div>
    </div>
  );
};

export default Header;
