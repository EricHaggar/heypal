const express = require('express');
const Twitter = require('twitter');
const Sentiment = require('sentiment');
const config = require('../config.js');

const router = express.Router();
const twitter = new Twitter(config);
const sentiment = new Sentiment();

async function getSentimentScores(tweetsText) {
  const scores = [];
  for (let i = 0; i < tweetsText.length; i++) {
    const result = await sentiment.analyze(tweetsText[i], { language: 'en' });
    const score = await result.comparative;
    scores.push(score);
  }
  return scores;
}

async function getTweetsText(tweets) {
  const tweetsText = await tweets.map(tweet => tweet.text);
  return tweetsText;
}

router.post('/getSentimentScores', async (req, res) => {
  try {
    const tweets = await twitter.get('statuses/user_timeline.json', {
      screen_name: req.body.username,
      count: 20,
      lang: 'en',
    });
    const tweetsText = await getTweetsText(tweets);
    const scores = await getSentimentScores(tweetsText);
    res.send({ scores });
  } catch (error) {
    res.send({ error });
  }
});

module.exports = router;
