import twitter
import sentimental_analysis

sentiment_scores = list()
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
    



        
               
