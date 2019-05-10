import tweepy
from config import consumer_key, consumer_secret, access_token, access_secret

def get_tweets(username, number_of_tweets):
    # Initializing tweets list
    tweets = list()

    # Accessing user tweets
    auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
    auth.set_access_token(access_token, access_secret)  
    api = tweepy.API(auth) 
  
    # Fetching tweets from user
    user_tweets = api.user_timeline(screen_name = username) 

    for tweet in user_tweets:
        tweets.append(tweet.text)
    
    return tweets
