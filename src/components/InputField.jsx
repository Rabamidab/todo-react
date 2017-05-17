import React, { Component } from 'react';

class InputField extends Component {
  render() {
    return  <input 
              className="todolist__input"
              type="text"
              placeholder="Ваша новая задача"
            />
  }
}

export default InputField;