import React from "react";
import { Input } from 'antd';
import './styles.css';
import axios from 'axios';
const { Search } = Input;


class UserSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      scores: []
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch = input => {
    axios.post('api/getSentimentScores', {
      username: input,
    })
    .then(res =>  this.setState({username: input, scores: res.data.scores}, () => {console.log(this.state.username + ' ' + this.state.scores)}))
    .catch(err => alert(err))
  }

  render() {
    return (
      <div className='main-container'>
        <div className='text-container'>
          <h1>Twitter Sentiment Analysis</h1>
          <div className='search-bar'>
            <Search
              placeholder="Enter Twitter Username"
              enterButton="Search"
              size="large"
              onSearch={this.handleSearch}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default UserSearch


