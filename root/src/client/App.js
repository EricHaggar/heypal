import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserSearch from "./components/UserSearch";
import './app.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" component={UserSearch} />
        </div>
      </Router>
    );
  }
}
export default App;
