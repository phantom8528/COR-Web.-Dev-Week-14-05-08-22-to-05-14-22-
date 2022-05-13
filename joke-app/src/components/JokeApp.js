import { response } from 'express';
import React from 'react';

class JokeApp extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            joke: ' '
        }
    }
    
    render() {
        return(
            <div>
                <p>
                    {/* This is where the joke will go */}
                    {this.state.joke}
                    <button>New Joke</button>
                </p>
            </div>
        );
    }

    _fetchJoke(){
        const url = 'https://api.chucknorris.io/jokes/random?category=dev';
        fetch(url)
            .then(response => response.json())
            .then(jokeJson => {
                //put the text of the joke in the state
                this.setState({joke: jokeJson.value}, () => {console.log('New joke started');});
            });
    }
}

export default JokeApp;