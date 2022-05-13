import React from 'react';

import Increment from './Increment';
import Decrement from './Decrement';
import Output from './Output';

class Counter extends React.Component {

    //1. Setting the initial state in the constructor
    //NOTE: Constructor runs any time an instance of your component is created
    constructor(props){
        super(props);
        //2. Iniitializing the state
        //NOTE: this.state is always an object in React
        this.state = {
            count: props.initialCount || 0 //<-- Helps with the initial count value

        }

    }

    render() {
        return(
            <div>
                {/* <button>-</button>
                <button>42</button>
                <button>+</button> */}

                {/* Update Render method adding onClick prop to each button */}
                <button onClick={this._decrementerCounter}>-</button>
                <span>{this.state.count}</span>
                <button onClick={this._incrementCounter}>+</button>

                <Decrement handleClick={this._decrementerCounter} />
                <Output count={this.state.count} />
                <Increment handleClick={this._incrementCounter} />
            </div>
        );
    }
    //NOTE: the underscore (_) tells the developer that this is a custome function
    _incrementCounter =() => {
        //Call this.setState() to increment this.state.count
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log('Finished updating the count');
        })

    }

    _decrementerCounter = () => {
        this.setState({
            count: this.state.count - 1
        }, () => {
            console.log('Finished updating the count');
        })
    }


}

export default Counter;