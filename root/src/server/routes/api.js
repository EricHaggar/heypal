var express = require('express');
var router = express.Router();
var Twitter = require('twitter');
var config = require('../config.js');
var Sentiment = require('sentiment');

var twitter = new Twitter(config);
var sentiment = new Sentiment();


router.post('/getSentimentScores', async (req, res) => {
   try {
      let tweets = await twitter.get('statuses/user_timeline.json', { screen_name: req.body.username, count: 20, lang: 'en' })
      let tweetsText = await getTweetsText(tweets)
      let scores = await getSentimentScores(tweetsText)
      res.send({ "scores": scores })
   } catch (error) {
      res.send({ "error": error })
   }
});

async function getTweetsText(tweets) {
   let tweetsText = await tweets.map(tweet => { return tweet.text })
   return tweetsText
}

async function getSentimentScores(tweetsText) {
   var scores = []
   for (var i = 0; i < tweetsText.length; i++) {
      var result = await sentiment.analyze(tweetsText[i], { language: 'en' });
      let score = await result.comparative
      scores.push(score)
   }
   return scores
}

module.exports = router;