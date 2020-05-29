import React from "react";
import json from "../../assets/speciesList2.json";
import Logos from "../Logos";

import treeImg from "/Users/tissakhosla/Projects/ct-farm/src/assets/treeRenders/acer-rebrum.jpg";

import "../Species.css";
import "./Trees.css";
import "./Page.css";

class Trees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trees: json,
      display: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.selection = this.selection.bind(this);
    this.species = this.selection.bind(this);
  }

  selection() {
    let checkBoxCollection = document.getElementsByClassName("Checkbox");
    let anyChecked = false;
    for (let i = 0; i < checkBoxCollection.length; i++) {
      anyChecked = anyChecked || checkBoxCollection[i].checked;
    }
    let displayList = [];

    for (let i = 0; i < checkBoxCollection.length; i++) {
      if (checkBoxCollection[i].checked || !anyChecked) {
        let selectedProperty = checkBoxCollection[i].id;
        this.state.trees.forEach((element) => {
          if (element.size === selectedProperty || !anyChecked) {
            displayList.push(
              <div className="Species__card">
                <div>
                  <h3 className="Species__names">
                    <p className="Species__common">{element.common}</p>
                    <p className="Species__latin">{element.latin}</p>
                  </h3>
                  <p className="Species__info"></p>
                </div>
                <img
                  className="Species__sketch"
                  alt={element.common}
                  src={treeImg}
                ></img>
              </div>
            );
          }
        });
      }
    }
    this.setState({ display: displayList });
    console.dir(this.state.display);
  }

  handleClick() {
    this.selection();
  }
  componentDidMount() {
    this.selection();
  }
  render() {
    return (
      <div className="Page">
        <div>
          <p className="Page__p">
            <b>AT CASEY TREE FARM</b>, we're proud of our sustainably-grown
            trees. In this guide we offer 42 species - from ornamental cherries
            to towering sycamores -{" "}
            <span className="Page__highlight">
              available for wholesale purchase.
            </span>
            We are excited to work with you to re-tree your community and meet
            your canopy goals.
          </p>
          <p className="Page__p">
            We encourage you to schedule a visit to see our trees up close. We
            would be pleased to give you a tour of our nursery andthe farm, and
            explain in greater detailour susainable growing practices.
          </p>
          <p className="Page__p">
            Please note that all listed measurements for mature height and
            spread are approximate.
          </p>
          <Logos></Logos>
        </div>
        <div className="Trees">
          <h1 className="Page__title">FULL INVENTORY</h1>
          <form className="Trees__form">
            <p>Size</p>
            <input
              onClick={this.handleClick}
              className="Checkbox"
              type="checkbox"
              id="Small Tree"
            ></input>
            <label for="Small Tree">Small</label>
            <input
              onClick={this.handleClick}
              className="Checkbox"
              type="checkbox"
              id="Medium Tree"
            ></input>
            <label for="Medium Tree">Medium</label>
            <input
              onClick={this.handleClick}
              className="Checkbox"
              type="checkbox"
              id="Large Tree"
            ></input>
            <label for="Large Tree">Large</label>
          </form>
          <div className="Trees__list">{this.state.display}</div>
        </div>
      </div>
    );
  }
}
export default Trees;
