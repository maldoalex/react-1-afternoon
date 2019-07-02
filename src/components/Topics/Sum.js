import React, { Component } from "react";

class Sum extends Component {
  constructor() {
    super();
    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    };
    // this.other = this.handleChange.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }

  inputNumber1(value) {
    this.setState({ number1: parseInt(value) });
  }

  inputNumber2(value) {
    this.setState({ number2: parseInt(value) });
  }

  add(num1, num2) {
    this.setState({ sum: num1 + num2 });
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4> Sum </h4>
        <input
          className="inputLine"
          onChange={e => this.inputNumber1(e.target.value)}
        />
        <input
          className="inputLine"
          onChange={e => this.inputNumber2(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.add(this.state.number1, this.state.number2)}
        />
        <span className="resultsBox">
          {" "}
          Sum: {JSON.stringify(this.state.sum)}{" "}
        </span>
      </div>
    );
  }
}

export default Sum;
