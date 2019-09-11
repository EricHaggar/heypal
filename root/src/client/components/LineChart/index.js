import React from 'react';
import { Line } from 'react-chartjs-2';
import './styles.css';

class LineChart extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const data = {
            labels: Array(this.props.scores.length).map((x) => x),
            datasets: [
                {
                    label: "comparative score",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: '#1890ff',
                    borderColor: '#1890ff',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: '#1890ff',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: '#1890ff',
                    pointHoverBorderColor: '#1890ff',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: this.props.scores
                }
            ]
        };

        const options = {
            legend: {
                display: false,
            },
            scales: {
                yAxes: [{
                    ticks: {
                        max: 1,
                        min: -1,
                        stepSize: 0.5
                    }
                }],
            },
            title: {
                display: true,
                fontSize: 15,
                text: `${this.props.username}'s Sentiment Scores`
            },
            responsive: true,
            maintainAspectRatio: false,
        };

        return (
            <div className='graph'>
                <Line data={data} options={options} height={500} />
            </div>
        );
    }
}

export default LineChart;



