import React from "react";

import treeImg from "/Users/tissakhosla/Projects/ct-farm/src/assets/treeRenders/acer-rebrum.jpg";

const Species = (props) => {
  return (
    <div className="Species__card">
      <div>
        <h3 className="Species__names">
          <p className="Species__common">{props.common}</p>
          <p className="Species__latin">{props.latin}</p>
        </h3>
      </div>
      <img className="Species__sketch" alt={props.common} src={treeImg}></img>
    </div>
  );
};

export default Species;
