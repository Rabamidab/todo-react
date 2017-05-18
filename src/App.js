import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputField from './components/InputField';
import Task from './components/Task';
import Filter from './components/Filter';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="todolist">
          <InputField onAddTrack={this.props.onAddTrack}/>
          <ul className="todolist__list">
            {
              this.props.taskStore.map((el, index) => {
                if (!el.isDone || (el.isDone && !this.props.isActiveFilterStore)) {
                  return (
                    <Task 
                      onUpdate={this.props.onUpdate} 
                      onDelete={this.props.onDelete} 
                      onCheck={this.props.onCheck}
                      index={index} 
                      key={index} 
                      title={el.title}
                      isDone={el.isDone}
                    />
                  );
                }
              })
            }
          </ul>
          <Filter onFilter={this.props.onFilter}/>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    taskStore: state.task,
    isActiveFilterStore: state.filter,
    // taskStore() {
    //   if (state.filter) {
    //     return state.task
    //   }
    //    else {
    //     let tasks = [];
    //     state.task.map((el) => { 
    //       if (!el.isDone) {
    //         tasks.push(el);
    //       }
    //     })
    //     return tasks;
    //   }
    // }
  }),
  dispatch => ({
    onAddTrack: (taskName) => {
      dispatch({ type: 'ADD_TASK', title: taskName })
    },
    onDelete: (taskIndex) => {
      dispatch({ type: 'DELETE_TASK', index: taskIndex })
    },
    onUpdate: (taskParams) => {
      dispatch({ type: 'UPDATE_TASK', params: taskParams, })
    },
    onCheck: (taskParams) => {
      dispatch({ type: 'CHECK_TASK', params: taskParams, })
    },
    onFilter: (isFilterActive) => {
      dispatch({ type: 'FILTER_DONE_TASKS', params: isFilterActive, })
    },
  })
)(App);
