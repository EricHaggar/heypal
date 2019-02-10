import twitter
import sentimental_analysis
import keyword_detection
import pyrebase
import config
import sys


def masterScript():
    sentiment_scores = list()
    category_scores = dict()

    file = open("username.txt", "r")
    username = file.readline()

    configuration = {

        "apiKey": config.api_key,
        "authDomain": config.auth_domain,
        "databaseURL": config.database_URL,
        "projectId": config.project_id,
        "storageBucket": config.storage_bucket,
    } 

    firebase = pyrebase.initialize_app(configuration)
    database = firebase.database()

    # gets user tweets
    tweets = twitter.get_tweets(username)

    if (tweets == -1):
        print("The user does not exist!")
    else: 
        database.child(username).child("sentiment_scores").remove()
        database.child(username).child("category_scores").remove()

        for tweet in tweets:
            sentiment_score = sentimental_analysis.get_scores(tweet)
            sentiment_scores.append(sentiment_score)

        category_scores = keyword_detection.calculate_scores(tweets)

        d = {'sScores': sentiment_score, 'cScores': category_scores}
        print(d)

        database.child(username).child("sentiment_scores").set(sentiment_scores)
        database.child(username).child("category_scores").set(category_scores)
    sys.stdout.flush()

masterScript()


            
                
