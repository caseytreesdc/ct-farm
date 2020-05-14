import React from "react";
import "./CTButton.css";

const CTButton = (props) => {
  let target = "__blank";
  
  let className = "CTButton";
  if (props.orange) {
    className += " orange";
  } else if (props.green) {
    className += " green";
  } else if (props.blue) {
    className += " blue";
  }
  let textClass = "CTButton__text"
  if (props.wide) {
    textClass +="-wide"
  }
  if (props.samePage) {
    return (
      <a className="CTButton__link" href={props.url}>
        <div className={className}>
          <p className={textClass}>{props.text}</p>
        </div>
      </a>
    );
  }
  return (
    <a className="CTButton__link" href={props.url} target={target}>
      <div className={className}>
        <p className={textClass}>{props.text}</p>
      </div>
    </a>
  );
};

export default CTButton;
