var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);

exports.getTweets = function(username) {
    T.get('statuses/user_timeline.json', {screen_name: username, count: 10, lang: 'en'}, function(error, tweets, response) {
        if (!error) {
            return tweets.map(tweet => tweet.text);
        } else {
            return error
        }
    });
}