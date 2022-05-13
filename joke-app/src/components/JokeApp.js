import React from 'react';

class JokeApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            joke: ' ',
            isLoading: false
        };
    }
    
    render() {
        return (
            <div>
                <p>{this.state.joke}</p>
                {/* {this.state.isLoading && '...Loading Joke'}
                {this.state.isLoading === false && this.state.joke} */}
                <button onClick={this._fetchJoke}>New Joke</button>
            </div>
        );
    }

    _fetchJoke = () => {
        const url = 'https://api.chucknorris.io/jokes/random?category=dev';
        fetch(url)
            .then(response => response.json())
            .then(jokeJson => {
                // Put the text of the joke in state
                this.setState({joke: jokeJson.value,}, () => {console.log('New joke stored');
                });
            });
    }
}

export default JokeApp;