

def lossOfEnergy(text):
    keywords = {}
    with open("energy.txt") as words:
        for line in words:
            currentLine = line.split(",")
            keywords[str(currentLine[0])] = int(currentLine[1])
    score = 0
    text = text.lower()
    for key in keywords.keys():
        if(key in text):
            score += keywords[key]

    return score
    

    
def changeOfInterest(text):
    keywords = {}
    with open("changeInterest.txt") as words:
        for line in words:
            currentLine = line.split(",")
            keywords[str(currentLine[0])] = int(currentLine[1])
    
    score = 0
    text = text.lower()
    for key in keywords.keys():
        if(key in text):
            score += keywords[key]

    return score

def firstPronouns(text):
    keywords = {}
    with open("firstPronouns.txt") as words:
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
    with open("guilt.txt") as words:
        for line in words:
            currentLine = line.split(",")
            keywords[str(currentLine[0])] = int(currentLine[1])
    
    score = 0
    text = text.lower()
    for key in keywords.keys():
        if(key in text):
            score += keywords[key]

    return score


def indecisivness(text):
    keywords = {}
    with open("indecisivness.txt") as words:
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
    with open("negative.txt") as words:
        for line in words:
            currentLine = line.split(",")
            keywords[str(currentLine[0])] = int(currentLine[1])

    score = 0
    text = text.lower()
    for key in keywords.keys():
        if(key in text):
            score += keywords[key]

    return score

    

def detect(tweets):
    criterias = {}
    criterias["Energy"] = 0
    criterias["Interest"] = 0
    criterias["Pronouns"] = 0
    criterias["Guilt"] = 0
    criterias["Indecisivness"] = 0
    criterias["Negative"] = 0
    for tweet in tweets:
        criterias["Energy"]+= lossOfEnergy(tweet)
        criterias["Interest"]+= changeOfInterest(tweet)
        criterias["Pronouns"]+= firstPronouns(tweet)
        criterias["Guilt"]+= guilt(tweet)
        criterias["Indecisivness"]+= indecisivness(tweet)
        criterias["Negative"]+= negative(tweet)
    
    result = {}
    total = len(tweets)*10
    result["Energy"] = (criterias["Energy"]/total)*100
    result["Interest"] = (criterias["Interest"]/total)*100
    result["Pronouns"] = (criterias["Pronouns"]/total)*100
    result["Guilt"] = (criterias["Guilt"]/total)*100
    result["Indecisivness"] = (criterias["Indecisivness"]/total)*100
    result["Negative"] = (criterias["Negative"]/total)*100


    return result




tweets = ["This is a test", 'I feel tired and sad this is a burden or doubt change of heart i', "Lets see the total"]

print(detect(tweets))
   






