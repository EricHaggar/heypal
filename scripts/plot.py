import matplotlib.pyplot as plot

def generate_plots(sentiment_scores, category_scores):
   
    x_axis = list()
    y_axis = sentiment_scores

    count = 0

    for i in range(len(sentiment_scores)):
        x_axis.append(count)
        count += 1

    plot.plot(x_axis,y_axis)


    plot.xlabel('Number of Posts')
    plot.ylabel('Sentimental Score')

    plot.title('Sentiment Analysis')
    plot.axhline(y = -1.0, linestyle  = '--', color='red')
    plot.axhline(y = -0.25, linestyle  = '--', color='orange')
    plot.axhline(y = 1.0, linestyle  = '--', color='green')
    plot.show()

   





