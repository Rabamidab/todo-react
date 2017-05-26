import PropTypes from 'prop-types';

export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const FILTER_DONE_TASKS = 'FILTER_DONE_TASKS';
export const ACTIVATE_FILTER_DONE_TASKS = 'ACTIVATE_FILTER_DONE_TASKS';
export const UP_TASK = 'UP_TASK';
export const DOWN_TASK = 'DOWN_TASK';
export const FIND_TASK = 'FIND_TASK';

export const taskProps = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
});

export const filterProps = PropTypes.shape({
  isDoneTasks: PropTypes.bool.isRequired,
  isFilterDoneTasksActive: PropTypes.bool.isRequired,
});
