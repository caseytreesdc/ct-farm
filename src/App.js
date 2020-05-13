import React from "react";
import "./App.css";

import heroVideo from "./assets/WebHeroClip.mp4"; 

function Main() {
  return (
    <div className="Hero">
      <video loop autoPlay>
        <source src={heroVideo} type="video/mp4"></source>
      </video>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Main></Main>
    </div>
  );
}

export default App;
