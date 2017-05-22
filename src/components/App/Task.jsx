import React, { Component , PropTypes } from 'react';

export default class Task extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    isDone: PropTypes.bool,
    onDelete: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
  }
  handleChangeState = () => {
    this.props.onCheck({
      taskIndex: this.props.index,
      isDone: !this.props.isDone
    });
  }
  handleDelete = () => {
    this.props.onDelete({ taskIndex: this.props.index });
  }
  handleUpdate = () => {
    const newTaskTitle = prompt('Как переименуем задачу?', this.props.title);
    this.props.onUpdate({ taskIndex: this.props.index, taskTitle: newTaskTitle });
  }
  render() {
    let checked = () => {
      if (this.props.isDone) {
        return true;
      } else {
        return false;
      }
    }
    return (
      <li className="todolist__task">
        <input 
          className="todolist__checked" 
          type="checkbox"
          checked={checked()}
          onChange={this.handleChangeState}
        />
        <span className="todolist__list-text">{this.props.title}</span>
        <button className="todolist__edit-task" onClick={this.handleUpdate}>Edit</button> 
        <button className="todolist__delete-task" onClick={this.handleDelete}>Delete</button>
      </li>
    );
  }
}
