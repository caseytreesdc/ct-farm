import React from "react";
import json from "../assets/speciesList.json";

import Checkbox from "../components/Checkbox";
import "./Checkbox.css";
import checked from "../assets/check.svg";
import unchecked from "../assets/checkbox.svg";

import Species from "../components/Species";

class Trees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      speciesList: json,

      sizeCheckboxes: [],
      status: checked,
      checkBoxImgClassList: "check",
    };
    this.handleClick = this.handleClick.bind(this);
    this.size = this.size.bind(this);
    this.displayTrees = this.displayTrees.bind(this);
  }

  handleClick(eo) {
    eo.preventDefault();
    console.log("clicked")
    if (this.state.status === checked) {
      this.setState({ status: unchecked, imgClassList: "" });
    }
    if (this.state.status === unchecked) {
      this.setState({ status: checked, imgClassList: "check" });
    }
  }

  size() {
    let sizeNumbers = this.state.speciesList.map((speeshee) => speeshee.size);
    let sortedNumbers = sizeNumbers.sort();
    let noDuplicates = [...new Set(sortedNumbers)];
    let sizes = noDuplicates.map((elem) => {
      if (elem === 1) {
        return "Small";
      }
      if (elem === 2) {
        return "Medium";
      }
      if (elem === 3) {
        return "Large";
      }
    });
    let sizeList = sizes.map((elem) => (
      <li>
        <div className="Checkbox__list-item">
          <div onClick={this.handleClick} className="Checkbox">
            <img
              className="Checkbox__img"
              className={this.state.imgClassList}
              src={this.state.status}
            ></img>
          </div>
          <p className="Checkbox__text">{elem}</p>
        </div>
      </li>
    ));
    return sizeList;
  }

  displayTrees() {
    let checkSources = document.getElementsByClassName("Checkbox");
  }

  componentDidMount() {
    this.setState({ sizeCheckboxes: this.size() });
  }

  render() {
    return (
      <div>
        <ul>{this.state.sizeCheckboxes}</ul>
        <Species></Species>
      </div>
    );
  }
}

export default Trees;
