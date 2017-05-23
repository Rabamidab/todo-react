import { TASKS } from '../variables';
import { handleActions } from 'redux-actions';
import { ADD_TASK, DELETE_TASK, UPDATE_TASK, CHECK_TASK  } from '../constants/AppConstants'

const index = (state, index) => {
  for (var i = 0; i < state.length; i++) {
    if (state[i].id === index) {
      return i;
    }
  }
}

export default handleActions({
    [ADD_TASK]: (state, action) => {
      return [...state, { title: action.payload.taskName, id: Math.random() }]
    },
    [DELETE_TASK]: (state, action) => {
      const taskIndex = index(state, action.payload.taskIndex.id);
      state.splice(taskIndex, 1);
      return [...state];
    },
    [UPDATE_TASK]: (state, action) => {
      state.splice(
                    index(state, action.payload.taskParams.taskIndex), 
                    1, 
                    { title:action.payload.taskParams.taskTitle }
                  );
      return [...state];
    },
    [CHECK_TASK]: (state, action) => {
      const taskIndex = index(state, action.payload.taskParams.taskIndex);
      state[taskIndex].isDone = action.payload.taskParams.isDone;
      return [...state];
    },
}, TASKS);
