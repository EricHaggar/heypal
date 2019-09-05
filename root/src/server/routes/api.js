var express = require('express');
var router = express.Router();
var Twitter = require('twitter');
var config = require('../config.js');
var T = new Twitter(config);


router.get('/getSentimentScores', (req, res) => {
   console.log(req.body.username)
   T.get('statuses/user_timeline.json', {screen_name: req.body.username, count: 10, lang: 'en'}, async function(error, tweets, response) {
      if (!error) {
         tweetsText = await tweets.map(tweet => {return tweet.text})
         res.send(tweetsText)
      } else {
          res.send(error)
      }
  });
});



module.exports = router;