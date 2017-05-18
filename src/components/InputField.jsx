import React, { Component } from 'react';

class InputField extends Component {
  constructor(props) {
    super(props);
    this.handleInputKey = this.handleInputKey.bind(this);
  }
  handleInputKey(event) {
    if (event.key === 'Enter'){
      console.log(this.taskInput.value);
      this.props.onAddTrack({ title: this.taskInput.value });
      this.taskInput.value = '';
    }
  }
  render() {
    return  <input 
              className="todolist__input"
              type="text"
              placeholder="Ваша новая задача"
              onKeyPress={this.handleInputKey}
              ref={(input) => { this.taskInput = input; }}
            />
  }
}

export default InputField;