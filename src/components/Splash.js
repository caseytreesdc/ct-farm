import React from "react";
import splashVideo from "../assets/FarmHeroClip_v2.mp4";

import "./Splash.css";
import splashMobileBackground from "../assets/splash-mobile__background.jpg";

function Splash() {
  return (
    <div className="Splash">
      <div
        className="Splash__mobile"
        style={{ backgroundImage: `url(${splashMobileBackground})` }}
      >
        <div className="Splash__title-box">
          <p className="Splash__title dcsn">
            DC STATE NURSERY <i>at</i>
          </p>
          <p className="Splash__title ctFarm">CASEY TREE FARM</p>
        </div>
      </div>
      {/* <div className="Splash__overlay">
        <div className="Splash__title-box">
          <p className="Splash__title dcsn">
            DC STATE NURSERY <i>at</i>
          </p>
          <p className="Splash__title ctFarm">CASEY TREE FARM</p>
        </div>
      </div> */}
      <div className="Splash__Video-box">
        <video loop autoPlay muted className="Splash__Video">
          <source src={splashVideo} type="video/mp4"></source>
        </video>
      </div>
    </div>
  );
}

export default Splash;
