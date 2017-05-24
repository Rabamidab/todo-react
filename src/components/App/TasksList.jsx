import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Task from './Task';
import Task from '../../containers/Task';
import { taskProps } from '../../constants/AppConstants';

export default class TasksList extends Component {
  static propTypes = {
    taskStore: PropTypes.arrayOf(
      taskProps,
    ).isRequired,
  }
  render() {
    return (
      <ul className="todolist__list">
        {
          this.props.taskStore.map((el, index) => {
            return (
              <Task
                el={el}
                id={el.id}
                key={el.id}
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
