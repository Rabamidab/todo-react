import React, { Component , PropTypes } from 'react';

class Task extends Component {
  // static propTypes = {
  //   title: PropTypes.string.isRequired,
  // }
  handleChangeState() {
    this.props.onCheck({ taskIndex: this.props.index, isDone: this.taskCheckbox.checked});
  }
  handleDelete() {
    this.props.onDelete({ taskIndex: this.props.index });
  }
  handleUpdate() {
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
          onChange={this.handleChangeState.bind(this)}
          ref={(checkbox) => { this.taskCheckbox = checkbox; }}
        />
        <span className="todolist__list-text">{this.props.title}</span>
        <button className="todolist__edit-task" onClick={this.handleUpdate.bind(this)}>Edit</button> 
        <button className="todolist__delete-task" onClick={this.handleDelete.bind(this)}>Delete</button>
      </li>
    );
  }
}

export default Task;
