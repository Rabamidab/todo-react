import _ from 'lodash';

export const getFilteredTasks = (filter, tasks) => {
  if (filter) {
    return _.filter(tasks, { 'isDone': false });
  }
  return tasks;
}

export function getTasks(state) {
  return state.tasks;
}

export function getFilter(state) {
  return state.filter.isFilterDoneTasksActive;
}

export const getSortedByOrderTasks = (tasks) => {
  return _.sortBy(tasks, ['order']);
}

