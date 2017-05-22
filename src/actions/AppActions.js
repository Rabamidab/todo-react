import { createAction } from 'redux-actions';
import { ADD_TASK, DELETE_TASK, UPDATE_TASK, CHECK_TASK, FILTER_DONE_TASKS  } from '../constants/AppConstants';

export const onAddTrack = createAction(
  ADD_TASK, (taskName) => { title: taskName }
);

export const onDelete = createAction(
  DELETE_TASK, (taskIndex) => { payload: taskIndex }
);

export const onUpdate = createAction(
  UPDATE_TASK, (taskParams) => { params: taskParams }
);

export const onCheck = createAction(
  CHECK_TASK, (taskParams) => { params: taskParams }
);

export const onFilter = createAction(
  FILTER_DONE_TASKS, (isFilterActive) => { params: isFilterActive }
);
