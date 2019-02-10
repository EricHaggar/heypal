import React, { Component } from "react";
import { MDBCol, MDBRow, MDBFormInline, MDBBtn, MDBContainer } from "mdbreact";

import ResultsPage from "./pages/ResultsPage";

class SearchPage extends Component {
  state = {
    query: "",
    step: 1,
    info: ""
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
    console.log(this.state.query);
  };

  nextStep = info => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
      info
    });
  };

  previousStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleSubmit = e => {
    let { query } = this.state;
    console.log("Submitted... " + query);

    fetch("/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        query: query
      })
    }).then(async response => {
      let info = await response.json();
      console.log(info);
      this.nextStep(info);
    });
  };

  render() {
    const { step } = this.state;

    switch (step) {
      case 1:
        return (
          <MDBContainer
            fluid
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)"
            }}
          >
            <MDBCol md="12">
              <MDBRow
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "15px"
                }}
              >
                <h1>Please enter your Twitter username.</h1>
              </MDBRow>
              <MDBRow style={{ display: "flex", justifyContent: "center" }}>
                <MDBFormInline>
                  <input
                    className="form-control mr-sm-2"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                    value={this.state.query}
                    onChange={this.handleChange}
                  />
                </MDBFormInline>
                <button onClick={this.handleSubmit}>Search</button>
              </MDBRow>
            </MDBCol>
          </MDBContainer>
        );
      case 2:
        const { info } = this.state;
        return <ResultsPage info={info} />;
      default:
    }
  }
}

export default SearchPage;
