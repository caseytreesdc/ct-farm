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
    this.checkArrayMatch = this.checkArrayMatch.bind(this);
    this.aNewFunction = this.aNewFunction.bind(this);
    this.selection = this.selection.bind(this);
  }

  checkArrayMatch(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }

  aNewFunction() {
    let displayList = [];

    let checkboxCollection = document.getElementsByClassName("Checkbox");
    let checkedArray = [];
    for (let i = 0; i < checkboxCollection.length; i++) {
      checkedArray.push(checkboxCollection[i].checked);
    }
    console.log(checkedArray);

    if (
      this.checkArrayMatch(checkedArray, [false, false, false, false, false])
    ) {
      console.log("// none checked");
      this.state.trees.forEach((tree) => {
        displayList.push(
          <Species
            common={tree.common}
            wpLink={tree.wpLink}
            latin={tree.latin}
            imagePath={tree.imagePath}
          ></Species>
        );
      });
    } else if (
      this.checkArrayMatch(checkedArray, [true, false, false, false, false])
    ) {
      console.log("// S checked");
      this.state.trees.forEach((tree) => {
        if (tree.size === "Small Tree") {
          displayList.push(
            <Species
              common={tree.common}
              wpLink={tree.wpLink}
              latin={tree.latin}
              imagePath={tree.imagePath}
            ></Species>
          );
        }
      });
    } else if (
      this.checkArrayMatch(checkedArray, [false, true, false, false, false])
    ) {
      console.log("// M checked");
      this.state.trees.forEach((tree) => {
        if (tree.size === "Medium Tree") {
          displayList.push(
            <Species
              common={tree.common}
              wpLink={tree.wpLink}
              latin={tree.latin}
              imagePath={tree.imagePath}
            ></Species>
          );
        }
      });
    } else if (
      this.checkArrayMatch(checkedArray, [false, false, true, false, false])
    ) {
      console.log("// L checked");
      this.state.trees.forEach((tree) => {
        if (tree.size === "Large Tree") {
          displayList.push(
            <Species
              common={tree.common}
              wpLink={tree.wpLink}
              latin={tree.latin}
              imagePath={tree.imagePath}
            ></Species>
          );
        }
      });
    } else if (
      this.checkArrayMatch(checkedArray, [true, true, false, false, false])
    ) {
      console.log("// S M checked");
      this.state.trees.forEach((tree) => {
        if (tree.size === "Small Tree" || tree.size === "Medium Tree") {
          displayList.push(
            <Species
              common={tree.common}
              wpLink={tree.wpLink}
              latin={tree.latin}
              imagePath={tree.imagePath}
            ></Species>
          );
        }
      });
    } else if (
      this.checkArrayMatch(checkedArray, [false, true, true, false, false])
    ) {
      console.log("// M L checked");
      this.state.trees.forEach((tree) => {
        if (tree.size === "Medium Tree" || tree.size === "Large Tree") {
          displayList.push(
            <Species
              common={tree.common}
              wpLink={tree.wpLink}
              latin={tree.latin}
              imagePath={tree.imagePath}
            ></Species>
          );
        }
      });
    } else if (
      this.checkArrayMatch(checkedArray, [true, false, true, false, false])
    ) {
      console.log("// S L checked");
      this.state.trees.forEach((tree) => {
        if (tree.size === "Small Tree" || tree.size === "Large Tree") {
          displayList.push(
            <Species
              common={tree.common}
              wpLink={tree.wpLink}
              latin={tree.latin}
              imagePath={tree.imagePath}
            ></Species>
          );
        }
      });
    } else if (
      this.checkArrayMatch(checkedArray, [true, true, true, false, false])
    ) {
      console.log("// S M L checked");
      this.state.trees.forEach((tree) => {
        if (
          tree.size === "Small Tree" ||
          tree.size === "Medium Tree" ||
          tree.size === "Large Tree"
        ) {
          displayList.push(
            <Species
              common={tree.common}
              wpLink={tree.wpLink}
              latin={tree.latin}
              imagePath={tree.imagePath}
            ></Species>
          );
        }
      });
    } else if (
      this.checkArrayMatch(checkedArray, [false, false, false, true, false])
    ) {
      console.log("// + E checked");
      this.state.trees.forEach((tree) => {
        if (tree.Evergreen) {
          displayList.push(
            <Species
              common={tree.common}
              wpLink={tree.wpLink}
              latin={tree.latin}
              imagePath={tree.imagePath}
            ></Species>
          );
        }
      });
    } else if (
      this.checkArrayMatch(checkedArray, [true, false, false, true, false])
    ) {
      console.log("// S + E checked");
      this.state.trees.forEach((tree) => {
        if (tree.size === "Small Tree" && tree.Evergreen) {
          displayList.push(
            <Species
              common={tree.common}
              wpLink={tree.wpLink}
              latin={tree.latin}
              imagePath={tree.imagePath}
            ></Species>
          );
        }
      });
    } else if (
      this.checkArrayMatch(checkedArray, [false, true, false, true, false])
    ) {
      console.log("// M + E checked");
      this.state.trees.forEach((tree) => {
        if (tree.size === "Medium Tree" && tree.Evergreen) {
          displayList.push(
            <Species
              common={tree.common}
              wpLink={tree.wpLink}
              latin={tree.latin}
              imagePath={tree.imagePath}
            ></Species>
          );
        }
      });
    } else if (
      this.checkArrayMatch(checkedArray, [false, false, true, true, false])
    ) {
      console.log("// L + E checked");
      this.state.trees.forEach((tree) => {
        if (tree.size === "Large Tree" && tree.Evergreen) {
          displayList.push(
            <Species
              common={tree.common}
              wpLink={tree.wpLink}
              latin={tree.latin}
              imagePath={tree.imagePath}
            ></Species>
          );
        }
      });
    } else if (
      this.checkArrayMatch(checkedArray, [true, true, false, true, false])
    ) {
      console.log("// S M + E checked");
      this.state.trees.forEach((tree) => {
        if (
          (tree.size === "Small Tree" || tree.size === "Medium Tree") &&
          tree.Evergreen
        ) {
          displayList.push(
            <Species
              common={tree.common}
              wpLink={tree.wpLink}
              latin={tree.latin}
              imagePath={tree.imagePath}
            ></Species>
          );
        }
      });
    } else if (
      this.checkArrayMatch(checkedArray, [false, true, true, true, false])
    ) {
      console.log("// M L + E checked");
      this.state.trees.forEach((tree) => {
        if (
          (tree.size === "Medium Tree" || tree.size === "Large Tree") &&
          tree.Evergreen
        ) {
          displayList.push(
            <Species
              common={tree.common}
              wpLink={tree.wpLink}
              latin={tree.latin}
              imagePath={tree.imagePath}
            ></Species>
          );
        }
      });
    } else if (
      this.checkArrayMatch(checkedArray, [true, false, true, true, false])
    ) {
      console.log("// S L + E checked");
      this.state.trees.forEach((tree) => {
        if (
          (tree.size === "Small Tree" || tree.size === "Large Tree") &&
          tree.Evergreen
        ) {
          displayList.push(
            <Species
              common={tree.common}
              wpLink={tree.wpLink}
              latin={tree.latin}
              imagePath={tree.imagePath}
            ></Species>
          );
        }
      });
    } else if (
      this.checkArrayMatch(checkedArray, [true, true, true, true, false])
    ) {
      console.log("// S M L + E checked");
      this.state.trees.forEach((tree) => {
        if (
          (tree.size === "Small Tree" ||
            tree.size === "Medium Tree" ||
            tree.size === "Large Tree") &&
          tree.Evergreen
        ) {
          displayList.push(
            <Species
              common={tree.common}
              wpLink={tree.wpLink}
              latin={tree.latin}
              imagePath={tree.imagePath}
            ></Species>
          );
        }
      });
    } else if (
      this.checkArrayMatch(checkedArray, [false, false, false, false, true])
    ) {
      console.log("// + F checked");
      this.state.trees.forEach((tree) => {
        if (tree.Flowering) {
          displayList.push(
            <Species
              common={tree.common}
              wpLink={tree.wpLink}
              latin={tree.latin}
              imagePath={tree.imagePath}
            ></Species>
          );
        }
      });
    } else if (
      this.checkArrayMatch(checkedArray, [true, false, false, false, true])
    ) {
      console.log("// S + F checked");
      this.state.trees.forEach((tree) => {
        if (tree.size === "Small Tree" && tree.Flowering) {
          displayList.push(
            <Species
              common={tree.common}
              wpLink={tree.wpLink}
              latin={tree.latin}
              imagePath={tree.imagePath}
            ></Species>
          );
        }
      });
    } else if (
      this.checkArrayMatch(checkedArray, [false, true, false, false, true])
    ) {
      console.log("// M + F checked");
      this.state.trees.forEach((tree) => {
        if (tree.size === "Medium Tree" && tree.Flowering) {
          displayList.push(
            <Species
              common={tree.common}
              wpLink={tree.wpLink}
              latin={tree.latin}
              imagePath={tree.imagePath}
            ></Species>
          );
        }
      });
    } else if (
      this.checkArrayMatch(checkedArray, [false, false, true, false, true])
    ) {
      console.log("// L + F checked");
      this.state.trees.forEach((tree) => {
        if (tree.size === "Large Tree" && tree.Flowering) {
          displayList.push(
            <Species
              common={tree.common}
              wpLink={tree.wpLink}
              latin={tree.latin}
              imagePath={tree.imagePath}
            ></Species>
          );
        }
      });
    } else if (
      this.checkArrayMatch(checkedArray, [true, true, false, false, true])
    ) {
      console.log("// S M + F checked");
      this.state.trees.forEach((tree) => {
        if (
          (tree.size === "Small Tree" || tree.size === "Medium Tree") &&
          tree.Flowering
        ) {
          displayList.push(
            <Species
              common={tree.common}
              wpLink={tree.wpLink}
              latin={tree.latin}
              imagePath={tree.imagePath}
            ></Species>
          );
        }
      });
    } else if (
      this.checkArrayMatch(checkedArray, [false, true, true, false, true])
    ) {
      console.log("// M L + F checked");
      this.state.trees.forEach((tree) => {
        if (
          (tree.size === "Medium Tree" || tree.size === "Large Tree") &&
          tree.Flowering
        ) {
          displayList.push(
            <Species
              common={tree.common}
              wpLink={tree.wpLink}
              latin={tree.latin}
              imagePath={tree.imagePath}
            ></Species>
          );
        }
      });
    } else if (
      this.checkArrayMatch(checkedArray, [true, false, true, false, true])
    ) {
      console.log("// S L + F checked");
      this.state.trees.forEach((tree) => {
        if (
          (tree.size === "Small Tree" || tree.size === "Large Tree") &&
          tree.Flowering
        ) {
          displayList.push(
            <Species
              common={tree.common}
              wpLink={tree.wpLink}
              latin={tree.latin}
              imagePath={tree.imagePath}
            ></Species>
          );
        }
      });
    } else if (
      this.checkArrayMatch(checkedArray, [true, true, true, false, true])
    ) {
      console.log("// S M L + F checked");
      this.state.trees.forEach((tree) => {
        if (
          (tree.size === "Small Tree" ||
            tree.size === "Medium Tree" ||
            tree.size === "Large Tree") &&
          tree.Flowering
        ) {
          displayList.push(
            <Species
              common={tree.common}
              wpLink={tree.wpLink}
              latin={tree.latin}
              imagePath={tree.imagePath}
            ></Species>
          );
        }
      });
    } else if (
      this.checkArrayMatch(checkedArray, [false, false, false, true, true])
    ) {
      console.log("// + E F checked");
      this.state.trees.forEach((tree) => {
        if (tree.Evergreen && tree.Flowering) {
          displayList.push(
            <Species
              common={tree.common}
              wpLink={tree.wpLink}
              latin={tree.latin}
              imagePath={tree.imagePath}
            ></Species>
          );
        }
      });
    } else if (
      this.checkArrayMatch(checkedArray, [true, false, false, true, true])
    ) {
      console.log("// S + E F checked");
      this.state.trees.forEach((tree) => {
        if (tree.size === "Small Tree" && tree.Evergreen && tree.Flowering) {
          displayList.push(
            <Species
              common={tree.common}
              wpLink={tree.wpLink}
              latin={tree.latin}
              imagePath={tree.imagePath}
            ></Species>
          );
        }
      });
    } else if (
      this.checkArrayMatch(checkedArray, [false, true, false, true, true])
    ) {
      console.log("// M + E F checked");
      this.state.trees.forEach((tree) => {
        if (tree.size === "Medium Tree" && tree.Evergreen && tree.Flowering) {
          displayList.push(
            <Species
              common={tree.common}
              wpLink={tree.wpLink}
              latin={tree.latin}
              imagePath={tree.imagePath}
            ></Species>
          );
        }
      });
    } else if (
      this.checkArrayMatch(checkedArray, [false, false, true, true, true])
    ) {
      console.log("// L + E F checked");
      this.state.trees.forEach((tree) => {
        if (tree.size === "Large Tree" && tree.Evergreen && tree.Flowering) {
          displayList.push(
            <Species
              common={tree.common}
              wpLink={tree.wpLink}
              latin={tree.latin}
              imagePath={tree.imagePath}
            ></Species>
          );
        }
      });
    } else if (
      this.checkArrayMatch(checkedArray, [true, true, false, true, true])
    ) {
      console.log("// S M + E F checked");
      this.state.trees.forEach((tree) => {
        if (
          (tree.size === "Small Tree" || tree.size === "Medium Tree") &&
          tree.Evergreen &&
          tree.Flowering
        ) {
          displayList.push(
            <Species
              common={tree.common}
              wpLink={tree.wpLink}
              latin={tree.latin}
              imagePath={tree.imagePath}
            ></Species>
          );
        }
      });
    } else if (
      this.checkArrayMatch(checkedArray, [false, true, true, true, true])
    ) {
      console.log("// M L + E F checked");
      this.state.trees.forEach((tree) => {
        if (
          (tree.size === "Medium Tree" || tree.size === "Large Tree") &&
          tree.Evergreen &&
          tree.Flowering
        ) {
          displayList.push(
            <Species
              common={tree.common}
              wpLink={tree.wpLink}
              latin={tree.latin}
              imagePath={tree.imagePath}
            ></Species>
          );
        }
      });
    } else if (
      this.checkArrayMatch(checkedArray, [true, false, true, true, true])
    ) {
      console.log("// S L + E F checked");
      this.state.trees.forEach((tree) => {
        if (
          (tree.size === "Small Tree" || tree.size === "Large Tree") &&
          tree.Evergreen &&
          tree.Flowering
        ) {
          displayList.push(
            <Species
              common={tree.common}
              wpLink={tree.wpLink}
              latin={tree.latin}
              imagePath={tree.imagePath}
            ></Species>
          );
        }
      });
    } else if (
      this.checkArrayMatch(checkedArray, [true, true, true, true, true])
    ) {
      console.log("// S M L + E F checked");
      this.state.trees.forEach((tree) => {
        if (
          (tree.size === "Small Tree" ||
            tree.size === "Medium Tree" ||
            tree.size === "Large Tree") &&
          tree.Evergreen &&
          tree.Flowering
        ) {
          displayList.push(
            <Species
              common={tree.common}
              wpLink={tree.wpLink}
              latin={tree.latin}
              imagePath={tree.imagePath}
            ></Species>
          );
        }
      });
    }

    this.setState({ display: displayList });
  }

  selection() {
    let anyChecked = false;
    let displayList = [];

    //checks to see if size boxes are checked
    let checkboxCollection = document.getElementsByClassName("Checkbox");
    for (let i = 0; i < checkboxCollection.length; i++) {
      anyChecked = anyChecked || checkboxCollection[i].checked;
    }
    if (!anyChecked) {
      this.state.trees.forEach((tree) => {
        displayList.push(
          <Species
            common={tree.common}
            wpLink={tree.wpLink}
            latin={tree.latin}
            imagePath={tree.imagePath}
          ></Species>
        );
      });
    } else {
      let resultsArray = [];
      for (let i = 0; i < checkboxCollection.length; i++) {
        resultsArray.push(checkboxCollection[i].checked);
      }
      // console.log(resultsArray);
    }
    this.setState({ display: displayList });
  }

  alphabetizeByScientificName(speciesArray) {
    return speciesArray.sort((tree_N, tree_N1) =>
      tree_N.latin > tree_N1.latin ? 1 : -1
    );
  }

  handleClick() {
    this.aNewFunction();
    // this.selection();
  }
  componentDidMount() {
    this.aNewFunction();
    // this.selection();
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
              <fieldset>
                <legend>Mature Tree Size</legend>
                <input
                  onClick={this.handleClick}
                  className="Checkbox treeSize"
                  type="checkbox"
                  id="Small Tree"
                ></input>
                <label htmlFor="Small Tree">Small</label>
                <input
                  onClick={this.handleClick}
                  className="Checkbox treeSize"
                  type="checkbox"
                  id="Medium Tree"
                ></input>
                <label htmlFor="Medium Tree">Medium</label>
                <input
                  onClick={this.handleClick}
                  className="Checkbox treeSize"
                  type="checkbox"
                  id="Large Tree"
                ></input>
                <label htmlFor="Large Tree">Large</label>
              </fieldset>
              <fieldset>
                <legend>Flowers and Leaves</legend>
                <input
                  onClick={this.handleClick}
                  className="Checkbox floweringEvergreen"
                  type="checkbox"
                  id="Evergreen"
                ></input>
                <label htmlFor="Evergreen">Evergreen</label>
                <input
                  onClick={this.handleClick}
                  className="Checkbox floweringEvergreen"
                  type="checkbox"
                  id="Flowering"
                ></input>
                <label htmlFor="Flowering">Flowering</label>
              </fieldset>
            </div>
          </form>
          <div className="Trees__list">{this.state.display}</div>
        </div>
      </div>
    );
  }
}
export default Trees;
