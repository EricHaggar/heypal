var express = require('express');
var router = express.Router();
var Twitter = require('twitter');
var config = require('../config.js');
var Sentiment = require('sentiment');

var twitter = new Twitter(config);
var sentiment = new Sentiment();



router.post('/getSentimentScores', (req, res) => {
   twitter.get('statuses/user_timeline.json', {screen_name: req.body.username, count: 30, lang: 'en'}, async function(error, tweets, response) {
      if (!error) {
         tweetsText = await tweets.map(tweet => {return tweet.text})

         var scores = []
         for (var i = 0; i < tweetsText.length; i++) {
            var result = await sentiment.analyze(tweetsText[i], {language: 'en'});
            scores.push(result.comparative)
         }
         res.send({"scores": scores})
      } else {
          res.send(error)
      }
  });
});



module.exports = router;