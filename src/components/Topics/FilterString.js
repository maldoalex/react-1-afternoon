import React, { Component } from "react";

class FilterString extends Component {
  constructor() {
    super();

    this.state = {
      unfilteredColors: [
        "red",
        "white",
        "blue",
        "black",
        "green",
        "yellow",
        "purple"
      ],
      userInput: "",
      filteredColors: []
    };
  }

  // this.handleChange = this.handleChange.bind(this)

  handleChange(val) {
    this.setState({ userInput: val });
  }

  filterColors(val) {
    let colorList = this.state.unfilteredColors;
    console.log(colorList);
    let filteredColors = [];
    console.log(filteredColors);
    for (let i = 0; i < colorList.length; i++) {
      if (colorList[i].includes(val)) {
        filteredColors.push(colorList[i]);
      }
    }
    this.setState({ filteredColors: filteredColors });
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4> Filter String </h4>
        <span className="puzzleText">
          {" "}
          Original: {JSON.stringify(this.state.unfilteredColors)}{" "}
        </span>
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={e => this.filterColors(this.state.userInput)}
        >
          Filter Colors
        </button>
        <span className="resultsBox filterStringRB">
          {" "}
          Filtered: {JSON.stringify(this.state.filteredColors)}{" "}
        </span>
      </div>
    );
  }
}

export default FilterString;
