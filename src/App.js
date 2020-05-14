import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Gallery from "./components/Gallery"
import "./components/Gallery.css";

import "./components/Splash.css";
import "./components/Video.css";
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

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
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
