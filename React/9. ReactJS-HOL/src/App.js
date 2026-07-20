import React from "react";

import ListofPlayers from "./components/ListofPlayers";
import IndianPlayers from "./components/IndianPlayers";


function App(){

    let flag=true;


    return(

        <div>

            <h1>Cricket App</h1>


            {
                flag ?
                <ListofPlayers/>
                :
                <IndianPlayers/>
            }


        </div>

    );

}


export default App;