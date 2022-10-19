import App from "next/app";
import React, { useState, Component, useRef} from "react"


const widthx = document.getElementById('id');
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
        var x = 2.5;
        return (
            <div>
                <div class="box" style={{fontSize: '7.5rem', padding: '30px'}} id="box"> </div> {/* {this.state.count} */}


                <button onClick={this.reset} class="smallbox reset">Reset</button>
                <button onClick={this.decrement} class="smallbox minus">-</button>
                <button onClick={this.increment} class="smallbox plus">+</button>
            </div>
        );
    }
}

export default Counter;