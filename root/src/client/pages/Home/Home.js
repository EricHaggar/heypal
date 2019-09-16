import React from "react";
import './Home.css';
import UserSearch from '../../components/UserSearch';


class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='main-container'>
        <div className='header-container'>
          <div className='header-text'>
            HeyPal
          </div>
        </div>
        <div className='body'>
          <div className='intro-container'>
            <div className='intro-text'>
              <b>HeyPal</b> is a natural language processing tool which analyzes <b>Twitter</b> posts using sentiment
              analysis to detect signs of depression. This tool was designed as a prototype to provide
              analytics to social platforms in order to notify close friends, family and followers to check-up
              on the user.<br /><br />
              <h4>Technology Stack: <img src="https://hackernoon.com/hn-images/1*-NOQtyJAGQ1RNC3iVt_thA.png" alt="image" height="45" /></h4> 
              <h4>Github Repo: <a href="https://github.com/EricHaggar/HeyPal" target="_blank"><img src="https://image.flaticon.com/icons/svg/25/25231.svg" height="45" alt="image"/></a></h4>
            </div>
          </div>
          <div className='search-graph-container'>
            <div className='search-graph-text'>
              <h4>Twitter Sentiment Analysis Tool</h4>
            </div>
            <div className='search-graph'>
              < UserSearch />
            </div>
          </div >
        </div>
      </div >
    )
  }
}

export default Home;

