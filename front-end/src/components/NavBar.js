import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink
} from "mdbreact";

import { NavLink, Link } from "react-router-dom";

class NavBar extends Component {
  state = {
    collapse: false
  };

  onClick = () => {
    this.setState({
      collapse: !this.state.collapse
    });
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  render() {
    return (
      <MDBNavbar className="flexible-navbar" light expand="md" scrolling>
        <MDBNavbarBrand href="/">
          <h2>
            <strong>HeyPal</strong>
          </h2>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.onClick} />
        <MDBCollapse isOpen={this.state.collapse} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <a
                rel="noopener noreferrer"
                className="nav-link Ripple-parent"
                href="https://mdbootstrap.com/docs/react/"
                target="_blank"
              >
                About Us
              </a>
            </MDBNavItem>
            <MDBNavItem>
              <a
                rel="noopener noreferrer"
                className="nav-link Ripple-parent"
                href="https://mdbootstrap.com/docs/react/getting-started/download/"
                target="_blank"
              >
                Github Repo
              </a>
            </MDBNavItem>
            <MDBNavItem>
              <Link to="results">Results</Link>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavBar;
