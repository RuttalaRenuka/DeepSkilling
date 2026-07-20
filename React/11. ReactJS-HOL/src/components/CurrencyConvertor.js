import React, { Component } from "react";

class CurrencyConvertor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            rupees: 0,
            euro: 0
        };
    }


    handleChange = (event) => {

        this.setState({
            rupees: event.target.value
        });

    }


    handleSubmit = () => {

        this.setState({

            euro: this.state.rupees / 90

        });

    }


    render() {

        return (

            <div>

                <h2>Currency Convertor</h2>

                <input
                    type="number"
                    placeholder="Enter Rupees"
                    onChange={this.handleChange}
                />

                <button onClick={this.handleSubmit}>
                    Convert
                </button>


                <h3>
                    Euro : {this.state.euro}
                </h3>


            </div>

        );

    }

}

export default CurrencyConvertor;