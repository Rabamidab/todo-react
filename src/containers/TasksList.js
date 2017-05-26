import { connect } from 'react-redux';

import { filteredTasksSelector ,searchingTasksSelector, getSearchingTasks, getFilteredTasks, getTasks, getSearchFilter, getDoneTasksFilter } from '../selectors/App';
import TasksList from '../components/App/TasksList';

// const mapStateToProps = (state) => ({
//     order: getOrder(state),
//     tickets: getOrderTickets(state),
//     seance: getOrderSeance(state),
// });



const mapStateToProps = (state) => ({
  taskStore: filteredTasksSelector(state)
  
});

export default connect(mapStateToProps, null)(TasksList);
