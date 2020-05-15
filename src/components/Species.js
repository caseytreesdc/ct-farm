import React from "react";
import speciesList from "../assets/speciesList.json";
import "./Species.css";

class Species extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: null,
    };
  }

  componentDidMount() {
    this.setState({
      results: speciesList.map((speeshee) => {
        return (
          <div className="Species__card">
            <img
              className="Species__sketch"
              alt={speeshee.common}
              src={process.env.PUBLIC_URL + "/img/" + speeshee.sketch}
            ></img>
            <div>
              <h3>
                <span className="Species__latin">{speeshee.latin} | </span>
                <span className="Species__common">{speeshee.common}</span>
              </h3>
              <p className="Species__info"></p>
              <p className="Species__info">ZONE: {speeshee.zone}</p>
              <p className="Species__info">
                MATURE HEIGHT, SPREAD: {speeshee.height}', {speeshee.spread}'
              </p>
              <p className="Species__info">NOTES: {speeshee.notes}</p>
            </div>
          </div>
        );
      }),
    });
  }
  render() {
    return <div className="Species">{this.state.results}</div>;
  }
}

export default Species;
