import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

export default class TasksList extends Component {
  static propTypes = {
    taskStore: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
    onCheck: PropTypes.func.isRequired,
  }
  render() {
    return (
      <ul className="todolist__list">
        {
          this.props.taskStore.map((el, index) => {
            return (
              <Task 
                onUpdate={this.props.onUpdate} 
                onDelete={this.props.onDelete} 
                onCheck={this.props.onCheck}
                index={el.id} 
                key={index} 
                title={el.title}
                isDone={el.isDone}
              />
            );
          })
        }
      </ul>
    );
  }
}