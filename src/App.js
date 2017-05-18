import React, { Component } from 'react';
import { connect } from 'react-redux';
// import logo from './logo.svg';
import './App.css';
import InputField from './components/InputField';
import Task from './components/Task';
import Filter from './components/Filter';
// import { TASKS } from './variables';

class App extends Component {
  render() {
    console.log(this.props.testStore);
    return (
      <div className="container">
        <div className="todolist">
          <InputField onAddTrack={this.props.onAddTrack}/>
        </div>
        <ul className="todolist__list">
          {
            this.props.testStore.map((el, index) => {
              return <Task isDone={true} key={index} title={el.title}/>
            })
          }
        </ul>
        <Filter />
      </div>
    );
  }
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({
    onAddTrack: (taskName) => {
      dispatch({ type: 'ADD_TASK', payload: taskName })
    }
  })
)(App);
