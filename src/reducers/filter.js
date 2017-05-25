import { handleActions } from 'redux-actions';
import { FILTER_DONE_TASKS, FIND_TASK, ACTIVATE_FILTER_DONE_TASKS } from '../constants/AppConstants';
import { FILTER } from '../variables'

export default handleActions({
  [FILTER_DONE_TASKS]: (state, action) => {
    const newState = {...state};
    newState.isDoneTasks = action.payload.filterParams.bool;
    return newState;
  },
  [ACTIVATE_FILTER_DONE_TASKS]: (state, action) => {
    const newState = {...state};
    newState.isFilterDoneTasksActive = action.payload.filterParams.bool;
    return newState;
  },
  [FIND_TASK]: (state, action) => {
    const newState = {...state};
    newState.wordForSearch = action.payload.taskTitle;
    return newState;
  },
}, FILTER);
