import React from "react";
import { Input } from 'antd';
import './styles.css';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
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
      .then(res => this.setState({ username: input, scores: res.data.scores }, () => { console.log(this.state.username + ' ' + this.state.scores) }))
      .catch(err => alert(err))
  }

  render() {
    let data = {
      datasets: [
        {
          label: 'Scores',
          fill: true,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.state.scores
        }
      ]
    }
    var ScoresChart = () => <Line data={data}/>
    
    return (
      <div className='main-container'>
        <div className='text-search-container'>
          <h1>Twitter Sentiment Analysis</h1>
          <div className='search-bar'>
            <Search
              placeholder="Enter a Twitter username"
              enterButton="Search"
              size="large"
              onSearch={this.handleSearch}
            />
          </div>
        </div>
        <div className='graph'>
            {(this.state.scores.length != 0 && this.state.username.trim() != "") ? < ScoresChart/> : null }
        </div>
      </div>
    )
  }
}

export default UserSearch


