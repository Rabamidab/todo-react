import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Task from './Task';
import Task from '../../containers/Task'

export default class TasksList extends Component {
  static propTypes = {
    taskStore: PropTypes.array.isRequired,
  }
  render() {
    return (
      <ul className="todolist__list">
        {
          this.props.taskStore.map((el, index) => {
            return (
              <Task 
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