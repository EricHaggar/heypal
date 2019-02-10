import React, { Component } from "react";
import { MDBCol, MDBRow, MDBFormInline, MDBBtn, MDBContainer } from "mdbreact";

class SearchPage extends Component {
  state = {
    query: ""
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
    console.log(this.state.query);
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
    });
  };

  render() {
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
              <MDBBtn
                gradient="aqua"
                rounded
                size="sm"
                type="submit"
                value="Submit"
                className="mr-auto"
                onClick={this.handleSubmit}
              >
                Search
              </MDBBtn>
            </MDBFormInline>
          </MDBRow>
        </MDBCol>
      </MDBContainer>
    );
  }
}

export default SearchPage;
