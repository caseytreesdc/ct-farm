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
      <h1 className="Page__title">About Casey Tree Farm</h1>
      <p className="Page__p">
        Casey Tree Farm, originally surveyed by our first president and avid
        horticulturalist George Washington, occupies 730 acres of land along the
        Shenendoah River in Berryville, VA. We have dedicated 100 acres of that
        land to sustainable tree production using techniques that prioritize
        long term soil health and productivity, while safeguarding the overall
        environment.
      </p>
      <p className="Page__p">
        Our vision is the production of sustainably grown, high quality trees to
        help communities meet their tree canopy goals. Along with meticulous
        care we provide to our soils by feeding the microflora using
        organic-based inputs, all our trees are grown in-ground using rootbags,
        which encourages greater fine root production than traditional balled
        and burlapped trees (photos needed). More fine roots mean better water
        and nutrient exchange and better chances of survival post-planting.
        Rootbag-grown trees also use less soil than their balled and burlapped
        counterparts, reducing environmental impacts and transportation costs,
        and simplifying planting.
      </p>
      <p className="Page__contact">CONTACT  |  202.257.3666</p>
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
