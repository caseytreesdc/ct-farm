import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./components/Gallery.css";

import "./components/Splash.css";
import "./components/Page.css";

import splashVideo from "./assets/WebHeroClip.mp4";
import greyDSCNLogo from "./assets/logos/grey-dcsn-logo.png";
import greyCTLogo from "./assets/logos/grey-ct-logo.png";

function Splash() {
  return (
    <div className="Splash">
      <div className="Splash__overlay">
        <div className="Splash__title-box">
          <p className="Splash__title dcsn">D.C. State Nursery at</p>
          <p className="Splash__title ctFarm">Casey Trees Farm</p>
        </div>
        <div className="Splash__logo-container">
          <img className="Splash__logo" src={greyCTLogo}></img>
          <img className="Splash__logo" src={greyDSCNLogo}></img>
        </div>
      </div>
      <div className="Splash__Video-box">
        <video loop autoPlay muted className="Splash__Video">
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
      <Header></Header>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route component={Splash} exact path="/"></Route>
          <Route component={About} path="/About"></Route>
          <Route component={Trees} path="/Trees"></Route>
          <Route component={Sustainability} path="/Sustainability"></Route>
        </Switch>
        <Gallery></Gallery>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
