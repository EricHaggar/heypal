def loss_of_energy(text):
    keywords = {}
    with open("categories/energy.txt") as words:
        for line in words:
            currentLine = line.split(",")
            keywords[str(currentLine[0])] = int(currentLine[1])
    score = 0
    text = text.lower()
    for key in keywords.keys():
        if(key in text):
            score += keywords[key]

    return score
    
def change_of_interest(text):
    keywords = {}
    with open("categories/interestChange.txt") as words:
        for line in words:
            currentLine = line.split(",")
            keywords[str(currentLine[0])] = int(currentLine[1])
    
    score = 0
    text = text.lower()
    for key in keywords.keys():
        if(key in text):
            score += keywords[key]

    return score

def first_pronouns(text):
    keywords = {}
    with open("categories/firstPronouns.txt") as words:
        for line in words:
            currentLine = line.split(",")
            keywords[str(currentLine[0])] = int(currentLine[1])

    score = 0
    text = text.lower()
    text = text.split()
    for word in text:
        if(word in keywords.keys()):
            score+=keywords[word]
            break

    return score


def guilt(text):
    keywords = {}
    with open("categories/guilt.txt") as words:
        for line in words:
            currentLine = line.split(",")
            keywords[str(currentLine[0])] = int(currentLine[1])
    
    score = 0
    text = text.lower()
    for key in keywords.keys():
        if(key in text):
            score += keywords[key]

    return score


def indecisiveness(text):
    keywords = {}
    with open("categories/indecisiveness.txt") as words:
        for line in words:
            currentLine = line.split(",")
            keywords[str(currentLine[0])] = int(currentLine[1])

    score = 0
    text = text.lower()
    for key in keywords.keys():
        if(key in text):
            score += keywords[key]

    return score

def negative(text):
    keywords = {}
    with open("categories/negative.txt") as words:
        for line in words:
            currentLine = line.split(",")
            keywords[str(currentLine[0])] = int(currentLine[1])

    score = 0
    text = text.lower()
    for key in keywords.keys():
        if(key in text):
            score += keywords[key]

    return score


def calculate_scores(tweets):
    criterias = {}
    criterias["Energy"] = 0
    criterias["Interest"] = 0
    criterias["Pronouns"] = 0
    criterias["Guilt"] = 0
    criterias["Indecisiveness"] = 0
    criterias["Negative"] = 0

    for tweet in tweets:
        criterias["Energy"]+= loss_of_energy(tweet)
        criterias["Interest"]+= change_of_interest(tweet)
        criterias["Pronouns"]+= first_pronouns(tweet)
        criterias["Guilt"]+= guilt(tweet)
        criterias["Indecisiveness"]+= indecisiveness(tweet)
        criterias["Negative"]+= negative(tweet)
    
    result = {}
    total = len(tweets)*10
    result["Energy"] = (criterias["Energy"]/total)*100
    result["Interest"] = (criterias["Interest"]/total)*100
    result["Pronouns"] = (criterias["Pronouns"]/total)*100
    result["Guilt"] = (criterias["Guilt"]/total)*100
    result["Indecisiveness"] = (criterias["Indecisiveness"]/total)*100
    result["Negative"] = (criterias["Negative"]/total)*100

    return result
