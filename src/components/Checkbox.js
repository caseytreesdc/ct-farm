import React from "react";
import "./Checkbox.css";
import checked from "../assets/check.svg";
import unchecked from "../assets/checkbox.svg";

class Checkbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      onOrOff: checked,
      imgClassList: "check",
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(eo) {
    eo.preventDefault();
    if (this.state.onOrOff === checked) {
      this.setState({ onOrOff: unchecked, imgClassList: "" });
    }
    if (this.state.onOrOff === unchecked) {
      this.setState({ onOrOff: checked, imgClassList: "check" });
    }
  }
  render() {
    return (
      <div className="Checkbox__list-item">
        <div onClick={this.handleClick} className="Checkbox">
          <img
            className={this.state.imgClassList}
            src={this.state.onOrOff}
          ></img>
        </div>
        <p className="Checkbox__text">{this.props.text}</p>
      </div>
    );
  }
}

export default Checkbox;
