const express = require("express");
const Twitter = require("twitter");
const Sentiment = require("sentiment");
const config = require("../config.js");

const router = express.Router();
const twitter = new Twitter(config);
const sentiment = new Sentiment();

const getSentimentScores = (tweetsText) => {
    const scores = [];

    tweetsText.forEach((tweetText) => {
        scores.push(sentiment.analyze(tweetText, { language: "en" }).comparative);
    });

    return scores;
};

const getTweetsText = (tweets) => {
    const tweetsText = tweets.map((tweet) => tweet.text);
    return tweetsText;
};

router.post("/getSentimentScores", async (req, res) => {
    try {
        const tweets = await twitter.get("statuses/user_timeline.json", {
            screen_name: req.body.username,
            count: 20,
            lang: "en",
        });
        const tweetsText = getTweetsText(tweets);
        const scores = getSentimentScores(tweetsText);
        res.send({ scores });
    } catch (error) {
        res.send({ error });
    }
});

module.exports = router;
