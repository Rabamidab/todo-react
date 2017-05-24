import { createAction } from 'redux-actions';
import { ADD_TASK, DELETE_TASK, UPDATE_TASK, CHECK_TASK, FILTER_DONE_TASKS } from '../constants/AppConstants';

export const addTask = createAction(
  ADD_TASK, (taskName) => { return { taskName }; },
);

export const deleteTask = createAction(
  DELETE_TASK, (taskIndex) => { return { taskIndex }; },
);

export const updateTask = createAction(
  UPDATE_TASK, (taskParams) => { return { taskParams }; },
);

export const checkTask = createAction(
  CHECK_TASK, (taskParams) => { return { taskParams }; },
);

export const filterDoneTasks = createAction(
  FILTER_DONE_TASKS, (isFilterActive) => { return { isFilterActive }; },
);
