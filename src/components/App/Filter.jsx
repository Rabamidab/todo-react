import React, { Component , PropTypes } from 'react';

export default class Filter extends Component {
  static propTypes = {
    isActiveFilterStore: PropTypes.bool.isRequired,
    onFilter: PropTypes.func.isRequired,
  }
  changeState = () => {
    this.props.onFilter({ isFilterActive: !this.props.isActiveFilterStore })
  }
  render() {
    if (this.props.isActiveFilterStore) {
      return  <a href="#app/filter" className="todolist__filter" onClick={this.changeState}>Показать выполненные задания</a>
    } else {
      return  <a href="#app/all" className="todolist__filter" onClick={this.changeState}>Скрыть выполненные задания</a>
    }
  }
}
