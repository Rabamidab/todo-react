import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { taskProps } from '../../constants/AppConstants';

export default class Task extends Component {
  static propTypes = {
    deleteTask: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired,
    upTask: PropTypes.func.isRequired,
    downTask: PropTypes.func.isRequired,
    task: taskProps,
  }
  static defaultProps = {
    task: {
      id: Math.random(),
      title: 'Безымянный',
      isDone: false,
    },
  }
  handleCheck = () => {
    this.props.updateTask({
      taskIndex: this.props.task.id,
      isDone: !this.props.task.isDone,
      taskTitle: '',
    });
  }
  handleDelete = () => {
    this.props.deleteTask({ id: this.props.task.id });
  }
  handleUpdate = () => {
    const newTaskTitle = prompt('Как переименуем задачу?', this.props.task.title);
    this.props.updateTask({ taskIndex: this.props.task.id, taskTitle: newTaskTitle, isDone: this.props.task.isDone });
  }
  handleUp = () => {
    this.props.upTask({ id: this.props.task.id, order: this.props.task.order-2 });
  }
  handleDown = () => {
    this.props.downTask({ id: this.props.task.id, order: this.props.task.order+2 });
  }
  render() {
    return (
      <li className="todolist__task">
        <input
          className="todolist__checked"
          type="checkbox"
          checked={this.props.task.isDone}
          onChange={this.handleCheck}
        />
        <span className="todolist__list-text">{this.props.task.title}</span>
        <button className="todolist__edit-task" onClick={this.handleUpdate}>Edit</button>
        <button className="todolist__delete-task" onClick={this.handleDelete}>Delete</button>
        <button className="todolist__up-task" onClick={this.handleUp}>↑</button>
        <button className="todolist__down-task" onClick={this.handleDown}>↓</button>
      </li>
    );
  }
}
