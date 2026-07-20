import React from "react";

function ListofPlayers() {

    const players = [
        {name:"Virat Kohli", score:85},
        {name:"Rohit Sharma", score:65},
        {name:"KL Rahul", score:75},
        {name:"Hardik Pandya", score:60},
        {name:"Ravindra Jadeja", score:80},
        {name:"Rishabh Pant", score:55},
        {name:"Shubman Gill", score:90},
        {name:"Jasprit Bumrah", score:72},
        {name:"Mohammed Siraj", score:45},
        {name:"Suryakumar Yadav", score:88},
        {name:"Kuldeep Yadav", score:68}
    ];


    // Using map()
    const playerList = players.map((player)=>(
        <li key={player.name}>
            {player.name} - {player.score}
        </li>
    ));


    // Using arrow function filter()
    const filteredPlayers = players.filter(
        (player)=> player.score < 70
    );


    return(
        <div>

            <h2>List of Players</h2>

            <ul>
                {playerList}
            </ul>


            <h2>Players with score below 70</h2>

            <ul>
            {
                filteredPlayers.map((player)=>(
                    <li key={player.name}>
                        {player.name} - {player.score}
                    </li>
                ))
            }
            </ul>

        </div>
    );
}

export default ListofPlayers;