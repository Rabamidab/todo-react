import React, { Component } from 'react';

export default class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }
  handleInputKey = (event) => {
    if (event.key === 'Enter'){
      this.props.onAddTrack(this.state.value);
      this.setState({ value: '' })
    }
  }
  handleChange = (event) => {
    this.setState({ value: event.target.value })
  }
  render() {
    return  <input 
              className="todolist__input"
              type="text"
              placeholder="Ваша новая задача"
              onKeyPress={this.handleInputKey}
              onChange={this.handleChange}
              value={this.state.value}
            />
  }
}