import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Nav from "./components/Nav";
import Header from "./components/Header";
import Splash from "./components/Splash";
import About from "./components/Pages/About";
import Trees from "./components/Pages/Trees";
import Request from "./components/Pages/Request";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Splash></Splash>
      <Nav
        navType="internal"
        navLinks={[
          { text: "CT FARM", path: "/" },
          { text: "FULL INVENTORY", path: "/Trees" },
          { text: "REQUEST", path: "/Request" },
        ]}
      ></Nav>
      <Switch>
        <Route component={About} exact path="/"></Route>
        <Route component={Trees} path="/Trees"></Route>
        <Route component={Request} path="/Request"></Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
