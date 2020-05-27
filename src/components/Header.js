import React from "react";
import "./Header.css";

import Nav from "./Nav";
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
            { text: "GIVE", path: "https://caseytrees.org/waystogive/evergreen-membership-donation-form/" },
          ]}
        ></Nav>
      </div>
      <div className="Breadcrumbs">plant > from the farm</div>
    </div>
  );
};

export default Header;
