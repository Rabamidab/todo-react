import React, { Component } from 'react';

class Task extends Component {
  render() {
    return  <li className="todolist__task">
              <input className="todolist__checked" type="checkbox"/>
              <span className="todolist__list-text">{this.props.task}</span>
              <button className="todolist__edit-task">Edit</button> 
              <button className="todolist__delete-task">Delete</button>
            </li>
  }
}

export default Task;