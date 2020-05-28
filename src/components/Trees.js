import React from "react";
import json from "../assets/speciesList2.json";
import "./Species.css"
// import "./Checkbox.css";
class Trees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trees: json,
      display: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.selection = this.selection.bind(this);
  }

  selection() {
    let checkBoxCollection = document.getElementsByClassName("Checkbox");
    let displayList = [];
    for (let i = 0; i < checkBoxCollection.length; i++) {
      if (checkBoxCollection[i].checked) {
        let selectedProperty = checkBoxCollection[i].id;
        console.log(selectedProperty);
        this.state.trees.forEach((element) => {
          if (element.size === selectedProperty) {
            displayList.push(
              <div className="Species__card">
                {/* <img
                  className="Species__sketch"
                  alt={element.common}
                  src={process.env.PUBLIC_URL + "/img/" + element.sketch}
                ></img> */}
                <div>
                  <h3>
                    <span className="Species__latin">{element.latin} | </span>
                    <span className="Species__common">{element.common}</span>
                  </h3>
                  <p className="Species__info"></p>
                  <p className="Species__info">ZONE: {element.zone}</p>
                  <p className="Species__info">
                    MATURE HEIGHT, SPREAD: {element.height}', {element.spread}'
                  </p>
                  <p className="Species__info">NOTES: {element.notes}</p>
                </div>
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

  render() {
    return (
      <div>
        <div>
          <form className="">
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
        </div>
        <div>{this.state.display}</div>
      </div>
    );
  }
}
export default Trees;
