import React from "react";

function IndianPlayers(){

    const oddPlayers = [
        "Virat Kohli",
        "Hardik Pandya",
        "Jasprit Bumrah"
    ];


    const evenPlayers = [
        "Rohit Sharma",
        "KL Rahul",
        "Ravindra Jadeja"
    ];


    // Destructuring
    const [player1, player2, player3] = oddPlayers;


    // Merge arrays
    const T20players = [
        "Suryakumar",
        "Pant",
        "Gill"
    ];


    const RanjiTrophyPlayers = [
        "Pujara",
        "Rahane",
        "Vihari"
    ];


    const allPlayers = [
        ...T20players,
        ...RanjiTrophyPlayers
    ];


    return(
        <div>

            <h2>Indian Players</h2>

            <h3>Odd Team Players</h3>
            <p>
                {player1}, {player2}, {player3}
            </p>


            <h3>Even Team Players</h3>

            {
                evenPlayers.map((player)=>(
                    <p key={player}>{player}</p>
                ))
            }


            <h3>
                T20 + Ranji Trophy Players
            </h3>

            {
                allPlayers.map((player)=>(
                    <p key={player}>{player}</p>
                ))
            }

        </div>
    );

}

export default IndianPlayers;