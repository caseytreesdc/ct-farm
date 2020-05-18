import React from "react";

import "./Trees.css";

import Checkbox from "./Checkbox";
import Species from "./Species";

class Trees extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Trees Page">
        <h1 className="Page__title">Trees we Grow</h1>
        <div className="Trees__filter">
          <ul className="Trees__list">
            <li>
              <Checkbox text="Small"></Checkbox>
            </li>
            <li>
              <Checkbox text="Medium"></Checkbox>
            </li>
            <li>
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
