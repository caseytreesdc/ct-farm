import React from "react";
import json from "../../assets/speciesList5.json";

import Species from "../Species";
import Logos from "../Logos";

import "../Species.css";
import "./Trees.css";
import "./Page.css";

class Trees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trees: json,
      display: this.alphabetizeByScientificName([]),
    };
    this.handleClick = this.handleClick.bind(this);
    this.alphabetize = this.alphabetizeByScientificName.bind(this);
    this.selection = this.selection.bind(this);
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
              <Species
                common={element.common}
                wpLink={element.wpLink}
                latin={element.latin}
                imagePath={element.imagePath}
              ></Species>
            );
          }
          if (
            (selectedProperty === "Evergreen" ||
              selectedProperty === "Flowering") &&
            (element.Evergreen || element.Flowering)
          ) {
          }
        });
      }
    }
    this.setState({ display: displayList });
  }

  alphabetizeByScientificName(speciesArray) {
    return speciesArray.sort((tree_N, tree_N1) =>
      tree_N.latin > tree_N1.latin ? 1 : -1
    );
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
            would be pleased to give you a tour of our nursery and the farm, and
            explain in greater detailour susainable growing practices.
          </p>
          <p className="Page__p">
            Please note that all listed measurements for mature height and
            spread are approximate.
          </p>
        </div>
        <div className="Trees">
          <div className="Trees__header">
            <h1 className="Page__title">TREES WE GROW</h1>
            <Logos></Logos>
          </div>
          <form className="Trees__form">
            <div>
              <p>Size</p>
              <input
                onClick={this.handleClick}
                className="Checkbox"
                type="checkbox"
                id="Small Tree"
              ></input>
              <label htmlFor="Small Tree">Small</label>
              <input
                onClick={this.handleClick}
                className="Checkbox"
                type="checkbox"
                id="Medium Tree"
              ></input>
              <label htmlFor="Medium Tree">Medium</label>
              <input
                onClick={this.handleClick}
                className="Checkbox"
                type="checkbox"
                id="Large Tree"
              ></input>
              <label htmlFor="Large Tree">Large</label>
            </div>
          </form>
          <div className="Trees__list">{this.state.display}</div>
        </div>
      </div>
    );
  }
}
export default Trees;
