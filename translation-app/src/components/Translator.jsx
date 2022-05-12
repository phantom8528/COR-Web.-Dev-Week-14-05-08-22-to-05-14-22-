import React from "react";
import rot13 from 'rot-thirteen';

class Translator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: props.initialText || ` `,
            translated: rot13(props.initialText) || ` `
        }
    }
    render(){
        return(
            <div>
                <h1>Translator</h1>
                {/* <input type={text} /> */}
                <input type="text" onChange={(event) => {
                    console.log(event.target.value);
                    this._updateText(event.target.value);
                    }}/>

                    {/* <input type="text" onChange={this._updateText} /> */}
   
                <p>{this.state.text}</p>
                {/* OPTION 1: rot13 version of the text below */}
                {/* <p>{rot13(this.state.text)}</p> */}
                {/* OPTION 2:  more efficient*/}
                <p>Rot13 Translation Below: </p>
                <p>{this.state.translated}</p>
            </div>
        );
    }

    _updateText = (newText) => {
        this.setState({
            text: newText,
            translated: rot13(newText) //<-- only takes place when there is user input
        }, () => {
            console.log(`Text updated to: ${newText}`);
        });
    }
}

export default Translator;