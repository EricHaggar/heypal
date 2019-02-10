import twitter

file = open("username.txt", "r")
username = file.readline()

twitter.get_tweets(username)