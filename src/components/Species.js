import React from "react";

const Species = (props) => {
  let imgClass = "Species__sketch";
  if (props.imagePath === "") {
    imgClass += " hidden";
  }

  if (props.wpLink === "") {
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
  }
  return (
    <a href={props.wpLink} target="__blank" className="Species__card">
      <div>
        <h3 className="Species__names">
          <p className="Species__common">{props.common}</p>
          <p className="Species__latin">{props.latin}</p>
        </h3>
      </div>
      <img className={imgClass} alt={props.common} src={props.imagePath}></img>
    </a>
  );
};

export default Species;
