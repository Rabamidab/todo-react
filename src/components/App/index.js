import React, { Component } from 'react';
import InputField from './InputField';
import Task from './Task';
import Filter from './Filter';
import TasksList from './TasksList'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="todolist">
          <InputField onAddTrack={this.props.onAddTrack}/>
          <TasksList
            onUpdate={this.props.onUpdate} 
            onDelete={this.props.onDelete} 
            onCheck={this.props.onCheck}
            taskStore={this.props.taskStore}
            isActiveFilterStore={this.props.isActiveFilterStore}
          />
          
          <Filter isActiveFilterStore={this.props.isActiveFilterStore} onFilter={this.props.onFilter}/>
        </div>
      </div>
    );
  }
}
