import React, { Component } from "react";
import "./App.css";
import { HashRouter, Link } from "react-router-dom";
import routes from "./routes";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">{routes}</div>
      </HashRouter>
    );
  }
}

export default App;
