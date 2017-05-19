import { TASKS } from '../variables';
import { handleActions } from 'redux-actions';

export default handleActions({
    ['ADD_TASK']: (state, action) => [...state, action.title],
    ['DELETE_TASK']: (state, action) => {
      state.splice(action.taskIndex, 1);
      return [...state];
    },
    ['UPDATE_TASK']: (state, action) => {
      state.splice(action.params.taskIndex, 1, { title:action.params.taskTitle });
      return [...state];
    },
    ['CHECK_TASK']: (state, action) => {
      state[action.params.taskIndex].isDone = action.params.isDone;
      return [...state];
    },
}, TASKS);


// export default function task(state = TASKS, action) {
//   if (action.type === 'ADD_TASK') {
//     return [
//       ...state,
//       action.title
//     ];
//   }
//   if (action.type === 'DELETE_TASK') {
//     state.splice(action.taskIndex, 1);
//     return [...state];
//   }
//   if (action.type === 'UPDATE_TASK') {
//     state.splice(action.params.taskIndex, 1, { title:action.params.taskTitle });
//     return [...state];
//   }
//   if (action.type === 'CHECK_TASK') {
//     state[action.params.taskIndex].isDone = action.params.isDone;
//     return [...state];
//   }
//   return state;
// }