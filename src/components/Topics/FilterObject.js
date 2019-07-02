import React, { Component } from "react";

class FilterObject extends Component {
  constructor() {
    super();
    this.state = {
      pets: [
        { pet: "dogs", number: 2, color: "white" },
        { pet: "cats", number: 1, color: "black" },
        { pet: "dogs", number: 1, color: "brown" }
        // { pet: "cats", number: 2 },
        // { pet: "dogs", number: 3 },
        // { pet: "cats", number: 3 }
      ],
      userInput: "",
      filteredPets: ""
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  filterPets(val) {
    let pets = this.state.pets;
    let filteredPets = [];
    for (let i = 0; i < pets.length; i++) {
      if (pets[i].hasOwnProperty(val)) {
        filteredPets.push(pets[i]);
      }
    }
    this.setState({ filteredPets: filteredPets });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">
          {" "}
          Original: {JSON.stringify(this.state.pets)}
        </span>
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={e => this.filterPets(this.state.userInput)}
        >
          Filter
        </button>
        <span className="resultsBox filterObjectRB">
          {" "}
          Filtered: {JSON.stringify(this.state.filteredPets)}{" "}
        </span>
      </div>
    );
  }
}

export default FilterObject;
