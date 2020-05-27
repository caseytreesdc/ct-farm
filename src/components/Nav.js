import React from "react";

import "./Nav.css";

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
      return (
        <div className="Nav__item">
          <a href={item.url}>{item.text}</a>
        </div>
      );
    } else {
      return (
        <div className="Nav__item">
          <a href={item.url}>{item.text}</a>
          <div>/</div>
        </div>
      );
    }
  });
  return <div className="Nav">{Nav}</div>;
}

export default Nav;
