import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchingField extends Component {
  static propTypes = {
    findTask: PropTypes.func.isRequired,
  }
  state = {
    value: '',
  };
  handleChange = (event) => {
    this.setState({ value: event.target.value });
    this.props.findTask(event.target.value);
  }
  render() {
    return (
      <input
        className="todolist__search"
        type="text"
        onChange={this.handleChange}
        value={this.state.value}
        placeholder="Поиск"
      />
    );
  }
}
