import matplotlib.pyplot as plot
import matplotlib.pyplot as plt
import numpy as np
from matplotlib.ticker import MaxNLocator
from collections import namedtuple


def generate_plots(sentiment_scores):
   
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

""" n_groups = 6

    scores = category_scores.values()
    

    fig, ax = plt.subplots()

    index = np.arange(n_groups)


    ax.bar(index, scores, width=0.5)
    for i, v in enumerate(scores):
        ax.text(i-0.225, v + 0.5, "%.2f"%v, fontweight='bold')

    ax.set_xlabel('Group')
    ax.set_ylabel('Percentage (%)')
    ax.set_title('Emotional Analysis')
    ax.set_xticks(index)
    ax.set_xticklabels(category_scores.keys())
    fig.tight_layout()
    plt.show()
 """