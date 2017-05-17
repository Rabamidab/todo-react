import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (

      <div className="App">
        <div className="container">
          <div className="todolist">
            <input 
              className="todolist__input"
              type="text"
              placeholder="Ваша новая задача"
            />
          </div>
        </div>
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
