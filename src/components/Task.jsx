import React, { Component , PropTypes } from 'react';

class Task extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = { isDone: false };
    this.handleChangeState = this.handleChangeState.bind(this);
  }

  handleChangeState() {
    this.setState({ isDone: !this.state.isDone });
  }

  render() {
    return  <li className="todolist__task">
              <input 
                className="todolist__checked" 
                type="checkbox"
                checked={this.state.isDone}
                onChange={this.handleChangeState}
              />
              <span className="todolist__list-text">{this.props.title}</span>
              <button className="todolist__edit-task">Edit</button> 
              <button className="todolist__delete-task">Delete</button>
            </li>
  }
}

export default Task;
