import React, { Component } from "react";
import Routes from "../src/components/Routes";
import NavBar from "./components/NavBar";
import "./index.css";

class App extends Component {
  render() {
    return (
      <div className="flexible-content">
        <NavBar />
        <main id="content" className="p-5">
          <Routes />
        </main>
      </div>
    );
  }
}

export default App;
