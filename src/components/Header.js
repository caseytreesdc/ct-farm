import React from "react";
import "./Header.css";
import CTButton from "./CTButton";

import SocialLinks from "./SocialLinks"
import logo from "../assets/logos/header-logo.png";

const Header = () => {
  return (
    <div className="Header">
      <SocialLinks left></SocialLinks>
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
        <div className="Header__buttons">
          <CTButton
            samePage
            blue
            url="https://caseytreesdc.github.io/ct-videos/#thumbnails"
            text="AVAILABILITY"
          ></CTButton>
          <CTButton orange url="https://caseytrees.org/" text="HOME"></CTButton>
          <CTButton
            green
            url="https://caseytrees.org/waystogive/evergreen-membership-donation-form/"
            text="DONATE"
          ></CTButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
