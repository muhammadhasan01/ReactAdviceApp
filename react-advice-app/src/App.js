import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = { advice: '' };
        this.fetchAdvice = this.fetchAdvice.bind(this);
    }

    componentDidMount() {
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        axios.get("https://api.adviceslip.com/advice")
            .then((response) => {
                const { advice } = response.data.slip;
                this.setState({ advice });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        const { advice } = this.state;
        
        return (
            <div className="app">
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                    <button className="button" onClick={this.fetchAdvice}>
                        <span>GIVE ME ADVICE!!</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default App;