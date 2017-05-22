import { TASKS } from '../variables';
import { handleActions } from 'redux-actions';
import { ADD_TASK, DELETE_TASK, UPDATE_TASK, CHECK_TASK  } from '../constants/AppConstants'

export default handleActions({
    [ADD_TASK]: (state, action) => {
      console.log(ADD_TASK)
      console.log(action.payload.taskName)
      return [...state, { title: action.payload.taskName }]
    },
    [DELETE_TASK]: (state, action) => {
      console.log(DELETE_TASK)
      console.log(action.payload)
      state.splice(action.payload.taskIndex, 1);
      return [...state];
    },
    [UPDATE_TASK]: (state, action) => {
      console.log(UPDATE_TASK)
      console.log(action)
      state.splice(action.payload.taskParams.taskIndex, 1, { title:action.payload.taskParams.taskTitle });
      return [...state];
    },
    [CHECK_TASK]: (state, action) => {
      console.log(CHECK_TASK)
      console.log(action)
      state[action.payload.taskParams.taskIndex].isDone = action.payload.taskParams.isDone;
      return [...state];
    },
}, TASKS);
