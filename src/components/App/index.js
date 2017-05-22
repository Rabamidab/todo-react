import React, { Component } from 'react';
import InputField from './InputField';
import Task from './Task';
import Filter from './Filter';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="todolist">
          <InputField onAddTrack={this.props.onAddTrack}/>
          <ul className="todolist__list">
            {
              this.props.taskStore.map((el, index) => {
                // Условие, смотрящее включен ли триггер фильтра по задачам, и в зависимости от этого выводящее таски
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
          <Filter isActiveFilterStore={this.props.isActiveFilterStore} onFilter={this.props.onFilter}/>
        </div>
      </div>
    );
  }
}

