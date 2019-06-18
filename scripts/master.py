import twitter_scraper
import twitter_api
import sentimental_analysis
import keyword_detection
import pyrebase
import config
import plot
import sys

sentiment_scores = list()
# category_scores = list()

# Get username 
username = sys.argv[1]

configuration = {
    "apiKey": config.api_key,
    "authDomain": config.auth_domain,
    "databaseURL": config.database_URL,
    "projectId": config.project_id,
    "storageBucket": config.storage_bucket,
    }

firebase = pyrebase.initialize_app(configuration)
database = firebase.database()

# gets user tweets using webscraping (beautiful soup)
# tweets = twitter_scraper.get_tweets(username)

# gets user tweets using TwitterAPI
number_of_tweets = 30
tweets = twitter_api.get_tweets(username, number_of_tweets)

if (tweets == -1):
    print("The user does not exist!")
else:
    database.child(username).child("sentiment_scores").remove()
    # database.child(username).child("category_scores").remove()

for tweet in tweets:
    sentiment_score = sentimental_analysis.get_scores(tweet)
    sentiment_scores.append(sentiment_score)

# category_scores = keyword_detection.calculate_scores(tweets)

database.child(username).child("sentiment_scores").set(sentiment_scores)
# database.child(username).child("category_scores").set(category_scores)

plot.generate_plots(sentiment_scores)
  
