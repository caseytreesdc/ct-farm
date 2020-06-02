import React from "react";

import treeImg from "/Users/tissakhosla/Projects/ct-farm/src/assets/treeRenders/acer-rebrum.jpg";

const Species = (props) => {
  let imgClass = "Species__sketch";
  if (props.imagePath === "") {
    imgClass += " hidden";
  }
  return (
    <div className="Species__card">
      <div>
        <h3 className="Species__names">
          <p className="Species__common">{props.common}</p>
          <p className="Species__latin">{props.latin}</p>
        </h3>
      </div>
      <img
        className={imgClass}
        alt={props.common}
        src={props.imagePath}
      ></img>
    </div>
  );
};

export default Species;
