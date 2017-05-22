import { TASKS } from '../variables';
import { handleActions } from 'redux-actions';
import { ADD_TASK, DELETE_TASK, UPDATE_TASK, CHECK_TASK  } from '../constants/AppConstants'

export default handleActions({
    [ADD_TASK]: (state, action) => {
      console.log(ADD_TASK)
      console.log(action)
      return [...state, action.title]
    },
    [DELETE_TASK]: (state, action) => {
      console.log(DELETE_TASK)
      console.log(action)
      state.splice(action.taskIndex, 1);
      return [...state];
    },
    [UPDATE_TASK]: (state, action) => {
      console.log(UPDATE_TASK)
      console.log(action)
      state.splice(action.params.taskIndex, 1, { title:action.params.taskTitle });
      return [...state];
    },
    [CHECK_TASK]: (state, action) => {
      console.log(CHECK_TASK)
      console.log(action)
      state[action.params.taskIndex].isDone = action.params.isDone;
      return [...state];
    },
}, TASKS);
