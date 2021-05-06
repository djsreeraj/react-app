import React, { Component } from 'react'
export default class Counter extends Component {

    state = {
        counter : 0
    }
    doDecrement = () => {
        this.setState({
            counter : this.state.counter - 1
        });
    };
    doIncrement = () => {
        this.setState({
            counter : this.state.counter + 1
        });
    };
    render() {
        return (
            <div>
                 <p>{this.state.counter}</p>
                 <button onClick={this.doDecrement}>-</button>
                 <button onClick={this.doIncrement}>+</button>
            </div>
        )
    }
}
