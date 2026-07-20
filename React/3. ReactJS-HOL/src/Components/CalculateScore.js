import React from "react";
import "../Stylesheets/mystyle.css";

function CalculateScore(props) {

    const score = ((props.Total / props.goal) * 100).toFixed(2);

    return (
        <div className="container">

            <h1>Student Details:</h1>

            <p>
                <span className="name">Name: </span>
                <span className="value">{props.Name}</span>
            </p>

            <p>
                <span className="school">School: </span>
                <span className="value">{props.School}</span>
            </p>

            <p>
                <span className="total">Total: </span>
                <span className="value">{props.Total} Marks</span>
            </p>

            <p>
                <span className="goal">Score: </span>
                <span className="value">{score}%</span>
            </p>

        </div>
    );
}

export default CalculateScore;