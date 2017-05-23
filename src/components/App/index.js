import React, { Component } from 'react';
import InputField from '../../containers/InputField';
import Filter from '../../containers/Filter';
import TasksList from '../../containers/TasksList'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="todolist">
          <InputField />
          <TasksList />
          <Filter />
        </div>
      </div>
    );
  }
}
