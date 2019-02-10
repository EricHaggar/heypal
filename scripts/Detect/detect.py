
def lossOfEnergy(text):
    keywords = {}
    with open("energy.txt") as words:
        for line in words:
            currentLine = line.split(",")
            keywords[str(currentLine[0])] = int(currentLine[1])

    
def changeOfInterest(text):
    keywords = {}
    with open("changeInterest.txt") as words:
        for line in words:
            currentLine = line.split(",")
            keywords[str(currentLine[0])] = int(currentLine[1])

def firstPronouns(text):
    keywords = {}
    with open("firstPronouns.txt") as words:
        for line in words:
            currentLine = line.split(",")
            keywords[str(currentLine[0])] = int(currentLine[1])


def guilt(text):
    keywords = {}
    with open("guilt.txt") as words:
        for line in words:
            currentLine = line.split(",")
            keywords[str(currentLine[0])] = int(currentLine[1])


def indecisivness(text):
    keywords = {}
    with open("indecisivness.txt") as words:
        for line in words:
            currentLine = line.split(",")
            keywords[str(currentLine[0])] = int(currentLine[1])



def negative(text):
    keywords = {}
    file = open("negative.txt", "r")
    for line in file:
        currentLine = line.split(",")
        keywords[str(currentLine[0])] = int(currentLine[1])

    print(keywords)


def questions(text):
    keywords = {}
    with open("questions.txt") as words:
        for line in words:
            currentLine = line.split(",")
            keywords[str(currentLine[0])] = int(currentLine[1])


def thirdPronouns(text):
    keywords = {}
    with open("thirdPronouns.txt") as words:
        for line in words:
            currentLine = line.split(",")
            keywords[str(currentLine[0])] = int(currentLine[1])



