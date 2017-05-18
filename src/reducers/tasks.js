import { TASKS } from '../variables';

export default function task(state = TASKS, action) {
  if (action.type === 'ADD_TASK') {
    return [
      ...state,
      action.title
    ];
  }
  if (action.type === 'DELETE_TASK') {
    state.splice(action.index.taskIndex, 1);
    return [...state];
  }
  if (action.type === 'UPDATE_TASK') {
    state.splice(action.params.taskIndex, 1, { title:action.params.taskTitle });
    return [...state];
  }
  if (action.type === 'UPDATE_TASK') {
    state.splice(action.params.taskIndex, 1, { title:action.params.taskTitle });
    return [...state];
  }
  if (action.type === 'CHECK_TASK') {
    state[action.params.taskIndex].isDone = action.params.isDone;
    return [...state];
  }
  return state;
}