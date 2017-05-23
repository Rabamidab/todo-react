export const getFilteredTasks = (tasks, filter) => {
  let selectedTasks = [];
  tasks.map((el) => {
    if (!el.isDone || (el.isDone && !filter)) {
      selectedTasks.push(el);
    }
  });
  return selectedTasks;
}