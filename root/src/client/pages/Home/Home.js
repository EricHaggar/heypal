import React from "react";
import { Input } from 'antd';
import './Home.css';
import axios from 'axios';
import Graph from '../../components/Graph';
const { Search } = Input;


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      scores: [],
      validAccount: false,
      errors: false,
      loading: false
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleInputError = this.handleInputError.bind(this);
    this.displayMessage = this.displayMessage.bind(this);
  }

  handleSearch = input => {
    if (input === null || input.match(/^ *$/) !== null) {
      this.handleInputError("Invalid Username!")
    } else {
      axios.post('api/getSentimentScores', {
        username: input,
      })
        .then(res => this.setState({ username: input, scores: res.data.scores, validAccount: true, errors: false, loading: true }, () => console.log(`${this.state.username} ${this.state.scores}`)))
        .catch(err => this.handleInputError(err))
    }
  }

  handleInputError = error => {
    console.log(error)
    this.setState({ username: "", scores: [], validAccount: false, errors: true, loading: false })
  }

  displayMessage = () => {
    if (this.state.errors || this.state.scores == undefined) {
      return <div className='error-message'><p>Invalid username! Please enter a valid username.</p></div>
    } else if (this.state.validAccount && this.state.scores < 10) {
      return <div className='error-message'><p>We're not receiving tweets for {this.state.username} at the moment.</p>
      </div>
    } else {
      return ""
    }
  }


  render() {
    const minNumberOfTweets = 10
    return (
      <div className='main-container'>
        <div className='header'>
          <p>HeyPal</p>
        </div>
        <div className='search-card'>
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
          </div>
          {this.state.errors || this.state.score == undefined || this.state.scores.length < minNumberOfTweets ? this.displayMessage() : null}
        </div >
        {this.state.validAccount && (this.state.scores != undefined) && (this.state.scores.length >= minNumberOfTweets) ? <Graph username={this.state.username} scores={this.state.scores} /> : null}
      </div >

    )
  }
}

export default Home;

