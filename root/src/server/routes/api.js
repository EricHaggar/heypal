var express = require('express');
var router = express.Router();
var twitter = require('../twitter');


router.get('/getSentimentScores', (req, res) => {
    res.send(twitter.getTweets("realDonaldTrump"))
});

module.exports = router;