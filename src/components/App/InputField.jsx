import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputField extends Component {
  static propTypes = {
    addTask: PropTypes.func.isRequired,
  }
  state = {
    value: '',
  };
  handleInputKey = (event) => {
    if (event.key === 'Enter') {
      this.props.addTask(this.state.value);
      this.setState({ value: '' });
    }
  }
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <input
        className="todolist__input"
        type="text"
        placeholder="Ваша новая задача"
        onKeyPress={this.handleInputKey}
        onChange={this.handleChange}
        value={this.state.value}
      />
    );
  }
}
