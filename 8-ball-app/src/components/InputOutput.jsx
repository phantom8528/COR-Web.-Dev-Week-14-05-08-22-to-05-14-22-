import React from "react";

class InputOutput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: props.initialText || ` `
        }
    }

    render(){

        return(
            <div>
                <h2>Input goes here</h2>
                <input className="input-field" type="text" onChange={(event) => {
                    console.log(event.target.value);
                    }}>
                </input>
                <button onClick={this._getAnswer}>Answer</button>
                <h2>Output goes here</h2>
                <p>{this.state.text}</p>

            </div>

        )
    }

    _getAnswer = () => {
        //This is where the fetch api will go for the 8-ball api
        // let params = encodeURIComponent("Is today going to be a good day?");
        let newParams = encodeURIComponent(`${'input-field'}`)
        let uri = "https://8ball.delegator.com/magic/JSON/" + newParams;
        fetch(uri)
            .then(response => response.json())
            .then(json => {
                this.setState({text: json.magic.answer,}, () => {console.log('You Have your answer');
            });
                // console.log(json.magic.answer);
        });
        
    }
}





export default InputOutput;