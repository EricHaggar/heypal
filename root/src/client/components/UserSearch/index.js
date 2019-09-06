import React from "react";
import { Input } from 'antd';
import './styles.css';
const { Search } = Input;


class UserSearch extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch = input => {
    console.log(input)
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


