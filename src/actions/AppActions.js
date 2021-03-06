import { createAction } from 'redux-actions';
import {
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  FILTER_DONE_TASKS,
  UP_TASK,
  DOWN_TASK,
  FIND_TASK,
  ACTIVATE_FILTER_DONE_TASKS,
} from '../constants/AppConstants';

export const addTask = createAction(
  ADD_TASK, (taskName) => { return { taskName }; },
);

export const deleteTask = createAction(
  DELETE_TASK, (taskIndex) => { return { taskIndex }; },
);

export const updateTask = createAction(
  UPDATE_TASK, (taskParams) => { return { taskParams }; },
);

export const filterDoneTasks = createAction(
  FILTER_DONE_TASKS, (filterParams) => { return { filterParams }; },
);

export const upTask = createAction(
  UP_TASK, (taskParams) => { return { taskParams }; },
);

export const downTask = createAction(
  DOWN_TASK, (taskParams) => { return { taskParams }; },
);

export const findTask = createAction(
  FIND_TASK, (taskTitle) => { return { taskTitle }; },
);

export const activateFilterDoneTasks = createAction(
  ACTIVATE_FILTER_DONE_TASKS, (filterParams) => { return { filterParams }; },
);
