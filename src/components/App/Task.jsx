import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { taskProps } from '../../constants/AppConstants'

export default class Task extends Component {
  static propTypes = {
    deleteTask: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired,
    checkTask: PropTypes.func.isRequired,
    task: taskProps,
  }
  handleChangeState = () => {
    // console.log(this.props.el.id)
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
    // console.log(newTaskTitle);
    this.props.updateTask({ taskIndex: this.props.el.id, taskTitle: newTaskTitle });
  }
  handleUp = () => {
    this.props.upTask({ id: this.props.el.id });
  }
  handleDown = () => {
    this.props.downTask({ id: this.props.el.id });
  }
  render() {
    // console.log(this.props)
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
        <button className="todolist__up-task" onClick={this.handleUp}>Up</button>
        <button className="todolist__down-task" onClick={this.handleDown}>Down</button>
      </li>
    );
  }
}
