import React from "react";
import { Link } from "react-router-dom";

import "./Gallery.css";

function Gallery() {
  let thumbsrc1 =
    "https://caseytrees.org/wp-content/uploads/2019/10/eoy-test-farm-video-article.jpg";
  let thumbsrc2 =
    "https://caseytrees.org/wp-content/uploads/2019/09/farm-ctp-19-article.jpg";
  let thumbsrc3 =
    "https://caseytrees.org/wp-content/uploads/2017/07/Farm-article-A.jpg";
  let thumbsrc4 =
    "https://caseytrees.org/wp-content/uploads/2018/07/NightFarming-article.jpg";
  return (
    <div className="Gallery">
      <Link to="/">
        <img className="Gallery__thumbnail" src={thumbsrc1}></img>
      </Link>
      <Link to="/About">
        <img className="Gallery__thumbnail" src={thumbsrc2}></img>
      </Link>
      <Link to="/Trees">
        <img className="Gallery__thumbnail" src={thumbsrc3}></img>
      </Link>
      <Link to="/Sustainability">
        <img className="Gallery__thumbnail" src={thumbsrc4}></img>
      </Link>
    </div>
  );
}

export default Gallery;
