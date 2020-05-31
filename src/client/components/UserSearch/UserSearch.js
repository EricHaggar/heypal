import React, { useState } from "react";
import { Input } from "antd";
import "./UserSearch.css";
import axios from "axios";
import Graph from "../Graph";

const { Search } = Input;

const UserSearch = () => {
    const [username, setUsername] = useState("Example");
    const [scores, setScores] = useState([
        0.07142857142857142,
        1,
        0,
        0.4,
        -0.2857142857142857,
        0,
        0.125,
        -0.18181818181818182,
        0.5625,
        0.11764705882352941,
        -0.3333333333333333,
        0.375,
        0,
        0.15384615384615385,
        -0.11764705882352941,
        0,
        -0.15384615384615385,
        0,
        0.2631578947368421,
        0.23076923076923078,
    ]);

    const [validAccount, setValidAccount] = useState(true);
    const [errors, setErrors] = useState(false);
    const minNumberOfTweets = 10;

    const handleInputError = (error) => {
        console.log(error);

        setUsername("");
        setScores([]);
        setValidAccount(false);
        setErrors(true);
    };

    const handleSearch = (input) => {
        if (input === null || input.match(/^ *$/) !== null) {
            handleInputError("Invalid Username!");
        } else {
            axios
                .post("api/getSentimentScores", {
                    username: input,
                })
                .then((res) => {
                    setUsername(input);
                    setScores(res.data.scores);
                    setValidAccount(true);
                    setErrors(false);
                })
                .catch((err) => handleInputError(err));
        }
    };

    const displayMessage = () => {
        if (!validAccount || !scores) {
            return (
                <div className="error-message">
                    <p>Invalid username! Please enter a valid username.</p>
                </div>
            );
        }
        if (validAccount && scores < 10) {
            return (
                <div className="error-message">
                    <p>
                        We&apos;re not receiving tweets for
                        {username} at the moment.
                    </p>
                </div>
            );
        }

        return "";
    };

    return (
        <div className="search-graph-wrapper">
            <div className="search-bar">
                <Search
                    placeholder="Enter a Twitter Username"
                    enterButton="Search"
                    size="large"
                    onSearch={handleSearch}
                />
                {errors || errors === undefined || scores?.length < minNumberOfTweets ? displayMessage() : null}
            </div>
            {validAccount && scores !== undefined && scores.length >= minNumberOfTweets ? (
                <Graph username={username} scores={scores} />
            ) : (
                <Graph />
            )}
        </div>
    );
};

export default UserSearch;
