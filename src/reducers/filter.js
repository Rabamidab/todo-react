import { handleActions } from 'redux-actions';
import { FILTER_DONE_TASKS  } from '../constants/AppConstants';

export default handleActions({
  [FILTER_DONE_TASKS]: (state, action) => {
    return action.payload.isFilterActive.bool;
  },
}, false);
