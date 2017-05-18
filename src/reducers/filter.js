export default function filterTracks(state = false, action) {
  if (action.type === 'FILTER_DONE_TASKS') {
    return action.params.isFilterActive;
  }
  return state;
}