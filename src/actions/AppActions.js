import { createAction } from 'redux-actions';
import { ADD_TASK, DELETE_TASK, UPDATE_TASK, CHECK_TASK, FILTER_DONE_TASKS  } from '../constants/AppConstants';

export const onAddTrack = createAction(
  ADD_TASK, (taskName) => { { taskName } }
);

export const onDelete = createAction(
  DELETE_TASK, (taskIndex) => { { taskIndex } }
);

export const onUpdate = createAction(
  UPDATE_TASK, (taskParams) => { { taskParams } }
);

export const onCheck = createAction(
  CHECK_TASK, (taskParams) => { return { taskParams } }
);

export const onFilter = createAction(
  FILTER_DONE_TASKS, (isFilterActive) => { return { isFilterActive } }
);
