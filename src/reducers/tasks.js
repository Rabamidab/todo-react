import { handleActions } from 'redux-actions';
import _ from 'lodash';
import { TASKS } from '../variables';
import { ADD_TASK, DELETE_TASK, UPDATE_TASK, UP_TASK, DOWN_TASK } from '../constants/AppConstants';
import { getSortedByOrderTasks, getEquateOrderByIndexTasks } from '../selectors/App'

function shiftTask(state, action) {
  const id = action.payload.taskParams.id;
  let thisState = [...state];

  _.find(thisState, { id }).order = action.payload.taskParams.order;
  // сортирую список по возрастанию по значению order
  thisState = getSortedByOrderTasks(thisState);
  // присваиваю order значение index'a каждого элемента массива,
  // чтобы все значения order шли по порядку
  return getEquateOrderByIndexTasks(thisState);
}

export default handleActions({
  [ADD_TASK]: (state, action) => {
    return [
      ...state,
      {
        title: action.payload.taskName,
        id: Math.random(),
        isDone: false,
        order: state.length,
      },
    ];
  },
  [DELETE_TASK]: (state, action) => {
    const thisState = [...state];
    const id = action.payload.taskIndex.id;
    thisState.splice(_.findIndex(thisState, { id }), 1);
    return thisState;
  },
  [UPDATE_TASK]: (state, action) => {
    const thisState = [...state];
    const id = action.payload.taskParams.taskIndex;
    const taskTitle = action.payload.taskParams.taskTitle;
    if (taskTitle !== '') {
      _.find(thisState, { id }).title = action.payload.taskParams.taskTitle; 
    }
    _.find(thisState, { id }).isDone = action.payload.taskParams.isDone;

    return thisState;
  },
  [UP_TASK]: (state, action) => {
    return shiftTask(state, action);
  },
  [DOWN_TASK]: (state, action) => {
    return shiftTask(state, action);
  },
}, TASKS);
