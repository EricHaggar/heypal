import React from "react";

class HomePage extends React.Component {
  state = {};

  componentDidMount() {
    fetch("/results")
      .then(res => res.text())
      .then(text => alert(text));
  }

  render() {
    return <h1>Hello</h1>;
  }
}

export default HomePage;
