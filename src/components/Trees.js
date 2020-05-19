import React from "react";
import "./Checkbox.css";
class Trees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
    this.selection = this.selection.bind(this);
  }

  handleClick() {
    let checkBox = document.getElementsByClassName("Checkbox");
    console.log(checkBox[0].checked);
  }

  render() {
    return (
      <form>
        <input
          onClick={this.handleClick}
          className="Checkbox"
          type="checkbox"
        ></input>
      </form>
    );
  }
}
export default Trees;
