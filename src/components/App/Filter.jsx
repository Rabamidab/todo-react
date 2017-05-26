import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { filterProps } from '../../constants/AppConstants';

export default class Filter extends Component {
  static propTypes = {
    filter: filterProps.isRequired,
    filterDoneTasks: PropTypes.func.isRequired,
    activateFilterDoneTasks: PropTypes.func.isRequired,
  }
  state = {
    messageForShowUndone: 'Активные задания',
    messageForShowDone: 'Выполненные задания',
    allMessages: 'Все задания',
    value: 'allMessages',
  };
  handleChange = (event) => {
    this.setState({value: event.target.value});
    switch (event.target.value) {
      case 'allMessages':
        this.props.activateFilterDoneTasks({ bool: false });
        break;
      case 'messageForShowUndone':
        this.props.activateFilterDoneTasks({ bool: true });
        this.props.filterDoneTasks({ bool: true });
        break;
      case 'messageForShowDone':
        this.props.activateFilterDoneTasks({ bool: true });
        this.props.filterDoneTasks({ bool: false });
        break;
      default:
        break;
    }
  }
  render() {
    return (
      <div>
        <select className="todolist__select" value={this.state.value} onChange={this.handleChange}>
            <option value="allMessages">{this.state.allMessages}</option>
            <option value="messageForShowUndone">{this.state.messageForShowUndone}</option>
            <option value="messageForShowDone">{this.state.messageForShowDone}</option>
        </select>
      </div>
    );
  }
}
