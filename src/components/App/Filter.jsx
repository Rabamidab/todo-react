import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { filterProps } from '../../constants/AppConstants'

export default class Filter extends Component {
  static propTypes = {
    filter: PropTypes.objectOf(filterProps).isRequired,
    filterDoneTasks: PropTypes.func.isRequired,
  }
  changeState = () => {
    this.props.filterDoneTasks({ bool: !this.props.filter.isFilterDoneTasksActive });
  }
  render() {
    console.log( filterProps )
    if (this.props.filter.isFilterDoneTasksActive) {
      return (
        <a href="#app/filter" className="todolist__filter" onClick={this.changeState}>
          Показать выполненные задания
        </a>
      );
    } else {
      return (
        <a href="#app/all" className="todolist__filter" onClick={this.changeState}>
          Скрыть выполненные задания
        </a>
      );
    }
  }
}
