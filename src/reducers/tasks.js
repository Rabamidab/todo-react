import { handleActions } from 'redux-actions';
import _ from 'lodash';
import { TASKS } from '../variables';
import { ADD_TASK, DELETE_TASK, UPDATE_TASK, CHECK_TASK, UP_TASK, DOWN_TASK } from '../constants/AppConstants';

function shiftTask(state, action) {
  const id = action.payload.taskIndex.id;
  let thisState = [...state];
  switch (action.type) {
    case UP_TASK:
      _.find(thisState, { id }).order -= 2;
      break;
    case DOWN_TASK:
      _.find(thisState, { id }).order += 2;
      break;
    default:
      break;
  }
  // сортирую список по возрастанию по значению order
  thisState = _.sortBy(thisState, ['order']);
  // присваиваю order значение index'a каждого элемента массива,
  // чтобы все значения order шли по порядку
  thisState.forEach((el, index) => {
    el.order = index;
  });

  return thisState;
}

export default handleActions({
  [ADD_TASK]: (state, action) => {
    return [
      ...state, 
      { 
        title: action.payload.taskName,
        id: Math.random(),
        isDone: false,
        order: state.length
      }
    ];
  },
  [DELETE_TASK]: (state, action) => {
    let thisState = [...state];
    const id = action.payload.taskIndex.id;
    thisState.splice(_.findIndex(thisState, { id }), 1);
    return thisState;
  },
  [UPDATE_TASK]: (state, action) => {
    let thisState = [...state];
    const id = action.payload.taskParams.taskIndex;
    _.find(thisState, { id }).title = action.payload.taskParams.taskTitle;
    return thisState;
  },
  [CHECK_TASK]: (state, action) => {
    let thisState = [...state];
    const id = action.payload.taskParams.taskIndex;
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
