import _ from 'lodash';
import { createSelector } from 'reselect';

export function getTasks(state) {
  return state.tasks;
}

export function getFilter(state) {
  return state.filter;
}

export const searchingTasksSelector = createSelector(
  [getFilter, getTasks],
  (filter, tasks) => {
    if (filter.wordForSearch !== '') {
      const filteredTasks = _.filter(tasks, (el) => {
        if (el.title.indexOf(filter.wordForSearch) !== -1) {
          return true;
        }
        return false;
      });
      return filteredTasks;
    }
    return tasks;
  }
);

export const filteredTasksSelector = createSelector(
  [getFilter, searchingTasksSelector],
  (filter, tasks) => {
    if (filter.isFilterDoneTasksActive) {
      if (filter.isDoneTasks) {
        return _.filter(tasks, { isDone: false });
      }
      return _.filter(tasks, { isDone: true });
    }
    return tasks;
  }
);

export const getDoneTasksFilter = createSelector(
  [getFilter],
  (filter) => {
    return {
      isFilterDoneTasksActive: filter.isFilterDoneTasksActive,
      isDoneTasks: filter.isDoneTasks,
    };
  }
);

export const getSearchFilter = createSelector(
  [getFilter],
  (filter) => {
    return {
      isSearchActive: filter.isSearchActive,
      wordForSearch: filter.wordForSearch,
    };
  }
);

export const getSortedByOrderTasks = (tasks) => {
  return _.sortBy(tasks, ['order']);
};

export const getEquateOrderByIndexTasks = (tasks) => {
  tasks.forEach((el, index) => {
    el.order = index;
  });
  return tasks;
};
