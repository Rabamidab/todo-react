import _ from 'lodash';

export const getFilteredTasks = (filter, tasks) => {
  if (filter.isFilterDoneTasksActive) {
    if (filter.isDoneTasks) {
      return _.filter(tasks, { isDone: false });
    }
    return _.filter(tasks, { isDone: true });
  }
  return tasks;
};

export const getSearchingTasks = (filter, tasks) => {
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
};

export function getTasks(state) {
  return state.tasks;
}

export function getFilter(state) {
  return state.filter;
}

export function getDoneTasksFilter(state) {
  return {
    isFilterDoneTasksActive: getFilter(state).isFilterDoneTasksActive,
    isDoneTasks: getFilter(state).isDoneTasks,
  };
}

export function getSearchFilter(state) {
  return {
    isSearchActive: getFilter(state).isSearchActive,
    wordForSearch: getFilter(state).wordForSearch,
  };
}

export const getSortedByOrderTasks = (tasks) => {
  return _.sortBy(tasks, ['order']);
};

export const getEquateOrderByIndexTasks = (tasks) => {
  tasks.forEach((el, index) => {
    el.order = index;
  });
  return tasks;
};
