import { connect } from 'react-redux';

import { getSearchingTasks, getFilteredTasks, getTasks, getSearchFilter, getDoneTasksFilter } from '../selectors/App';
import TasksList from '../components/App/TasksList';

const mapStateToProps = (state) => ({
  taskStore: getFilteredTasks(getDoneTasksFilter(state), getSearchingTasks(getSearchFilter(state), getTasks(state))),
});

export default connect(mapStateToProps, null)(TasksList);
