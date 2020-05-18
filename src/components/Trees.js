import React from "react";
import speciesList from "../assets/speciesList.json";
import Checkbox from "../components/Checkbox";

class Trees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      speciesList: speciesList,
      sizeCheckboxes: [],
    };

    this.sizesText = this.sizesText.bind(this)
  }

  sizesText(item) {
        if (item.size === 1) {
          return "Small";
        }
        if (item.size === 2) {
          return "Medium";
        }
        if (item.size === 3) {
          return "Large";
        }
  }

  componentDidMount() {
    this.setState({
      sizeCheckboxes: this.state.speciesList.map((speeshee) => {
        return <Checkbox text={this.sizesText(speeshee)}></Checkbox>;
      }),
    });
  }
  render() {
    return this.state.sizeCheckboxes;
  }
}

export default Trees;
