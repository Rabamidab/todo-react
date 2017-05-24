import React, { Component } from 'react';
import InputField from '../../containers/InputField';
import Filter from '../../containers/Filter';
import TasksList from '../../containers/TasksList'
import SearchingField from '../../containers/SearchingField'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="todolist">
          <InputField />
          <SearchingField />
          <TasksList />
          <Filter />
        </div>
      </div>
    );
  }
}
