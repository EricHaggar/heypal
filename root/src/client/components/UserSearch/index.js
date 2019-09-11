import React from "react";
import { Input, Layout } from 'antd';
import './styles.css';
import axios from 'axios';
import LineChart from '../LineChart/index'
const { Search } = Input;


class UserSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      scores: [],
      validAccount: false,
      errors: false,
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleInputError = this.handleInputError.bind(this);
    this.displayErrorMessage = this.displayErrorMessage.bind(this);
  }

  handleSearch = input => {
    if (input === null || input.match(/^ *$/) !== null) {
      this.handleInputError("Invalid Username!")
    } else {
      axios.post('api/getSentimentScores', {
        username: input,
      })
        .then(res => this.setState({ username: input, scores: res.data.scores, validAccount: true, errors: false }))
        .catch(err => this.handleInputError(err))
    }
  }

  handleInputError = error => {
    console.log(error)
    this.setState({ username: "", scores: [], validAccount: false, errors: true })
  }

  displayErrorMessage = () => {
    if (this.state.errors || this.state.scores == undefined) {
      return <div className='error-message'><p>Invalid username! Please enter a valid username.</p></div>
    } else {
      return ""
    }
  }


  render() {
    return (
      <div className='main-container'>
        <div className='header'>
          <p>HeyPal</p>
        </div>
        <div className='search-graph-container'>
          <h2>Twitter Sentiment Analysis Tool</h2>
          <div className='search-bar'>
            <Search
              placeholder="Enter a Twitter username"
              enterButton="Search"
              size="large"
              onSearch={this.handleSearch}
            />
          </div>
          {this.state.validAccount && this.state.scores != undefined ? <LineChart username={this.state.username} scores={this.state.scores} /> : this.displayErrorMessage()}
        </div>
      </div>
    )
  }
}

export default UserSearch


