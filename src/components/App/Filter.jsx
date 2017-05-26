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
    messageForShowUndone: 'Показать активные задания',
    messageForShowDone: 'Показать выполненные задания',
    messageForActivate: 'Активируйте фильтр по выполненным заданиям',
    isActive: false,
  };
  onActiveHandle = () => {
    this.props.activateFilterDoneTasks({ bool: !this.props.filter.isFilterDoneTasksActive });
    this.setState({ isActive: !this.props.filter.isFilterDoneTasksActive });
  }
  changeState = () => {
    if (this.props.filter.isFilterDoneTasksActive) {
      this.props.filterDoneTasks({ bool: !this.props.filter.isDoneTasks });
    }
  }
  setButtonView = () => {
    if (this.props.filter.isFilterDoneTasksActive) {
      if (this.props.filter.isDoneTasks) {
        return this.state.messageForShowDone;
      }
      return this.state.messageForShowUndone;
    }
    return this.state.messageForActivate;
  }
  render() {
    return (
      <div className="todolist__filter">
        <input
          className="todolist__filter-activator"
          type="checkbox"
          checked={this.state.isActive}
          onClick={this.onActiveHandle}
        />
        <button className="todolist__filter-message" onClick={this.changeState}>
          {this.setButtonView()}
        </button>
      </div>
    );
  }
}
