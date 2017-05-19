// import { createAction } from 'redux-actions';
import { handleActions } from 'redux-actions';

// export default function filterTracks(state = false, action) {
//   if (action.type === 'FILTER_DONE_TASKS') {
//     return action.params.isFilterActive;
//   }
//   return state;
// }

export default handleActions({
    ['FILTER_DONE_TASKS']: (state, action) => action.params.isFilterActive,
}, false);