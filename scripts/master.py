import twitter
import sentimental_analysis
import keyword_detection

sentiment_scores = list()
category_scores = dict()

file = open("username.txt", "r")
username = file.readline()

# gets user tweets
tweets = twitter.get_tweets(username)

if (tweets == -1):
    print("The user does not exist!")
else: 
    for tweet in tweets:
        sentiment_score = sentimental_analysis.get_scores(tweet)
        sentiment_scores.append(sentiment_score)


    category_scores = keyword_detection.calculate_scores(tweets)
    




        
               
