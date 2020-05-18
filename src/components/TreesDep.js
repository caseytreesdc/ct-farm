import React from "react";
import speciesList from "../assets/speciesList.json";
import "./Trees.css";

import Checkbox from "./Checkbox";
import checked from "../assets/check.svg";
import unchecked from "../assets/checkbox.svg";

import Species from "./Species";

class Trees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onOrOff: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(eo) {
    eo.preventDefault();
    console.log(eo);
    if (this.state.onOrOff) {
      this.setState({ onOrOff: false });
    }
    if (!this.state.onOrOff) {
      this.setState({ onOrOff: true });
    }
    // console.log(this.state.onOrOff);
  }
  render() {
    return (
      <div className="Trees Page">
        <h1 className="Page__title">Trees we Grow</h1>
        <div className="Trees__filter">
          <ul className="Trees__list">
            <li onClick={this.handleClick}>
              <Checkbox {...this.state} text="Small"></Checkbox>
            </li>
            <li onClick={this.handleClick}>
              <Checkbox text="Medium"></Checkbox>
            </li>
            <li onClick={this.handleClick}>
              <Checkbox text="Large"></Checkbox>
            </li>
          </ul>
        </div>
        <Species></Species>
      </div>
    );
  }
}
export default Trees;
