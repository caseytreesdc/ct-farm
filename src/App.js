import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import "./App.css";
import "./components/Splash.css";
import "./components/Video.css";
import "./components/Gallery.css";
import "./components/Page.css";

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

function About() {
  return (
    <div className="About Page">
      <h1>This is the About and History page</h1>
    </div>
  );
}

function Trees() {
  return (
    <div className="Trees Page">
      <h1>This is the Trees page</h1>
    </div>
  );
}

function Sustainability() {
  return (
    <div className="Sustainibility Page">
      <h1>This is the Sustainability page</h1>
    </div>
  );
}

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
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route component={Splash} exact path="/"></Route>
          <Route component={About} path="/About"></Route>
          <Route component={Trees} path="/Trees"></Route>
          <Route component={Sustainability} path="/Sustainability"></Route>
        </Switch>
        <Gallery></Gallery>
      </BrowserRouter>
    </div>
  );
}

export default App;
