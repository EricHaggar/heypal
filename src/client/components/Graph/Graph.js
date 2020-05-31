import React from "react";
import PropTypes from "prop-types";
import { Line } from "react-chartjs-2";
import "./Graph.css";

const Graph = ({ username, scores }) => {
    const data = {
        labels: Array(scores?.length).map((x) => x),
        datasets: [
            {
                label: "comparative score",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "#1890ff",
                borderColor: "#1890ff",
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: "miter",
                pointBorderColor: "#1890ff",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 0,
                pointHoverBackgroundColor: "#1890ff",
                pointHoverBorderColor: "#1890ff",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 0,
                data: scores,
            },
        ],
    };

    const options = {
        legend: {
            display: false,
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        max: 1,
                        min: -1,
                        stepSize: 0.5,
                    },
                },
            ],
        },
        title: {
            display: true,
            fontSize: 15,
            text: `Sentiment Scores for ${username}`,
        },
        maintainAspectRatio: true,
    };

    return (
        <div className="graph">
            <Line data={data} options={options} />
        </div>
    );
};

Graph.propTypes = {
    username: PropTypes.string,
    scores: PropTypes.arrayOf(PropTypes.number),
};

Graph.defaultProps = {
    username: undefined,
    scores: undefined,
};

export default Graph;
