import React from "react";
import "./App.css";
import "./components/Splash.css";
import "./components/Video.css";
import splashVideo from "./assets/WebHeroClip.mp4";

function Splash() {
  return (
    <div className="Splash">
      <div className="Video-box">
        <video className="Video" loop autoPlay>
          <source src={splashVideo} type="video/mp4"></source>
        </video>
      </div>
    </div>
  );
}

function Gallery() {
  let thumbsrc1 =
    "https://caseytrees.org/wp-content/uploads/2019/10/eoy-test-farm-video-article.jpg";
  let thumbsrc2 =
    "https://caseytrees.org/wp-content/uploads/2019/09/farm-ctp-19-article.jpg";
  let thumbsrc3 =
    "https://caseytrees.org/wp-content/uploads/2018/07/NightFarming-article.jpg";
  return (
    <div className="Gallery">
      <img className="Gallery__thumbnail" src={thumbsrc1}></img>
      <img className="Gallery__thumbnail" src={thumbsrc2}></img>
      <img className="Gallery__thumbnail" src={thumbsrc3}></img>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <Splash></Splash>
      <Gallery></Gallery>
    </div>
  );
}

export default App;
