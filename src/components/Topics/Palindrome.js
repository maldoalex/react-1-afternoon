import React, { Component } from "react";

class Palindrome extends Component {
  constructor() {
    super();

    this.state = {
      userInput: "",
      palindrome: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  checkPali() {
    let string = this.state.userInput;
    let revString = this.state.userInput
      .split("")
      .reverse()
      .join("");
    console.log(string);
    this.setState({ palindrome: string === revString });
  }

  checkPali(userInput) {
    let forwards = userInput;
    let backwards = userInput;
    backwards = backwards.split("");
    backwards = backwards.reverse();
    backwards = backwards.join("");

    if (forwards === backwards) {
      this.setState({ palindrome: "true" });
    } else {
      this.setState({ palindrome: "false" });
    }
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.checkPali(this.state.userInput)}
        >
          Click here
        </button>
        <span className="resultsBox">
          {" "}
          Palindrome: {this.state.palindrome}{" "}
        </span>
      </div>
    );
  }
}

export default Palindrome;
