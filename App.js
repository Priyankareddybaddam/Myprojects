import React, { Component } from 'react';
import './App.css';
import Quiz from './Quiz';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Randomizer-Game</h1>
          <h2>Priyanka Baddam</h2>
        </div>
        <Quiz />
      </div>
    );
  }
}

export default App;
