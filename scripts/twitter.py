import urllib
from urllib.error import HTTPError
import urllib.request
from bs4 import BeautifulSoup
import sys
import json

def get_tweets(username):
    twitter = "https://twitter.com/"
    url = twitter + username
    
    try:
        page = urllib.request.urlopen(url)
        soup = BeautifulSoup(page, "html.parser")
        tweets = list()
        for tweet in soup.findAll('div', {"class":"content"}):
            tweet_text = tweet.find('p').text
            tweets.append(tweet_text)
        print(tweets)
    
    except HTTPError:
        pass

