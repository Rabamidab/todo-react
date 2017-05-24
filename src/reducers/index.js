import { combineReducers } from 'redux';

import tasks from './tasks';
import filter from './filter.js';

export default combineReducers({
  tasks,
  filter
})