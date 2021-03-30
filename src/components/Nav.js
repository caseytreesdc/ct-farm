import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: null,
      navType: props.navType,
      navLinks: props.navLinks,
      navBar: null,
    };
  }
  componentDidMount() {
    if (this.state.navType === "external") {
      let externalNav = this.state.navLinks.map((item, index) => {
        if (index !== this.state.navLinks.length - 1) {
          return (
            <>
              <div className="Nav__anchor-box">
                <a target="__blank" className="Nav__anchor" href={item.path}>
                  <p className="Nav__anchor-text">{item.text}</p>
                </a>
              </div>
              <div className="Nav__slash">{""}</div>
            </>
          );
        } else {
          return (
            <div className="Nav__anchor-box">
              <a target="__blank" className="Nav__anchor" href={item.path}>
                <p className="Nav__anchor-text">{item.text}</p>
              </a>
            </div>
          );
        }
      });
      this.setState({ navBar: externalNav });
    } else if (this.state.navType === "internal") {
      let internalNav = this.state.navLinks.map((item, index) => {
        if (index !== this.state.navLinks.length - 1) {
          return (
            <>
              <div className="Nav__anchor-box">
                <Link className="Nav__anchor" to={item.path}>
                  <p className="Nav__anchor-text">{item.text}</p>
                </Link>
              </div>
              <div className="Nav__slash">{""}</div>
            </>
          );
        } else {
          return (
            <div className="Nav__anchor-box">
              <Link className="Nav__anchor" to={item.path}>
                <p className="Nav__anchor-text">{item.text}</p>
              </Link>
            </div>
          );
        }
      });
      this.setState({ navBar: internalNav, background: "grey" });
    }
  }
  render() {
    if (this.state.background) {
      return (
        <div
          onClick={() => {
            document.getElementsByClassName("Nav")[1].scrollIntoView();
          }}
          className="Nav grey Nav__internal"
          id="FarmTrees"
        >
          {this.state.navBar}
        </div>
      );
    }
    return <div className="Nav Nav__external">{this.state.navBar}</div>;
  }
}

export default Nav;
