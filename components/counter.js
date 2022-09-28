import App from "next/app";
import React, { Component } from "react"



class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        });
    };

    reset = () => {
        this.setState({
            count: 0
        });
    };

    render() {
        return (
            <div>
                <div class="box">{this.state.count}</div>


                <button onClick={this.reset} class="smallbox reset">Reset</button>
                <button onClick={this.decrement} class="smallbox minus">-</button>
                <button onClick={this.increment} class="smallbox plus">+</button>
            </div>
        );
    }
}

export default Counter;