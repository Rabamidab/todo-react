import { handleActions } from 'redux-actions';
import { FILTER_DONE_TASKS  } from '../constants/AppConstants';
import { FILTER } from '../variables'

export default handleActions({
  [FILTER_DONE_TASKS]: (state, action) => {
    const newState = {...state};
    newState.isFilterDoneTasksActive = action.payload.isFilterActive.bool;
    return newState;
  },
}, FILTER);
