import React, { Component } from "react";
import Header from "./Header";
class Jokes extends Component {
    state = { joke: {} }

    componentDidMount() {
        fetch('https://joke.deno.dev/')
            .then(response => {
                return response.json()
            }).then(res => {
                this.setState({ joke: res })
            })
    }

    render() {

        const { setup, punchline } = this.state.joke
        return (
            <div>
                <Header />
                <h2>Highlighted Joke:</h2>
                <p>
                    {setup} <em>{punchline}</em>
                </p>
            </div>
        )
    }
}

export default Jokes