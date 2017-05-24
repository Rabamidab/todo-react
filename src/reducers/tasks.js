import { handleActions } from 'redux-actions';
import _ from 'lodash';
import { TASKS } from '../variables';
import { ADD_TASK, DELETE_TASK, UPDATE_TASK, CHECK_TASK } from '../constants/AppConstants';

export default handleActions({
  [ADD_TASK]: (state, action) => {
    return [...state, { title: action.payload.taskName, id: Math.random(), isDone: false }];
  },
  [DELETE_TASK]: (state, action) => {
    const id = action.payload.taskIndex.id;
    state.splice(_.findIndex(state, { id }), 1);
    return [...state];
  },
  [UPDATE_TASK]: (state, action) => {
    const id = action.payload.taskParams.taskIndex;
    console.log(action.payload.taskParams.taskTitle)
    state[_.findIndex(state, { id })].title = action.payload.taskParams.taskTitle;
    console.log(...state)
    return [...state];
  },
  [CHECK_TASK]: (state, action) => {
    const id = action.payload.taskParams.taskIndex;
    _.find(state, { id }).isDone = action.payload.taskParams.isDone;
    return [...state];
  },
}, TASKS);
