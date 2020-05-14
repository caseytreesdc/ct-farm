import React from "react";
import "./Footer.css";

import footerCtLogo from "../assets/logos/footer-logo.png";
import CTButton from "./CTButton";
import SocialLinks from "./SocialLinks";

const Footer = (props) => {
  class Hyperlink {
    constructor(text, link) {
      this.text = text;
      this.link = link;
    }
  }
  return (
    <div className="Footer">
      <div className="Footer__column">
        <img
          className="Footer__logo"
          alt="Casey Trees Logo"
          src={footerCtLogo}
        ></img>
      </div>
      {[
        [
          new Hyperlink("Water", "https://caseytrees.org/take-action/water/"),
          new Hyperlink(
            "Tree Report Card 2019",
            "https://caseytreesdc.github.io/treereportcard2019/"
          ),
          new Hyperlink(
            "The Leaflet",
            "https://caseytrees.org/resources/blog/"
          ),
        ],
        [
          new Hyperlink(
            "DC Street Trees",
            "https://caseytrees.org/resources-list/d-c-street-trees-map/"
          ),
          new Hyperlink(
            "Cherry Blossoms Map",
            "https://caseytrees.maps.arcgis.com/apps/webappviewer/index.html?id=6b44d537d8fe49eebdc41c9e2c21ee9e"
          ),
          new Hyperlink(
            "Inventory Map",
            "https://caseytrees.org/resources-list/d-c-tree-inventory-map/"
          ),
        ],
      ].map((column) => {
        return (
          <>
            <div className="Footer__column">
              <div></div>
              {column.map((hyperlink) => {
                return (
                  <a className="Footer__anchor" href={hyperlink.link}>
                    <p className="Footer__anchor-text">{hyperlink.text}</p>
                  </a>
                );
              })}
            </div>
          </>
        );
      })}
      <div className="Footer__column">
        <CTButton
          url="https://caseytrees.org/waystogive/evergreen-membership-donation-form/"
          orange
          wide
          text="DONATE"
        ></CTButton>
        <SocialLinks center large></SocialLinks>
      </div>
    </div>
  );
};

export default Footer;
