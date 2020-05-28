import React from 'react';
import './Home.css';
import UserSearch from '../../components/UserSearch';
import githubIcon from '../../images/githubIcon.svg';
import reactNode from '../../images/reactNode.png';
import scores from '../../images/scores.png';


class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-container">
        <div className="header-container">
          <div className="header-text">
            HeyPal
          </div>
        </div>
        <div className="body">
          <div className="intro-container">
            <div className="intro-text">
              <b>HeyPal</b>
              {' '}
is a natural language processing tool which analyzes
              <b>Twitter</b>
              {' '}
posts using sentiment
              analysis to detect signs of depression. This tool was designed as a prototype to provide
              analytics to social platforms in order to notify close friends, family and followers to check-up
              on the user. The sentiment analysis from a user's posts will generate a plot of the comparative sentiment scores.
              The average will also be shown and analyzed based on the following seniment score range:
              <br />
              <br />
              <center>
                <img src={scores} alt="image" height="45" />
              </center>
              <br />
              <br />
              <h4>
Technology Stack:
                <img src={reactNode} alt="image" height="45" />
              </h4>
              <h4>
Github Repo:
                <a href="https://github.com/EricHaggar/HeyPal" target="_blank"><img src={githubIcon} height="45" alt="image" /></a>
              </h4>
            </div>
          </div>
          <div className="search-graph-container">
            <div className="search-graph-text">
              <h4>Twitter Sentiment Analysis Tool</h4>
            </div>
            <div className="search-graph">
              <UserSearch />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
