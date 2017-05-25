import { handleActions } from 'redux-actions';
import _ from 'lodash';
import { TASKS } from '../variables';
import { ADD_TASK, DELETE_TASK, UPDATE_TASK, CHECK_TASK, UP_TASK, DOWN_TASK } from '../constants/AppConstants';

function shiftTask(state, action) {
  const id = action.payload.taskIndex.id;

  switch (action.type) {
    case UP_TASK:
      _.find(state, { id }).order -= 2;
      break;
    case DOWN_TASK:
      _.find(state, { id }).order += 2;
      break;
    default:
      break;
  }
  // сортирую список по возрастанию по значению order
  state = _.sortBy(state, ['order']);
  // присваиваю order значение index'a каждого элемента массива,
  // чтобы все значения order шли по порядку
  state.forEach((el, index) => {
    el.order = index;
  });

  return state;
}

export default handleActions({
  [ADD_TASK]: (state, action) => {
    // console.log(state.length)
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
    console.log(action.payload.taskParams.taskTitle)
    thisState[_.findIndex(thisState, { id })].title = action.payload.taskParams.taskTitle;
    console.log(thisState)
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
  // [FIND_TASK]: (state, action) => {
  //   console.log(action.payload.taskTitle)
  //   let newState = _.filter(state, (st) => {
  //     if (st.title.indexOf(action.payload.taskTitle) !== -1 || action.payload.taskTitle === ''){
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   });
  //   console.log(newState)
  //   return newState;
  // },
}, TASKS);
