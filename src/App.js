import React, { Component } from "react";
import { QUESTIONS } from "./questions";
import Questionanswers from "./Questionanswers";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <h1>Questionnaire</h1>
        <Questionanswers />
      </div>
    );
  }
}

export default App;
