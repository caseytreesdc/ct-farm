import React from "react";
import { Link } from "react-router-dom";

import home_thumbnail from "../assets/thumbnails/home.jpg";
import about_thumbnail from "../assets/thumbnails/about.jpg";
import trees_thumbnail from "../assets/thumbnails/trees.jpg";
import sustainability_thumbnail from "../assets/thumbnails/sustainability.jpg";

import "./Gallery.css";

function Gallery() {
  return (
    <div className="Gallery">
      <Link to="/">
        <img className="Gallery__thumbnail" src={home_thumbnail}></img>
      </Link>
      <Link to="/About">
        <img className="Gallery__thumbnail" src={about_thumbnail}></img>
      </Link>
      <Link to="/Trees">
        <img className="Gallery__thumbnail" src={trees_thumbnail}></img>
      </Link>
      <Link to="/Sustainability">
        <img
          className="Gallery__thumbnail"
          src={sustainability_thumbnail}
        ></img>
      </Link>
    </div>
  );
}

export default Gallery;
