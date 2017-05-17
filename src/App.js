import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './components/InputField';
import Task from './components/Task';
import Filter from './components/Filter'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="todolist">
          <InputField />
        </div>
        <ul className="todolist__list">
          <Task task="Сходить за пивом"/>
          <Task task="Убить снеговика"/>
        </ul>
        <Filter />
      </div>
    );
  }
}

export default App;
