import { combineReducers } from 'redux';

import task from './tasks';
import filter from './filter.js';

export default combineReducers({
  task,
  filter
})