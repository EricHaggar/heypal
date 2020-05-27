import React from 'react';
import { Input } from 'antd';
import './UserSearch.css';
import axios from 'axios';
import Graph from '../Graph';

const { Search } = Input;


class UserSearch extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         username: 'Example',
         scores: [0.07142857142857142, 1, 0, 0.4, -0.2857142857142857, 0, 0.125, -0.18181818181818182, 0.5625, 0.11764705882352941, -0.3333333333333333, 0.375, 0, 0.15384615384615385, -0.11764705882352941, 0, -0.15384615384615385, 0, 0.2631578947368421, 0.23076923076923078],
         validAccount: true,
         errors: false,
      };
      this.handleSearch = this.handleSearch.bind(this);
      this.handleInputError = this.handleInputError.bind(this);
      this.displayMessage = this.displayMessage.bind(this);
   }

    handleSearch = (input) => {
       if (input === null || input.match(/^ *$/) !== null) {
          this.handleInputError('Invalid Username!');
       } else {
          axios.post('api/getSentimentScores', {
             username: input,
          })
             .then(res => this.setState({
                username: input, scores: res.data.scores, validAccount: true, errors: false
             }, () => console.log(`${this.state.username} ${this.state.scores}`)))
             .catch(err => this.handleInputError(err));
       }
    }

    handleInputError = (error) => {
       console.log(error);
       this.setState({
          username: '', scores: [], validAccount: false, errors: true
       });
    }

    displayMessage = () => {
       if (!this.state.validAccount || this.state.scores == undefined) {
          return <div className="error-message"><p>Invalid username! Please enter a valid username.</p></div>;
       } if (this.state.validAccount && this.state.scores < 10) {
          return (
            <div className="error-message">
               <p>
We're not receiving tweets for
                  {this.state.username}
                  {' '}
at the moment.
                </p>
             </div>
          );
       }
       return '';
    }

    render() {
       const minNumberOfTweets = 10;
       return (
         <div className="search-graph-wrapper">
            <div className="search-bar">
               <Search
                  placeholder="Enter a Twitter Username"
                  enterButton="Search"
                  size="large"
                  onSearch={this.handleSearch}
                />
               {this.state.errors || this.state.score == undefined || this.state.scores.length < minNumberOfTweets ? this.displayMessage() : null}
             </div>
            {this.state.validAccount && (this.state.scores != undefined) && (this.state.scores.length >= minNumberOfTweets)
                ? <Graph username={this.state.username} scores={this.state.scores} /> : <Graph />}
          </div>
       );
    }
}

export default UserSearch;
