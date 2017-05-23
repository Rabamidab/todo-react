import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Task extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
    onCheck: PropTypes.func.isRequired,
    isDone: PropTypes.bool,
  }
  static defaultProps = {
    ...Component.defaultProps,
    isDone: false,
  }
  handleChangeState = () => {
    this.props.onCheck({
      taskIndex: this.props.index,
      isDone: !this.props.isDone
    });
  }
  handleDelete = () => {
    this.props.onDelete({ id: this.props.index });
  }
  handleUpdate = () => {
    const newTaskTitle = prompt('Как переименуем задачу?', this.props.title);
    this.props.onUpdate({ taskIndex: this.props.index, taskTitle: newTaskTitle });
  }
  render() {
    return (
      <li className="todolist__task">
        <input 
          className="todolist__checked" 
          type="checkbox"
          checked={this.props.isDone}
          onChange={this.handleChangeState}
        />
        <span className="todolist__list-text">{this.props.title}</span>
        <button className="todolist__edit-task" onClick={this.handleUpdate}>Edit</button> 
        <button className="todolist__delete-task" onClick={this.handleDelete}>Delete</button>
      </li>
    );
  }
}
