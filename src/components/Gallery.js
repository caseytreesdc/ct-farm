import React from "react";
import { Link } from "react-router-dom";

import home_thumbnail from "../assets/thumbnails/home.jpg";
import about_thumbnail from "../assets/thumbnails/about.jpg";
import trees_thumbnail from "../assets/thumbnails/trees.jpg";
import sustainability_thumbnail from "../assets/thumbnails/sustainability.jpg";

import "./Gallery.css";

function Gallery(props) {
  return (
    <div className="Gallery">
      <Link to="/">
        <div className="thumbCap">
          <img
            className="Gallery__thumbnail"
            src={home_thumbnail}
            alt="the gates of the farm"
          ></img>
          <h2 className="Gallery__caption">Home</h2>
        </div>
      </Link>
      <Link to="/About">
        <div className="thumbCap">
          <img
            className="Gallery__thumbnail"
            src={about_thumbnail}
            alt="a bench that might be at the farm"
          ></img>
          <h2 className="Gallery__caption">About</h2>
        </div>
      </Link>
      <Link to="/Trees">
        <div className="thumbCap">
          <img
            className="Gallery__thumbnail"
            src={trees_thumbnail}
            alt="the trees page"
          ></img>
          <h2 className="Gallery__caption">Trees</h2>
        </div>
      </Link>
      <Link to="/Sustainability">
        <div className="thumbCap">
          <img
            className="Gallery__thumbnail"
            src={sustainability_thumbnail}
            alt="night farming"
          ></img>
          <h2 className="Gallery__caption">Sustainability</h2>
        </div>
      </Link>
    </div>
  );
}

export default Gallery;
