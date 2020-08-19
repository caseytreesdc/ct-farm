import React from "react";
import "./Header.css";

import Nav from "./Nav";
import Breadcrumbs from "./Breadcrumbs"
import "./Breadcrumbs.css";

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
        <Nav
          navType="external"
          navLinks={[
            { text: "ABOUT", path: "https://caseytrees.org/about-us/" },
            { text: "GET INVOLVED", path: "https://caseytrees.org/take-action/water/" },
            { text: "LEARN", path: "https://caseytreesdc.github.io/ct-videos/" },
            { text: "PLANT", path: "https://caseytrees.org/plant/" },
            { text: "GIVE", path: "https://connect.clickandpledge.com/w/Form/212c9142-dfbb-4801-8e11-d0f1b5810fc0" },
          ]}
        ></Nav>
      </div>
      <Breadcrumbs></Breadcrumbs>
    </div>
  );
};

export default Header;
