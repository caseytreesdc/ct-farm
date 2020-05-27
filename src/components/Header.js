import React from "react";
import "./Header.css";
// import Nav from "./Nav";
import logo from "../assets/logos/SVG/header-logo.svg";

function Nav() {
  class NavLink {
    constructor(text, url) {
      this.text = text.toUpperCase();
      this.url = url;
    }
  }
  let navLinks = [
    new NavLink("about", "https://www.google.com"),
    new NavLink("get involved", "https://www.google.com"),
    new NavLink("learn", "https://www.google.com"),
    new NavLink("plant", "https://www.google.com"),
    new NavLink("give", "https://www.google.com"),
  ];

  let Nav = navLinks.map((item, index) => {
    if (index == navLinks.length - 1) {
      return <div><a href={item.url}>{item.text}</a></div>;
    } else {
      return <div><a href={item.url}>{item.text}</a><div>/</div></div>;
    }
  });
  return <div>{Nav}</div>;
}

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
        {Nav()}
      </div>
    </div>
  );
};

export default Header;
