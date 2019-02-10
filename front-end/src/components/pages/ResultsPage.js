import React from "react";

import BarChart from "../BarChart";
import ScatteredChart from "../ScatteredChart";

import { MDBContainer, MDBJumbotron } from "mdbreact";

class HomePage extends React.Component {
  state = {};

  componentDidMount() {}

  render() {
    const { info } = this.props;
    console.log(info["category_scores"]);
    return (
      <MDBJumbotron fluid>
        <MDBContainer>
          <h1
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "30px"
            }}
            className="display-4"
          >
            <strong>Results We Found</strong>
          </h1>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "50px"
            }}
          >
            <BarChart detections={info["category_scores"]} />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "30px"
            }}
          >
            <ScatteredChart />
          </div>
        </MDBContainer>
      </MDBJumbotron>
    );
  }
}

export default HomePage;
