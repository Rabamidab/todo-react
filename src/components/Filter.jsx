import React, { Component } from 'react';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = { isFilterActive: false };
  }
  changeState() {
    this.setState({ isFilterActive: !this.state.isFilterActive });
  }
  render() {
    if (this.state.isFilterActive) {
      return  <a href="#app/filter" className="todolist__filter" onClick={this.changeState.bind(this)}>Показать выполненные задания</a>
    } else {
      // console.log(this.state.isFilterActive);
      return  <a href="#app/all" className="todolist__filter" onClick={this.changeState.bind(this)}>Скрыть выполненные задания</a>
    }
  }
}

export default Filter;