import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { filterProps } from '../../constants/AppConstants'

export default class Filter extends Component {
  static propTypes = {
    filter: PropTypes.objectOf(filterProps).isRequired,
    filterDoneTasks: PropTypes.func.isRequired,
  }
  state = {
    message: 'Активируйте фильтр по выполненным заданиям',
    messageForHide: 'Показать активные задания',
    messageForShow: 'Показать выполненные задания',
    messageForActive: 'Активируйте фильтр по выполненным заданиям',
    isActive: false,
  };
  changeState = () => {
    if (this.props.filter.isFilterDoneTasksActive){
      this.props.filterDoneTasks({ bool: !this.props.filter.isDoneTasks });
      this.changeTriggerView();
    }
  }
  onActiveHandle = () => {
    this.props.activateFilterDoneTasks({ bool: !this.props.filter.isFilterDoneTasksActive });
    this.setState({ isActive: !this.props.filter.isFilterDoneTasksActive, });

    if (this.props.filter.isFilterDoneTasksActive){
      this.setState({ message: this.state.messageForActive, });
    } else {
      this.changeTriggerView()
    }
  }
  changeTriggerView = () => {
    if (this.props.filter.isDoneTasks) {
      this.setState({ message: this.state.messageForHide, });
    } else {
      this.setState({ message: this.state.messageForShow, });
    }
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
        <div onClick={this.changeState}>
          {this.state.message}
        </div>
      </div>
    );
  }
}
