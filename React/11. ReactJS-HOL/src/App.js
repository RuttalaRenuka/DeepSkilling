import React, { Component } from "react";
import CurrencyConvertor from "./components/CurrencyConvertor";


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      count: 0
    };

  }


  // Method 1
  increment = () => {

    this.setState({
      count: this.state.count + 1
    });

  }


  // Method 2
  sayHello = () => {

    alert("Hello! Welcome to React Event Handling");

  }


  // Multiple methods
  increase = () => {

    this.increment();
    this.sayHello();

  }


  decrement = () => {

    this.setState({
      count: this.state.count - 1
    });

  }


  sayWelcome = (message) => {

    alert(message);

  }


  // Synthetic event
  onPress = () => {

    alert("I was clicked");

  }



  render(){

    return(

      <div>

        <h1>React Event Examples App</h1>


        <h2>
          Counter : {this.state.count}
        </h2>


        <button onClick={this.increase}>
          Increase
        </button>


        <button onClick={this.decrement}>
          Decrement
        </button>



        <br/><br/>


        <button 
          onClick={() => this.sayWelcome("Welcome")}
        >
          Say Welcome
        </button>



        <br/><br/>


        <button onClick={this.onPress}>
          OnPress
        </button>



        <hr/>


        <CurrencyConvertor />


      </div>

    );

  }

}


export default App;