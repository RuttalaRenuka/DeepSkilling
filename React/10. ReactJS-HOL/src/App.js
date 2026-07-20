import React from "react";
import "./App.css";


function App() {


  const office = {
    name: "DBS Office Space",
    rent: 55000,
    address: "Hyderabad"
  };


  const offices = [
    {
      name: "Tech Park",
      rent: 75000,
      address: "Bangalore"
    },
    {
      name: "Startup Hub",
      rent: 45000,
      address: "Chennai"
    },
    {
      name: "Corporate Office",
      rent: 90000,
      address: "Mumbai"
    }
  ];


  return (

    <div>

      {/* JSX Heading Element */}
      <h1 style={{color:"blue"}}>
        Office Space Rental App
      </h1>


      {/* Image Attribute */}
      <img 
        src={require("./office.jpg")}
        width="300"
        height="200"
        alt="Office Space"
      />


      <h2>
        Office Details
      </h2>


      {/* Display Object Details */}

      <p>
        Name : {office.name}
      </p>

      <p>
        Rent : 
        <span style={{
          color: office.rent < 60000 ? "red" : "green"
        }}>
          {" "}₹{office.rent}
        </span>
      </p>

      <p>
        Address : {office.address}
      </p>



      <h2>
        Available Office Spaces
      </h2>


      {

        offices.map((item,index)=>(

          <div key={index}>

            <h3>
              {item.name}
            </h3>

            <p>
              Rent :
              <span
              style={{
                color:item.rent < 60000 ? "red" : "green"
              }}
              >
              {" "}₹{item.rent}
              </span>
            </p>


            <p>np
            </p>


            <hr/>

          </div>

        ))

      }


    </div>

  );
}


export default App;