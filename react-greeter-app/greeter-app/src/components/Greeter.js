import React from 'react'; //<-- We imported the react library

class Greeter extends React.Component{
    //Make greeter return some JSX
    render(){
        return (
            <h1>Hello Once More, {this.props.name}</h1>
        )
    }
}
export default Greeter;

