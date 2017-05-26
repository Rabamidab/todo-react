import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { taskProps } from '../../constants/AppConstants';

export default class Task extends Component {
  static propTypes = {
    deleteTask: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired,
    checkTask: PropTypes.func.isRequired,
    upTask: PropTypes.func.isRequired,
    downTask: PropTypes.func.isRequired,
    el: taskProps,
  }
  static defaultProps = {
    el: {
      id: Math.random(),
      title: 'Безымянный',
      isDone: false,
    },
  }
  handleChangeState = () => {
    this.props.checkTask({
      taskIndex: this.props.el.id,
      isDone: !this.props.el.isDone,
    });
  }
  handleDelete = () => {
    this.props.deleteTask({ id: this.props.el.id });
  }
  handleUpdate = () => {
    const newTaskTitle = prompt('Как переименуем задачу?', this.props.el.title);
    this.props.updateTask({ taskIndex: this.props.el.id, taskTitle: newTaskTitle });
  }
  handleUp = () => {
    this.props.upTask({ id: this.props.el.id });
  }
  handleDown = () => {
    this.props.downTask({ id: this.props.el.id });
  }
  render() {
    return (
      <li className="todolist__task">
        <input
          className="todolist__checked"
          type="checkbox"
          checked={this.props.el.isDone}
          onChange={this.handleChangeState}
        />
        <span className="todolist__list-text">{this.props.el.title}</span>
        <button className="todolist__edit-task" onClick={this.handleUpdate}>Edit</button>
        <button className="todolist__delete-task" onClick={this.handleDelete}>Delete</button>
        <button className="todolist__up-task" onClick={this.handleUp}>↑</button>
        <button className="todolist__down-task" onClick={this.handleDown}>↓</button>
      </li>
    );
  }
}
